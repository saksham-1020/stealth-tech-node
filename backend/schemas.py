from pydantic import BaseModel, EmailStr
from typing import List, Optional
from datetime import datetime

# ==========================================
# 🔐 AUTH SCHEMAS
# ==========================================
class UserRegister(BaseModel):
    full_name: str
    email: EmailStr
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class TokenResponse(BaseModel):
    token: str
    role: str
    message: str

# ==========================================
# 🤖 AI COPILOT SCHEMAS
# ==========================================
class AIChatRequest(BaseModel):
    question: str

class AIChatResponse(BaseModel):
    answer: str

# ==========================================
# 🚀 PROJECT UPLINK SCHEMAS
# ==========================================
class ProjectCreate(BaseModel):
    repo_link: str
    live_link: Optional[str] = None
    technical_brief: str

class ProjectResponse(BaseModel):
    id: int
    repo_link: str
    live_link: Optional[str]
    status: str
    progress: int
    created_at: datetime

    class Config:
        from_attributes = True

# ==========================================
# 📡 SECURE UPLINK (CONTACT) SCHEMAS
# ==========================================
class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    message: str

class ContactResponse(BaseModel):
    message: str
    ticket_id: int

# ==========================================
# 🎓 PLACEMENT (TIER 3 CLEARANCE) SCHEMAS
# ==========================================
class PlacementApply(BaseModel):
    resume_link: str
    portfolio_link: Optional[str] = None

class PlacementStatusResponse(BaseModel):
    status: str
    clearance_level: str

class StatusUpdate(BaseModel):
    new_status: str

# ==========================================
# 📚 TRAINING & ENROLLMENT SCHEMAS
# ==========================================
class CourseEnrollRequest(BaseModel):
    course_name: str

class CourseEnrollmentResponse(BaseModel):
    course_name: str
    status: str
    message: str

# ==========================================
# 💼 CAREERS & HIRING SCHEMAS
# ==========================================
class CareerApplyRequest(BaseModel):
    applicant_name: str
    contact_email: EmailStr
    role_applied_for: str
    resume_link: str
    experience_years: int

class CareerApplyResponse(BaseModel):
    message: str
    tracking_id: int