
#from urllib import response
from http.client import HTTPException
from urllib import response
from fastapi import FastAPI 

from fastapi.middleware.cors import CORSMiddleware
from models import Student
from db import create_student

app = FastAPI()

origins = ['http://localhost:4200']

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"],
) 
@app.get("/")
def read_root():
       return {"Bonjour ":"mohamed "}

        
@app.post("/api/student",response_model=Student)
async def postData(std:Student):
    response = await create_student(std.dict())

    if response:
        return response
    
    raise HTTPException(404,"Somthing wrong ! ")
    

        
