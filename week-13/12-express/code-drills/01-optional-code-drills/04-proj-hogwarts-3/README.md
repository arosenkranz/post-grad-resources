# Express

## Hogwarts Express Pt.3

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

By now, we should have a fully operational server. Now it's time to dress up its responses for the user. 

The HTML and CSS required for this app are already given to you. 

Proceed to app.js in the public folder. You will be asked to do the following:
1. Explain an already completed function called `renderStudents()`
2. Complete a `getStudents()` function, writing a GET route in addition to some other logic.
3. Complete a `passOWLS()` function, writing a DELETE route.
4. Complete a click listener function, writing a PUT route in addition to some other logic.
5. Complete a click listener function, writing a POST route in addition to some other logic.

All instructions are given in detaill within the app.js file. 

You will know you've finished when:
- You can fill out the form at /add and the new student is rendered at /. 
- You select a student, then a skill, and the skill is immediately rendered next to the student.
- When a student has learned all the possible skills, they dissapear from the page.

When you can say you've met all the above requirements, please proceed to 04, where we will deploy this app to Heroku. 