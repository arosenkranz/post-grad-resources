# Express

## A Five-Star App Pt.3

### Instructions

_With the back end completed, we can now hook up the front end to the API on the server._

* We have provided a helper function that will render a restaurant card onto the page when called. You will have to study how this helper function works in order to be able to update the rating of a restaurant.

* Write an API call to our server when index.html is loaded that gets the restaurants stored in the database and displays them using the helper function.

* Write a click listener on the stars within the generated restaurants cards and update the database with the updated rating from the click
    * The star value is stored within the div containing the star
    * You might have to look up to the div wrapping the star in order to find the ID of the restaurant to update

* You should only have to code in the indicated section within the `app.js` file inside the `public/js` folder

* Someone has gone back and refactored your code, so make sure you look over the changes and refamiliarize yourself with the new code base.

![Rate-a-Restaurant](public/images/Rate-a-Restaurant.gif)
