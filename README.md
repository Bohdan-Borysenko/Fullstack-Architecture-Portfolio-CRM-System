# Fullstack Architecture Portfolio & CRM System

This project is a high-performance Fullstack application designed for an architectural bureau. It features a modern, responsive frontend and a robust backend with data persistence. This was built to demonstrate proficiency in Python/FastAPI and React integration for professional use in the EU market.

## Project Demonstration
![Application Demo](./React.gif)

---

## Tech Stack

### Backend
- **Framework**: FastAPI (Python 3.12+)
- **Database**: SQLite with SQLAlchemy ORM (for inquiry persistence)
- **Validation**: Pydantic v2 (Strict data typing and email validation)
- **Server**: Uvicorn with CORS Middleware

### Frontend
- **Library**: React.js (Vite)
- **Styling**: Tailwind CSS
- **State Management**: React Hooks (useState, useEffect)
- **HTTP Client**: Axios

---

## Installation & Local Setup

### 1. Backend Setup
Navigate to the backend directory and set up the virtual environment:
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
