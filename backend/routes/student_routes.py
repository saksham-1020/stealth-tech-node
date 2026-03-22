from fastapi import APIRouter
from database import SessionLocal
from models import Student

router = APIRouter()

# add student
@router.post("/add-student")
def add_student(name:str, email:str, skill:str, experience:str, project:str):
    db = SessionLocal()

    student = Student(
        name=name,
        email=email,
        skill=skill,
        experience=experience,
        project=project
    )

    db.add(student)
    db.commit()

    return {"msg":"student added"}

# get all students
@router.get("/students")
def get_students():
    db = SessionLocal()
    data = db.query(Student).all()
    return data
