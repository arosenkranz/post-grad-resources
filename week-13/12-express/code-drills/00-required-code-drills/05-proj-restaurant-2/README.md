# Express 

## The Route to success Pt.2

_Phew! Our team has worked a bit more on the webpage, but there's no functionality yet because they're waiting on you to set up the API routes in the back end._

### Instructions

* Within the data folder is a schema for you to fill out in order to set up the mySQL database.
    * You will need to keep track of the ID of the restaurant, the name of the restaurant, a link to the restaurant, a link to an image for the restaurant, and the rating for the restaurant.
    * The rating will be an integer from 1 to 5
    * The ID should be an integer that uniquely identifies the restaurant
    * All other fields will be a string

* You will have to create a connection to our mySQL database and then write three routes
    * One to get all the restaurants stored on the server and return that as a json object
    * One to post a new restaurant as defined by the body of the request to the database
    * One to put the new rating of a restaurant into the database as defined by the restaurant ID and the updated rating within the parameters of the route
        * This route will not be passed a body, all the relevant information should be in the route parameters

* You should only be working within the indicated sections inside the `schema.sql` file inside the data folder and the `server.js` file.

* Someone has gone back and refactored your code, so make sure you look over the changes and refamiliarize yourself with the new code base.
