from fastapi import APIRouter
from database import SessionLocal
from models import Student

router = APIRouter()

# ===== ASSIGN PROJECT =====
@router.post("/admin/assign-project")
def assign_project(email:str, project:str):

    db = SessionLocal()
    student = db.query(Student).filter(Student.email==email).first()

    if not student:
        return {"msg":"student not found"}

    student.project = project
    student.experience = "Working on " + project
    db.commit()

    return {"msg":"project assigned"}
