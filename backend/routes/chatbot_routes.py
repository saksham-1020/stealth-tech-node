from fastapi import APIRouter, Depends
from auth_utils import verify_token
from ai_chatbot import build_prompt, generate_ai, get_memory, update_memory

router = APIRouter()

@router.post("/ask")
def ask_ai(data: dict, user=Depends(verify_token)):
    user_id = user.get("id", "default")
    role = user.get("role", "student")
    question = data.get("question")

    history = get_memory(user_id)

    prompt = build_prompt(role, question, history)

    answer = generate_ai(prompt)

    update_memory(user_id, f"User: {question}")
    update_memory(user_id, f"AI: {answer}")

    return {"response": answer}