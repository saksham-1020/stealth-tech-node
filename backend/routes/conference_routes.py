from fastapi import APIRouter, UploadFile, File, Form, Depends
from sqlalchemy.orm import Session
from database import SessionLocal
import shutil
import models

router = APIRouter(prefix="/conference", tags=["Conference"])


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/submit-paper")
async def submit_paper(
    author_name: str = Form(...),
    author_email: str = Form(...),
    paper_title: str = Form(...),
    abstract: str = Form(...),
    pdf: UploadFile = File(...),
    db: Session = Depends(get_db),
):

    file_path = f"uploads/{pdf.filename}"

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(pdf.file, buffer)

    paper = models.ConferencePaper(
        author_name=author_name,
        author_email=author_email,
        paper_title=paper_title,
        abstract=abstract,
        pdf_file=file_path,
    )

    db.add(paper)
    db.commit()

    return {"msg": "Paper submitted successfully"}