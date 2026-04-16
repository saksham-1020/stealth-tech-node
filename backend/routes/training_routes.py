from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
import models, schemas

router = APIRouter(prefix="/api/v1/training", tags=["Training & Education"])

@router.post("/enroll", response_model=schemas.CourseEnrollmentResponse)
def enroll_in_course(request: schemas.CourseEnrollRequest, user_id: int, db: Session = Depends(get_db)):
    # Check if already enrolled in this specific course
    existing = db.query(models.CourseEnrollment).filter(
        models.CourseEnrollment.student_id == user_id,
        models.CourseEnrollment.course_name == request.course_name
    ).first()
    
    if existing:
        raise HTTPException(status_code=400, detail="Node already enrolled in this protocol.")

    new_enrollment = models.CourseEnrollment(
        student_id=user_id,
        course_name=request.course_name
    )
    db.add(new_enrollment)
    db.commit()
    
    return {
        "course_name": request.course_name,
        "status": "Active",
        "message": f"Successfully enrolled in {request.course_name}."
    }