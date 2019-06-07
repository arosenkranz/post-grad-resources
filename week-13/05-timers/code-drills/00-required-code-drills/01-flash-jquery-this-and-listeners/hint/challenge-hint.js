// Event Listeners and `this`

// This function takes in a string and returns a jQuery element.
// The element should be a button that contains the argument string as both
// its text value and its data value. We will be using this button to
// display the string in the display-area when clicked later.
function createButton(str) {
  // ---------- Your Code Here ----------

  // create a new button div


  // add a class to the button so we can refer to it with our click listener

  
  // set the text and data of the button to be the argument given to this function

  
  // add the button div we've been working on to the button area

  

  // ---------- End of Code area ----------
}



// This function is executed when one of our generated buttons is clicked.
// We've been using anonymous functions up until now, but we can define this
// function before hand and pass in the pointer to this function in the
// click listener.
// This function should take the string stored in the data field of the button
// that was clicked on and append it to the display-area.
function displayContent(event) {
  // ---------- Your Code Here ----------

  // save the data from the button that was clicked. That button will be the
  // element that calls on this function

  
  // append the string that was saved in the button to the display area



  // ---------- End of Code area ----------
}



// document.ready shorthand
// Put your click listeners here.
$(function () {
  // ---------- Your Code Here ----------

  // create a click listener on the buttons that we generate
  // and have it call on the `displayContent` function

  
  // create a click listener for the "Clear" button. It should
  // empty the display area


  // create a click listener for the "Submit" button. It should
  // save the string the user input into the form and call on the
  // createButton function with that string

  

  // ---------- End of Code area ----------
})
