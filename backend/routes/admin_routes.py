from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import SessionLocal
from models import Student, Certificate
from auth_utils import admin_required   # admin protection

router = APIRouter(prefix="/admin", tags=["Admin"])

# =========================
# DB SESSION
# =========================
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# =========================
# ADMIN DASHBOARD STATS
# =========================
@router.get("/dashboard")
def admin_dashboard(
    user=Depends(admin_required),  # 🔐 admin token required
    db: Session = Depends(get_db)
):
    total_students = db.query(Student).count()
    total_certificates = db.query(Certificate).count()

    placed_students = db.query(Student).filter(
        Student.placement_status == "placed"
    ).count()

    not_eligible = db.query(Student).filter(
        Student.placement_status == "Not Eligible"
    ).count()

    return {
        "status": "STEALTH AI Admin Active",
        "total_students": total_students,
        "total_certificates": total_certificates,
        "placed_students": placed_students,
        "not_eligible_students": not_eligible,
    }


# =========================
# ALL STUDENTS
# =========================
@router.get("/students")
def all_students(
    user=Depends(admin_required),   # 🔐 admin only
    db: Session = Depends(get_db)
):
    students = db.query(Student).all()

    return [
        {
            "id": s.id,
            "name": s.name,
            "email": s.email,
            "skill": s.skill,
            "experience": s.experience,
            "project": s.project,
            "placement_status": s.placement_status,
        }
        for s in students
    ]


# =========================
# DELETE STUDENT
# =========================
@router.delete("/delete-student/{student_id}")
def delete_student(
    student_id: int,
    user=Depends(admin_required),   # 🔐 admin only
    db: Session = Depends(get_db)
):
    student = db.query(Student).filter(Student.id == student_id).first()

    if not student:
        return {"msg": "Student not found"}

    db.delete(student)
    db.commit()

    return {"msg": "Student deleted successfully"}


# =========================
# VIEW CERTIFICATES
# =========================
@router.get("/certificates")
def view_certificates(
    user=Depends(admin_required),   # 🔐 admin only
    db: Session = Depends(get_db)
):
    certificates = db.query(Certificate).all()

    return [
        {
            "id": c.id,
            "student_name": c.student_name,
            "course": c.course,
            "certificate_id": c.certificate_id,
        }
        for c in certificates
    ]
