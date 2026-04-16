from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Text
from sqlalchemy.orm import relationship
import datetime
from database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    role = Column(String, default="student")
    
    projects = relationship("ProjectNode", back_populates="owner")
    placements = relationship("PlacementApplication", back_populates="applicant")

class ProjectNode(Base):
    __tablename__ = "project_nodes"

    id = Column(Integer, primary_key=True, index=True)
    repo_link = Column(String, nullable=False)
    live_link = Column(String, nullable=True)
    technical_brief = Column(String, nullable=True)
    status = Column(String, default="Review")
    progress = Column(Integer, default=50)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    
    owner_id = Column(Integer, ForeignKey("users.id"))
    owner = relationship("User", back_populates="projects")

class ContactMessage(Base):
    __tablename__ = "contact_messages"

    id = Column(Integer, primary_key=True, index=True)
    node_identifier = Column(String, nullable=False) 
    return_address = Column(String, nullable=False)  
    encrypted_payload = Column(Text, nullable=False) 
    status = Column(String, default="Unread")
    received_at = Column(DateTime, default=datetime.datetime.utcnow)

class PlacementApplication(Base):
    __tablename__ = "placement_applications"

    id = Column(Integer, primary_key=True, index=True)
    applicant_id = Column(Integer, ForeignKey("users.id"))
    resume_link = Column(String, nullable=False)
    portfolio_link = Column(String, nullable=True)
    clearance_level = Column(String, default="Tier 3")
    status = Column(String, default="Under Review")
    applied_at = Column(DateTime, default=datetime.datetime.utcnow)

    applicant = relationship("User", back_populates="placements")

# ... (Aapke existing models jaise User, ProjectNode, etc. yahan rahenge)

class CourseEnrollment(Base):
    __tablename__ = "course_enrollments"

    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, ForeignKey("users.id"))
    course_name = Column(String, nullable=False) # e.g., "Full Stack Web Development"
    status = Column(String, default="Active")    # Active, Completed, Dropped
    enrolled_at = Column(DateTime, default=datetime.datetime.utcnow)

    student = relationship("User")

class CareerApplication(Base):
    __tablename__ = "career_applications"

    id = Column(Integer, primary_key=True, index=True)
    applicant_name = Column(String, nullable=False)
    contact_email = Column(String, nullable=False)
    role_applied_for = Column(String, nullable=False) # e.g., "Senior Data Scientist", "Trainer"
    resume_link = Column(String, nullable=False)
    experience_years = Column(Integer, nullable=False)
    status = Column(String, default="Under Review")
    applied_at = Column(DateTime, default=datetime.datetime.utcnow)