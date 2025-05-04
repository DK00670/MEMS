from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import Base, engine
from Inventory.routes import router as inventory_router
from Authentication.routes import router as auth_router  # Assuming your auth router is here

# Init DB tables
Base.metadata.create_all(bind=engine)

# Create app instance
app = FastAPI(title="MEMS ERP")

# ✅ Add CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Register your routers
app.include_router(inventory_router, prefix="/api/inventory")
app.include_router(auth_router, prefix="/api/auth")
