from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from typing import Annotated
from datetime import timedelta

from ..dependencies import get_db
from ..models import Users
from ..schemas import Token
from ..utils import create_access_token, bcrypt_context

router = APIRouter()

@router.post("/login", response_model=Token)
async def login_for_access_token(form_data: Annotated[OAuth2PasswordRequestForm, Depends()],
                                Db: Session = Depends(get_db)):
    # Change to use email instead of username for login
    user = authenticate_user(form_data.username, form_data.password, Db)  # form_data.username will contain the email
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail='Invalid email or password',
            headers={"WWW-Authenticate": "Bearer"},
        )
    token = create_access_token(user.id, user.email, user.role, timedelta(minutes=20))
    return {'access_token': token, 'token_type': 'bearer'}

def authenticate_user(email: str, password: str, db: Session):
    # Modified to search by email instead of username
    user = db.query(Users).filter(Users.email == email).first()
    if not user:
        return False
    if not bcrypt_context.verify(password, user.hashed_password):
        return False
    return user