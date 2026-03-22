from fastapi import APIRouter
from database import SessionLocal
from models import Certificate
import random

router = APIRouter()

# generate certificate
@router.post("/generate-certificate")
def generate_certificate(student_name:str, course:str):
    db = SessionLocal()

    cert_id = "STEALTH-" + str(random.randint(10000,99999))

    cert = Certificate(
        student_name=student_name,
        course=course,
        certificate_id=cert_id
    )

    db.add(cert)
    db.commit()

    return {
        "msg":"certificate generated",
        "certificate_id": cert_id
    }


# verify certificate
@router.get("/verify-certificate/{cert_id}")
def verify_certificate(cert_id:str):
    db = SessionLocal()

    cert = db.query(Certificate).filter(
        Certificate.certificate_id == cert_id
    ).first()

    if not cert:
        return {"status":"invalid"}

    return {
        "status":"valid",
        "student": cert.student_name,
        "course": cert.course
    }
