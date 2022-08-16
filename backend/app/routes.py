from flask import url_for
from app import app
import json

@app.route("/api/homepage")
def index():
    with open("app/json/homepage_data.json") as f:
        data = json.load(f)
        return data
