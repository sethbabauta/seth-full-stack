from app import app

@app.route("/get_query")
def get_query():
    return "Hello world"
