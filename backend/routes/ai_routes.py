from fastapi import APIRouter

router = APIRouter()

@router.post("/ai-chat")
def ai_chat(message:str):

    msg = message.lower()

    if "placement" in msg:
        reply = "Placement depends on real project performance and skill verification."

    elif "resume" in msg:
        reply = "Build strong resume with real projects, GitHub links and AI skills."

    elif "internship" in msg:
        reply = "We provide real-world AI & software internship with project experience."

    elif "project" in msg:
        reply = "Students work on real AI, backend and startup level projects."

    elif "ai" in msg:
        reply = "STEALTH AI builds real AI SaaS systems and automation tools."

    else:
        reply = "Ask about placement, AI, internship, projects or career guidance."

    return {"response": reply}
