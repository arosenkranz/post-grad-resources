from flask import Flask, jsonify, render_template
app = Flask(__name__)

import requests
import json

# Import our pymongo library, which lets us connect our Flask app to our Mongo database.
import pymongo

# Create connection variable
conn = 'mongodb://localhost:27017'

# Pass connection to the pymongo instance.
client = pymongo.MongoClient(conn)

# Connect to a database. Will create one if not already available.
db = client.hogwarts_db

# Drops collection if available to remove duplicates
db.hogwarts.drop()

api_key = "$2a$10$sqsRreCtHJe1FbfLIlXv4ebVW3swtZjKjDfyzt8qsE9glfNGpJeGa"
base_url = "https://www.potterapi.com/v1/characters"

def populate_db():
    r = requests.get(f'{base_url}?key={api_key}')
    students = json.loads(r.text)

    # Creates a collection in the database and inserts the data from the request
    db.hogwarts.insert_many(students)

populate_db()

@app.route("/")
def index():
    # Find specific student, in this case Harry Potter
    test = db.hogwarts.find({"name":"Harry Potter"})
    print(test)
    harry_potter = list(db.hogwarts.find({"name":"Harry Potter"}))
    print(harry_potter)
    return render_template('index.html', harry_potter = harry_potter[0])

@app.route("/api/v1.0/hogwarts-students/")
def students():
    #pymongo syntax for finding documents
    # converts the queried result into a list of dictionarys (aka a JSON)
    students = list(db.hogwarts.find())
    return jsonify(students)

if __name__ == "__main__":
    app.run(debug=True)