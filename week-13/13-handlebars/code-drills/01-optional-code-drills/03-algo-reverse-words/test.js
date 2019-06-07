reverseWords = require("./challenge-prompt.js");


// ------------------------------------------------------------------
console.log("\n==================== Test 01 ====================");
var sentence = "Our lives are defined by opportunities, even the ones we miss.";
var answer = "ruO sevil era denifed yb ,seitinutroppo neve eht seno ew .ssim";
var userAns = reverseWords(sentence);
console.log("Testing with sentence: ");
console.log("\"" + sentence + "\"");
if (answer === userAns) console.log("Test passed.");
else {
  console.log("Test failed.");
  console.log("Expected: ");
  console.log(answer);
  console.log("Received: ");
  console.log(userAns);
  console.log("");
}

// ------------------------------------------------------------------
console.log("\n==================== Test 02 ====================");
var sentence = "Failure will never overtake me if my determination to succeed is strong enough.";
var answer = "eruliaF lliw reven ekatrevo em fi ym noitanimreted ot deeccus si gnorts .hguone";
var userAns = reverseWords(sentence);
console.log("Testing with sentence: ");
console.log("\"" + sentence + "\"");
if (answer === userAns) console.log("Test passed.");
else {
  console.log("Test failed.");
  console.log("Expected: ");
  console.log(answer);
  console.log("Received: ");
  console.log(userAns);
  console.log("");
}


// ------------------------------------------------------------------
console.log("\n==================== Test 03 ====================");
var sentence = "";
var answer = "";
var userAns = reverseWords(sentence);
console.log("Testing with sentence: ");
console.log("\"" + sentence + "\"");
if (answer === userAns) console.log("Test passed.");
else {
  console.log("Test failed.");
  console.log("Expected: ");
  console.log(answer);
  console.log("Received: ");
  console.log(userAns);
  console.log("");
}

// ------------------------------------------------------------------
console.log("\n==================== Test 04 ====================");
var sentence = "Hello.";
var answer = ".olleH";
var userAns = reverseWords(sentence);
console.log("Testing with sentence: ");
console.log("\"" + sentence + "\"");
if (answer === userAns) console.log("Test passed.");
else {
  console.log("Test failed.");
  console.log("Expected: ");
  console.log(answer);
  console.log("Received: ");
  console.log(userAns);
  console.log("");
}
