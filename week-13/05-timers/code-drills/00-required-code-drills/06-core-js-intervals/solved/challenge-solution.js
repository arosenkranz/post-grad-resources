// Set the interval


// ------------------------------------------------------------------
console.log("==================== Question 01 ====================");
// Create an interval that console logs "Question 01" every 5 seconds
var question01 = setInterval(function() {console.log("Question 01")}, 1000 * 5);


// ------------------------------------------------------------------
console.log("==================== Question 02 ====================");
// Create an interval that creates an alert that says "Question 02" every 10 seconds
var question02 = setInterval(function () {
  alert("Question 02")
}, 1000 * 10);


// clear the interval you made in this question
clearInterval(question02)


// ------------------------------------------------------------------
console.log("==================== Question 03 ====================");
// Create an interval that appends "3" to the div with an id of "question-03"
// every 2 seconds

var question03 = setInterval(function () {
    $("#question-03").append("3");
}, 1000 * 2)


// ------------------------------------------------------------------
console.log("==================== Question 04 ====================");
// Create an interval that empties the "#question-03" element every 6 seconds
var question04 = setInterval(function () {
  $("#question-03").empty();
}, 1000 * 6)


// ------------------------------------------------------------------
console.log("==================== Question 05 ====================");
// Create an interval that appends "5" to the div with an id of "question-05"
// every second and remove this interval after 5 seconds
var counter = 0;

var question05 = setInterval(function () {
  $("#question-05").append("5");
  counter += 1;
  if (counter >= 5) {
    clearInterval(question05);
  }
}, 1000 * 1);


// ------------------------------------------------------------------
console.log("==================== Question 06 ====================");
// Create an interval that appends "6" to the div with an id of "question-06"
// every second
var question06 = setInterval(function() {
  $("#question-06").append("6");
}, 1000 * 1);


// Create a timer to remove the interval after 6 seconds
setTimeout(function() {
  clearInterval(question06)
}, 1000 * 6);


// ------------------------------------------------------------------
console.log("==================== Question 07 ====================");
// create a timer to remove the interval from question 1 after 10 seconds
setTimeout(function() {
  clearInterval(question01)
}, 1000 * 10);


