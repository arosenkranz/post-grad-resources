// Day 01
// Activity 01


// wait for the DOM to finish loading (document.ready)
$(function () {

  // Create a click listener for the submit button
  $(document).on("click", "button", function (event) {
    // stop the default behavior of the submit button
    event.preventDefault();

    // pull the values off the user input form and store them in seperate variables
    var firstName = $("#first-name").val();
    var lastName = $("#last-name").val();
    var occupation = $("#occupation").val();
    var city = $("#city").val();
    var state = $("#state").val();

    // clear the form after we're done storing the values
    $("#first-name").val("");
    $("#last-name").val("");
    $("#occupation").val("");
    $("#city").val("");
    $("#state").val("");


    // generate the divs needed to display the user data and put the values 
    // we stored from the form inside the divs
    var nameDiv = $("<h3>").text(firstName + " " + lastName);
    var occupationDiv = $("<h4>").text(occupation);
    var locationDiv = $("<h4>").text(city + ", " + state);

    // empty the display area and display the divs we just created in the display area
    $("#display-area").empty();
    $("#display-area").append(nameDiv, occupationDiv, locationDiv);
  })
})