# from fastapi import APIRouter, Depends
# from sqlalchemy.orm import Session
# from database import SessionLocal
# import models
# from auth import create_token

# router = APIRouter()

# # DB session
# def get_db():
#     db = SessionLocal()
#     try:
#         yield db
#     finally:
#         db.close()


# # REGISTER
# @router.post("/register")
# def register(name: str, email: str, password: str, db: Session = Depends(get_db)):
#     user = models.User(name=name, email=email, password=password, role="student")
#     db.add(user)
#     db.commit()
#     return {"msg": "User registered"}


# # LOGIN
# @router.post("/login")
# def login(email: str, password: str, db: Session = Depends(get_db)):
#     user = db.query(models.User).filter(models.User.email == email).first()

#     if not user or user.password != password:
#         return {"error": "Invalid credentials"}

#     token = create_token({"email": user.email, "role": user.role})
#     return {"token": token, "role": user.role}


# from fastapi import APIRouter, Depends
# from sqlalchemy.orm import Session
# from database import SessionLocal
# import models
# from auth_utils import create_token, hash_password

# router = APIRouter(tags=["Auth"])

# # ===============================
# # DB SESSION
# # ===============================
# def get_db():
#     db = SessionLocal()
#     try:
#         yield db
#     finally:
#         db.close()


# # ===============================
# # REGISTER
# # ===============================
# @router.post("/register")
# def register(name: str, email: str, password: str, db: Session = Depends(get_db)):

#     hashed_pass = hash_password(password)

#     user = models.User(
#         name=name,
#         email=email,
#         password=hashed_pass,
#         role="student"
#     )

#     db.add(user)
#     db.commit()

#     return {"msg": "User registered successfully"}


# # ===============================
# # LOGIN (ADMIN + STUDENT)
# # ===============================
# @router.post("/login")
# def login(email: str, password: str, db: Session = Depends(get_db)):

#     hashed_pass = hash_password(password)

#     user = db.query(models.User).filter(models.User.email == email).first()

#     # ===== AUTO CREATE ADMIN =====
#     if not user:
#         if email == "admin@gmail.com" and password == "admin123":
#             admin = models.User(
#                 name="Super Admin",
#                 email=email,
#                 password=hash_password(password),
#                 role="admin"
#             )
#             db.add(admin)
#             db.commit()
#             user = admin
#         else:
#             return {"error": "Invalid credentials"}

#     # ===== PASSWORD CHECK =====
#     if user.password != hashed_pass:
#         return {"error": "Invalid credentials"}

#     token = create_token({
#         "email": user.email,
#         "role": user.role
#     })

#     return {
#         "token": token,
#         "role": user.role,
#         "msg": "Login success 🚀"
#     }


from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
import models
from auth_utils import create_token, hash_password

router = APIRouter(tags=["Auth"])

# ===============================
# DB SESSION
# ===============================
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# ===============================
# REGISTER (STUDENT)
# ===============================
@router.post("/register")
def register(name: str, email: str, password: str, db: Session = Depends(get_db)):

    existing = db.query(models.User).filter(models.User.email == email).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")

    user = models.User(
        name=name,
        email=email,
        password=hash_password(password),
        role="student"
    )

    db.add(user)
    db.commit()

    return {"msg": "Student registered successfully 🚀"}


# ===============================
# LOGIN (ADMIN + STUDENT)
# ===============================
@router.post("/login")
def login(email: str, password: str, db: Session = Depends(get_db)):

    hashed_pass = hash_password(password)
    user = db.query(models.User).filter(models.User.email == email).first()

    # ===============================
    # AUTO CREATE SUPER ADMIN
    # ===============================
    if not user:
        if email == "admin@gmail.com" and password == "admin123":

            admin = models.User(
                name="STEALTH Super Admin",
                email=email,
                password=hash_password(password),
                role="admin"
            )

            db.add(admin)
            db.commit()
            user = admin
        else:
            raise HTTPException(status_code=401, detail="Invalid credentials")

    # ===============================
    # PASSWORD VERIFY
    # ===============================
    if user.password != hashed_pass:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    # ===============================
    # CREATE TOKEN
    # ===============================
    token = create_token({
        "email": user.email,
        "role": user.role
    })

    return {
        "token": token,
        "role": user.role,
        "msg": f"Welcome {user.role} 🚀"
    }
