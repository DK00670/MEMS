from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import Base, engine
from Requests.routes import router as request_router
from Requests import models  # Ensures models are registered

# Initialize FastAPI app
app = FastAPI(title="Requests Service")

# Create DB tables
Base.metadata.create_all(bind=engine)

# ✅ Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Register the router
app.include_router(request_router, prefix="/api/requests")

