// `this` jQuery Business

// The README.md has instructions for this exercise

// This function should populate our page with the 4 buttons we need
// We will be defining this function right now and invoking it later
function populateButtons() {
  // Your code goes here

  
  var buttonHello = $("<button>");
  buttonHello.text("Hello");
  buttonHello.attr("data", "Hello");

  var buttonWorld = $("<button>");
  buttonWorld.text("World");
  buttonWorld.attr("data", "World");

  var buttonReset = $("<button>");
  buttonReset.text("Reset");
  buttonReset.attr("data", "Reset");

  var buttonUser = $("<button>");
  buttonUser.text("User")
  buttonUser.attr("id", "user-button")
  buttonUser.attr("data", "");

  $("#buttons-area").append(buttonHello, buttonWorld, buttonReset);
  $("#user-button-area").append(buttonUser);


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


    var previousKeys = $("#user-button").attr("data");
    previousKeys += event.key;
    $("#user-button").attr("data", previousKeys);


    // End of your code area
  }

  // One click listener for all our buttons. You're going to have to figure out
  // which button was clicked and handle the logic for that button inside here
  // Refer to step 3 on the README
  $(document).on("click", "button", function (event) {
    // Your code goes here


    switch ($(this).attr("data")) {
      case "Hello":
      case "World":
        $("#output").append($(this).attr("data"));
        break;
      case "Reset":
        $("#output").empty()
        break;
      default:
        $("#output").text($(this).attr("data"));
        $(this).attr("data", "")
    }


    // End of your code area
  })
})

