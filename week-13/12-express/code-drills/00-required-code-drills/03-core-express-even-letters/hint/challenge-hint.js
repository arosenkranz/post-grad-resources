// Require Express.js


// Create our app


// Define the port we're going to be listening on



// This helper function takes in a string and returns all the letters of the
// alphabet that appeared an even number of times within that string or didn't 
// appear within the string
function evenLetters(str) {
  // Define a string that contains all the letters of the alphabet
  // We will be using this later to determine the output

  
  // Initialize an empty string for the output

  
  // Initialize an empty object that keeps track of the characters we've seen so far.
  // Characters we don't want displayed will have a value of true within this object

  
  // Iterate through the argument string
  for (var i = 0; i < str.length; i++) {
    // For each character of the string, check the object we'd previously defined.
    // We will use true to indicate a character we don't want displayed and false 
    // to indicate a character we do want to be be displayed. This way, characters 
    // not in the argument string will show up as a falsey value and characters we
    // want to be displayed will have a value of false within the object.
    //
    // We toggle whether we show the letter each time we encounter it, taking it
    // from false or falsey to indicate we should show the letter to true to indicate
    // we shouldn't show the letter and vice versa

    
  }

  // Iterate through the alphabet string that we defined at the beginning of the
  // function and add all the letters with a false or falsey value to the output

  

  // Return the output

  
}

// Create a GET route that takes in a parameter from the route and calls on the
// `evenLetters` helper function with the parameter as an argument



// Set up a listener for our app on the port we'd defined


