from fastapi import APIRouter, HTTPException
import httpx
import schemas

router = APIRouter(prefix="/api/v1/ai", tags=["Neural Copilot (Llama 3)"])

OLLAMA_URL = "http://localhost:11434/api/generate"

# In-memory store for conversation history (User ID -> List of Strings)
memory_store = {}

def update_memory(user_id: str, role: str, msg: str):
    if user_id not in memory_store:
        memory_store[user_id] = []
    memory_store[user_id].append(f"{role}: {msg}")
    # Keep only the last 6 messages (3 turns) to save context length
    memory_store[user_id] = memory_store[user_id][-6:]

def build_stealth_prompt(user_role: str, question: str, history: list):
    context = "\n".join(history)
    
    # 🛡️ THE ELITE STEALTH PERSONA
    system_prompt = f"""You are the 'Neural Copilot', an elite, highly professional AI assistant for 'Stealth Labs'.
Stealth Labs specializes in Software Development, Defense Tech, and Applied Research.
Your tone must be crisp, industrial, and highly intelligent. Do not use emojis. 
Be concise and direct. You are talking to a {user_role.upper()} of the system.

Conversation History:
{context}

User: {question}
AI:"""
    return system_prompt

@router.post("/ask", response_model=schemas.AIChatResponse)
async def ask_neural_copilot(query: schemas.AIChatRequest):
    # Dummy user_id and role for now (In real app, extract from JWT Token)
    user_id = "node_alpha_99" 
    user_role = "Student/Engineer"

    # 1. Update memory with user's question
    update_memory(user_id, "User", query.question)
    history = memory_store.get(user_id, [])

    # 2. Build the Persona-driven Prompt
    prompt = build_stealth_prompt(user_role, query.question, history)

    try:
        # 3. Async call to local Ollama (Llama 3)
        async with httpx.AsyncClient() as client:
            res = await client.post(
                OLLAMA_URL,
                json={
                    "model": "llama3",
                    "prompt": prompt,
                    "stream": False
                },
                timeout=30.0 # LLMs can take a few seconds
            )
            
        if res.status_code != 200:
            raise HTTPException(status_code=500, detail="Local LLM Node is unresponsive.")
            
        ai_response = res.json().get("response", "Error: Empty response from Neural Core.")
        
        # 4. Update memory with AI's answer
        update_memory(user_id, "AI", ai_response)
        
        return {"answer": ai_response}

    except Exception as e:
        print(f"Ollama Connection Error: {str(e)}")
        # Graceful fallback if Ollama is not running
        fallback_msg = "SYSTEM OFFLINE: Local Llama3 node is not reachable. Please ensure Ollama is running on port 11434."
        return {"answer": fallback_msg}