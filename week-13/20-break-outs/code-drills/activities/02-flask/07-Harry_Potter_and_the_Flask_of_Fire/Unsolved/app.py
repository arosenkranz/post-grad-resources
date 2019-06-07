from flask import Flask, jsonify, render_template, request, redirect
app = Flask(__name__)

# like node, python has a request library used for making AJAX calls
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
    return render_template('index.html')

@app.route("/api/v1.0/hogwarts-students/")
def students():
    #pymongo syntax for finding documents
    students = list(db.hogwarts.find())
    return jsonify(students)

# Handle API route with a variable path that will allow getting all students from a specific house
@app.route("/api/v1.0/hogwarts-students/house/<house>")
def hogwarts_houses(house):

    """Fetch all Hogwart students from the DB that match the house name.
       the path variable supplied by the user"""

       # YOUR CODE HERE
    


# Handle API route with a variable path that will allow getting info for a specific character based on their name
@app.route("/api/v1.0/hogwarts-students/student/<name>")
def hogwarts_students_names(name):
       
    """Fetch Hogwarts student that matches the name of
       the path variable supplied by the user"""

       # YOUR CODE HERE


@app.route("/students/<name>")
def student_profile(name):

    """Fetch Hogwarts student that matches the name of
       the path variable supplied by the link. Pass the data returned to your template"""

       # YOUR CODE HERE



if __name__ == "__main__":
    app.run(debug=True)