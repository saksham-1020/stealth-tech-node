from fastapi import APIRouter
from database import SessionLocal
from models import Student

router = APIRouter()

# ===== STUDENT DASHBOARD =====
@router.get("/student/dashboard/{email}")
def student_dashboard(email:str):
    db = SessionLocal()

    student = db.query(Student).filter(Student.email==email).first()

    if not student:
        return {"msg":"student not found"}

    return {
        "name": student.name,
        "email": student.email,
        "skill": student.skill,
        "experience": student.experience,
        "project": student.project,
        "placement_status": student.placement_status
    }


# ===== UPDATE PLACEMENT STATUS (ADMIN) =====
@router.post("/admin/update-placement")
def update_placement(email:str, status:str):
    db = SessionLocal()

    student = db.query(Student).filter(Student.email==email).first()

    if not student:
        return {"msg":"student not found"}

    student.placement_status = status
    db.commit()

    return {"msg":"placement updated"}
