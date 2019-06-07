// `this` jQuery Business

// The README.md has instructions for this exercise


// This function should populate our page with the 4 buttons we need
// We will be defining this function right now and invoking it later
function populateButtons() {
  // Your code goes here


  // create the "Hello" button

  
  // assign "Hello" to its data attribute



  // create the "World" button

  
  // assign "World" to its data attribute

  

  // create the "Reset" button

  
  // assign "Reset" to its data attribute

  

  // create the "User" button

  
  // add an ide to the "User" button so we can refer to it later


  // instantiate the initial data attribute to be an empty string

  

  // add the "Hello", "World", and "Reset" buttons to the "buttons-area"


  // add the "User" button to the "user-button-area"


  
  // End of your code area
}


// This is jQuery shorthand to a document.ready
// This tells our javascript to wait until the page has finished 
// loading before running the code.
$(function () {

  // call on the populateButtons functions we define below.
  populateButtons();

  // This is the key press listener that saves the key the user pressed.
  // Refer to step 4 on the README
  document.onkeyup = function(event) {
    // Your code goes here



    // pull the previous key presses out of the "User" button


    // concatenate the key to the end of the previous key presses


    // store the new key press history back into the "User" button



    // End of your code area
  }

  // One click listener for all our buttons. You're going to have to figure out
  // which button was clicked and handle the logic for that button inside here
  // Refer to step 3 on the README
  $(document).on("click", "button", function (event) {
    // Your code goes here


    // if the data of the button is "Hello" or "World", we append the data
    // to the output area


    // if the data of the button is "Reset", we clear the output area


    // otherwise, it's the "User" button, so we set the output area's content
    // to be the data of the button and then clear the data stored within the
    // "User button"



    // End of your code area
  })
})
