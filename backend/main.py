# app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import engine
import models

# ==========================================
# 🔌 ROUTE IMPORTS (ALL MODULES)
# ==========================================
from routes import (
    auth_routes, 
    project_routes, 
    ai_routes, 
    contact_routes, 
    placement_routes, 
    admin_routes,
    training_routes, 
    career_routes
)

# ==========================================
# 🗄️ DATABASE INITIALIZATION
# ==========================================
models.Base.metadata.create_all(bind=engine)

# ==========================================
# 🚀 SYSTEM CORE (APP INSTANCE)
# ==========================================
app = FastAPI(
    title="Stealth Labs Sovereign API", 
    description="The centralized backend engine handling authentication, deployments, AI telemetrics, and core business logic.",
    version="6.0.0 (Gold Master)"
)

# ==========================================
# 🛡️ SECURITY PROTOCOLS (CORS)
# ==========================================
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], # Restrict to frontend domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==========================================
# 🌐 API ROUTE REGISTRY (100% BRD COMPLIANT)
# ==========================================

# 1. Access & Admin Control
app.include_router(auth_routes.router)       # Authentication & Neural Access
app.include_router(admin_routes.router)      # Admin Command Center

# 2. Student & Project Operations
app.include_router(project_routes.router)    # Dashboard & Project Uplinks
app.include_router(training_routes.router)   # Training & Course Enrollments
app.include_router(placement_routes.router)  # Tier 3 Clearance / Placements

# 3. External Comms & AI
app.include_router(ai_routes.router)         # Neural Interface (Local AI)
app.include_router(contact_routes.router)    # Secure Uplink (Contact Form)
app.include_router(career_routes.router)     # External Hiring / Careers

# ==========================================
# 📡 ROOT TELEMETRY (HEALTH CHECK)
# ==========================================
@app.get("/", tags=["System"])
def system_check():
    return {
        "status": "Online", 
        "version": "6.0.0",
        "directive": "All BRD Modules Online and Secured. Waiting for frontend uplink."
    }