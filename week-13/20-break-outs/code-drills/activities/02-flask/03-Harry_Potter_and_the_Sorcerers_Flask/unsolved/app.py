from flask import Flask, jsonify

## Create a dictionary that holds a list of students at Hogwarts and what house they belong to

hogwarts_students = [
    {"student": "Harry Potter", "house": "Gryffindor"},
    {"student": "Ron Weasley", "house": "Gryffindor"},
    {"student": "Hermione Granger", "house": "Gryffindor"},
    {"student": "Draco Malfoy", "house": "Slytherin"},
    {"student": "Luna Lovegood", "house": "Ravenclaw"},
    {"student": "Neville Longbottom", "house": "Gryffndor"},
    {"student": "Cho Chang", "house": "Ravenclaw"}
]

#################################################
# Flask Setup
#################################################
# @TODO: Initialize your Flask app here

#################################################
# Flask Routes
#################################################
# @TODO: Complete the routes for your app here

# Create a root route that welcomes the user with all available routes. Create an API route for each house.

# Create an API route that displays all students in the dictionary

# Handle API route with a variable path that will allow getting all students from a specific house

# Handle API route with a variable path that will allow getting info for a specific character based on their name

if __name__ == "__main__":
    app.run(debug=True)
