from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
import models, schemas

router = APIRouter(prefix="/api/v1/contact", tags=["Secure Uplink"])

@router.post("/transmit", response_model=schemas.ContactResponse)
def transmit_payload(payload: schemas.ContactCreate, db: Session = Depends(get_db)):
    """
    Receives encrypted queries from the frontend and stores them in the HQ database.
    """
    try:
        new_message = models.ContactMessage(
            node_identifier=payload.name,
            return_address=payload.email,
            encrypted_payload=payload.message,
            status="Unread"
        )
        db.add(new_message)
        db.commit()
        db.refresh(new_message)
        
        return {
            "message": "Payload Transmitted Successfully. HQ will respond shortly.",
            "ticket_id": new_message.id
        }
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail="Transmission Failed. Connection to HQ lost.")