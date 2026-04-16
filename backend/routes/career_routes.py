from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
import models, schemas

router = APIRouter(prefix="/api/v1/careers", tags=["Careers & Hiring"])

@router.post("/apply", response_model=schemas.CareerApplyResponse)
def apply_for_career(application: schemas.CareerApplyRequest, db: Session = Depends(get_db)):
    new_application = models.CareerApplication(
        applicant_name=application.applicant_name,
        contact_email=application.contact_email,
        role_applied_for=application.role_applied_for,
        resume_link=application.resume_link,
        experience_years=application.experience_years
    )
    db.add(new_application)
    db.commit()
    db.refresh(new_application)
    
    return {
        "message": "Application received. HQ will review your credentials.",
        "tracking_id": new_application.id
    }