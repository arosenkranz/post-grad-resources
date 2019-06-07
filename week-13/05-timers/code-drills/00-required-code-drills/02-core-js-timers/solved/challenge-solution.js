// Practice with timers

console.log("==================== Question 01 ====================");
// Create a timer that creates an alert that says "Question 1" after 5 seconds
function questionOne () {
  alert("Question 1");
}

setTimeout(questionOne, 1000 * 5);


console.log("==================== Question 02 ====================");
// Create a timer that creates an alert that says "Question 2" after 15 seconds
function questionTwo () {
  alert("Question 2");
}

var questionTwo = setTimeout(questionOne, 1000 * 15);


// Remove the timer you just made for Question 2
clearTimeout(questionTwo);


console.log("==================== Question 03 ====================");
// Create a timer that creates an alert that says "Question 3 part 1" after 15 seconds
var questionThreePtOne = setTimeout(function() {alert("Question 3 part 1")}, 1000 * 15);


// Create a timer that creates an alert that says "Question 3 part 2" after 16 seconds
var questionThreePtTwo = setTimeout(function() {alert("Question 3 part 2")}, 1000 * 16);


console.log("==================== Question 04 ====================");
// Remove the timer from Question 3 part 2
clearTimeout(questionThreePtTwo);


console.log("==================== Question 05 ====================");
// Create a timer that console logs "Question 5 Completed!" after 11 seconds
setTimeout(function() {console.log("Question 5 Completed!")}, 1000 * 11);

