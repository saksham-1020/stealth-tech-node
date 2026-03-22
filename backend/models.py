from sqlalchemy import Column, Integer, String
from database import Base

# ================= USER =================
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    name = Column(String)
    email = Column(String, unique=True)
    password = Column(String)
    role = Column(String, default="student")


# ================= STUDENT PROFILE =================
class Student(Base):
    __tablename__ = "students"

    id = Column(Integer, primary_key=True,index=True)
    name = Column(String)
    email = Column(String)
    skill = Column(String)
    experience = Column(String)
    project = Column(String)
    placement_status = Column(String, default="Not Eligible")



# ================= CERTIFICATE =================
class Certificate(Base):
    __tablename__ = "certificates"

    id = Column(Integer, primary_key=True,index=True)
    student_name = Column(String)
    course = Column(String)
    certificate_id = Column(String,unique=True,index=True)

from sqlalchemy import Column, Integer, String, Text
from database import Base

class ConferencePaper(Base):
    __tablename__ = "conference_papers"

    id = Column(Integer, primary_key=True, index=True)
    title= Column(String)
    author_name = Column(String)
    author_email = Column(String)
    abstract =Column(String)
    paper_title = Column(String)
    pdf_file = Column(String)
    status = Column(String, default="submitted")