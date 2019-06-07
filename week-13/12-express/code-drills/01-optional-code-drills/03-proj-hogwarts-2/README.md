# Express

## Hogwarts Express Pt.2

"You're a wizard (or witch)"

"I'm a what?"

<img src="demo.png">


### Overview

In this four part exercise, we'll be creating a Hogwarts app. You will be sending new students to Hogwarts and help them pass their O.W.L.s (Ordinary Wizarding Levels).

On one page, a user can add a new student and place them in a house.

On the main page, the user can click on one student at a time and then click on a class. Once the student has gotten all the classes, they have passed their owls, and will no longer appear on the page.

Here is a demo: https://hogwarts-415.herokuapp.com/ 

Each exercise in this set builds on the previous. In each exercise, you will be given the solution to the previous ones. If you were unable to fully complete a given exercise, feel free to use the given code in the next exercise. Otherwise, please copy/paste your own work over the code given to you.

### Instructions

Now that we've successfully rendered some HTML, it's time to set up some listenters on our server.

You will be setting up 5 different API routes: 
1. `GET` "/api/students/all". Returns all students.
2. `GET` "/api/students/:id". Returns JSON for a specific student. User will need to manually type the id into the url to see the JSON.
3. `POST` "/api/students/add". Adds a new student.
4. `PUT` "/api/students/:id/learn". Adds a new skill for the student.
5. `DELETE` "/api/students/:id". Removes a student.

The above routes will be used in conjunction with the given array `students`.

Once you have completed the logic for each of these routes, please proceed to 03, where we will begin our work on the front-end of this application.
