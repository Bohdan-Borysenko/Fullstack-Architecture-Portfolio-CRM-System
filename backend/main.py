from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from sqlalchemy import create_engine, Column, Integer, String, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session

# SQLite
DATABASE_URL = "sqlite:///./contacts.db"

engine = create_engine(
    DATABASE_URL, connect_args={"check_same_thread": False}
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# BD
class ContactEntry(Base):
    __tablename__ = "contacts"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=True)
    phone = Column(String)
    email = Column(String)
    interest = Column(String, nullable=True)
    message = Column(Text)


Base.metadata.create_all(bind=engine)

app = FastAPI()

# 3. CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 4. (Pydantic)
class ContactRequest(BaseModel):
    name: str | None = None
    phone: str
    email: EmailStr
    interest: str | None = None
    message: str

# BD
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/api/contact")
async def handle_contact(data: ContactRequest, db: Session = Depends(get_db)):
    try:
        new_entry = ContactEntry(
            name=data.name,
            phone=data.phone,
            email=data.email,
            interest=data.interest,
            message=data.message
        )
        db.add(new_entry)
        db.commit()
        db.refresh(new_entry)

        print(f"--- NOTICE ---")
        print(f"To whom: {data.email}")
        print(f"Message: Dear {data.name or 'customer'}, Your message is being processed.")
        print(f"-------------------")

        return {
            "status": "success", 
            "message": f"Thank you, {data.name or 'Your request has been received'}! Your message is currently being processed."
        }
    
    except Exception as e:
        db.rollback()
        print(f"Ошибка: {e}")
        raise HTTPException(status_code=500, detail="Error saving to the database")

@app.get("/api/contacts")
async def get_all_contacts(db: Session = Depends(get_db)):
    return db.query(ContactEntry).all()