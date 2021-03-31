from flask import Flask
import pymongo
from pymongo import MongoClient

cluster = MongoClient("mongodb+srv://kamille:Ellimak32@wellness-notes.jy5wo.mongodb.net/cs125?retryWrites=true&w=majority")

db = cluster["cs125"]
collection = db["names"]
