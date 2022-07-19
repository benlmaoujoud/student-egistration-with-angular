
from pydantic import BaseModel

class Student(BaseModel):
    firstName:str
    lastName:str
    motherName:str
    fatherName:str
    phone:str
    email:str