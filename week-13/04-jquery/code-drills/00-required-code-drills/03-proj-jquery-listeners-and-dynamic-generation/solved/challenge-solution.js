
$(document).ready(function () {
  // Section 1 creating the array and variables

  // 1.1 create a variable called letters with an array of every letter in alphabet (A-Z) as a string
  var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  // 1.2 create a variable called body and have it equals the jquery selector of body
  var body = $("body")

  // 1.3 create a variable called btns and assign the result of calling the "find" method on the body variable to find the element with an id of "buttons"
  var btns = body.find("#buttons");

  // Section 2 : DYNAMICALLY the text on the button
  // =================================================================================

  // 2.1 Create a for-loop that iterate through the variable letters.
  for (var i = 0; i < letters.length; i++) {

    // 2.2 Create a variable named "textButton" equal to a new `<button>` element using jQuery
    var textButton = $("<button>");

    // 2.3. use the variable textButton add following class as a string letter-button 
    textButton.addClass("letter-button");

    // 2.4. Then give the variable text button a data-attribute of "data-letter" that equals the value at the current index of letters
    textButton.attr("data-letter", letters[i]);

    // 2.5. now give "textButton" a text of the value at the current index of letters
    textButton.text(letters[i]);

    // 2.6. Final step is to append "textButton" to the variable btns.
    btns.append(textButton);

  }

  // Section 3 : attaching the button text to a div
  // =================================================================================

  // 3.1 Create an "on-click" event attached to the ".letter-button" class.
  btns.on("click", ".letter-button", function () {

    // 3.2 Create a variable called textDiv and set it equal to a new `<div>` element using jQuery
    var textDiv = $("<div>");

    // 3.3 use the variable textDiv and add a class of a string letter.
    textDiv.addClass("letter");

    // 3.4 use the var textDiv and add text that is equal to the this or button that creates the letter and add a attribute of a string data-letter 
    textDiv.text($(this).attr("data-letter"));

    // 3.5 select the body of the page and find the id of display and append textDiv to it

    body.find("#display").append(textDiv);
  });
});
