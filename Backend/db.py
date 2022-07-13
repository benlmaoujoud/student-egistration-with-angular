import collections
from http import client
from unittest import result

from models import Student
import motor.motor_asyncio

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017')
db = client.Student
collection = db.infoStuedent


async def create_student(std):
    document = std
    result = await collection.insert_one(document)
    return document