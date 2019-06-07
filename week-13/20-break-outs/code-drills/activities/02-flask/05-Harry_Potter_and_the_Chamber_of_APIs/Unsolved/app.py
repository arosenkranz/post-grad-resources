from flask import Flask, jsonify, render_template
app = Flask(__name__)

# like node, python has a request library used for making AJAX calls
import requests
import json

api_key = "$2a$10$sqsRreCtHJe1FbfLIlXv4ebVW3swtZjKjDfyzt8qsE9glfNGpJeGa"
base_url = "https://www.potterapi.com/v1/characters"

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/api/v1.0/hogwarts-students")
def students():
    r = requests.get(f'{base_url}?key={api_key}')
    # the request is returned as a string
    print(type(r.text))
    # we must use json to convert it to a json list
    students = json.loads(r.text)
    # then return the list with jsonify
    return jsonify(students)

# Handle API route with a variable path that will allow getting all students from a specific house
@app.route("/api/v1.0/hogwarts-students/house/<house>")
def hogwarts_houses(house):

    """Using request and the Harry Potter API, fetch all Hogwart students from the API that match the house name
       which is the path variable supplied by the user"""

    # YOUR CODE HERE

# Handle API route with a variable path that will allow getting info for a specific character based on their name
@app.route("/api/v1.0/hogwarts-students/student/<name>")
def hogwarts_students_names(name):
    
    """Using request and the Harry Potter API, fetch the Hogwart student from the API that match the name
       which is the path variable supplied by the user"""

    # YOUR CODE HERE


if __name__ == "__main__":
    app.run(debug=True)