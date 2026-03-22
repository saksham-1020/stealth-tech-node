from fastapi import FastAPI
from database import Base, engine
import models

# ===== CREATE TABLES =====
Base.metadata.create_all(bind=engine)

app = FastAPI(title="🚀 STEALTH AI BACKEND")

# ===== IMPORT ROUTES =====
from routes import auth_routes
from routes import student_routes
from routes import certificate_routes
from routes import ai_routes
from routes import admin_routes
from routes import student_panel_routes
from routes import project_routes
from routes import conference_routes

# ===== INCLUDE ROUTES =====
app.include_router(auth_routes.router)
app.include_router(student_routes.router)
app.include_router(certificate_routes.router)
app.include_router(ai_routes.router)
app.include_router(admin_routes.router)
app.include_router(student_panel_routes.router)
app.include_router(project_routes.router)
app.include_router(conference_routes.router)

# ===== HOME =====
@app.get("/")
def home():
    return {
        "msg": "STEALTH AI backend running",
        "status": "unicorn ready",
        "version": "1.0"
    }

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
