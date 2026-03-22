# from jose import jwt, JWTError
# from datetime import datetime, timedelta
# from fastapi import Depends, HTTPException
# from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
# from sqlalchemy.orm import Session
# from database import SessionLocal
# from models import User
# import hashlib

# SECRET = "STEALTH_AI_SECRET"
# ALGO = "HS256"

# ADMIN_EMAIL = "admin@gmail.com"
# ADMIN_PASS = "admin123"

# security = HTTPBearer()

# # ===============================
# # HASH PASSWORD
# # ===============================
# def hash_password(password: str):
#     return hashlib.sha256(password.encode()).hexdigest()

# # ===============================
# # CREATE TOKEN
# # ===============================
# def create_token(data: dict):
#     payload = data.copy()
#     payload["exp"] = datetime.utcnow() + timedelta(days=7)
#     return jwt.encode(payload, SECRET, algorithm=ALGO)

# # ===============================
# # VERIFY TOKEN
# # ===============================
# def verify_token(credentials: HTTPAuthorizationCredentials = Depends(security)):
#     token = credentials.credentials

#     try:
#         payload = jwt.decode(token, SECRET, algorithms=[ALGO])
#         return payload
#     except JWTError:
#         raise HTTPException(status_code=403, detail="Invalid or expired token")

# # ===============================
# # ADMIN GUARD
# # ===============================
# def admin_required(user=Depends(verify_token)):
#     if user["role"] != "admin":
#         raise HTTPException(status_code=403, detail="Admin access required")
#     return user


from jose import jwt, JWTError
from datetime import datetime, timedelta
from fastapi import Depends, HTTPException
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
import hashlib

SECRET = "STEALTH_AI_SECRET"
ALGO = "HS256"

security = HTTPBearer()

# ===============================
# HASH PASSWORD
# ===============================
def hash_password(password: str):
    return hashlib.sha256(password.encode()).hexdigest()

# ===============================
# CREATE TOKEN
# ===============================
def create_token(data: dict):
    payload = data.copy()
    payload["exp"] = datetime.utcnow() + timedelta(days=7)
    return jwt.encode(payload, SECRET, algorithm=ALGO)

# ===============================
# VERIFY TOKEN
# ===============================
def verify_token(credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials
    try:
        payload = jwt.decode(token, SECRET, algorithms=[ALGO])
        return payload
    except JWTError:
        raise HTTPException(status_code=403, detail="Invalid or expired token")

# ===============================
# ADMIN GUARD
# ===============================
def admin_required(user=Depends(verify_token)):
    if user["role"] != "admin":
        raise HTTPException(status_code=403, detail="Admin access required")
    return user
