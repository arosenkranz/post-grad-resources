// Section 1 
// Set a variable of userTyped and set it to point at the element in the DOM with an id of "letterTyped"
var userTyped = document.getElementById("letterTyped");
// Set a variable of letterUsed and set it to point at the element in the DOM with an id of "lastLetter"
var letterUsed = document.getElementById("lastLetter");
// create a variable called LetterUsedArray and have it equal and empty array
var letterUsedArray = [];

// Section 2
// now use the onkey up jquery function and pass it the arguement of event
document.onkeyup = function (event) {
    // now set a variable of userInput equal to the event.key
    var userInput = event.key;
    // use the userTyped variable and the textContent property equal the userInput
    userTyped.textContent = userInput; 
    // push the userInput into the letterUsedArray
    letterUsedArray.push(userInput);
    // append the userInput followed by a comma to the end of the textContent within letterUsed
    letterUsed.textContent += userInput + ",";
}
