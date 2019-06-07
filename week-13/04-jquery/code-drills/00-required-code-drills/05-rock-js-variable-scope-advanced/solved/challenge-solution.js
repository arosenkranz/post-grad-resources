// Scope Review

// We're going to be asking you what the value of `tracked` will be
// at different points in this code. We want to know what the value
// of `tracked` is if we were to put a console log at that point in
// the code

// This solution file contains explanations for why some of the more
// interesting behaviors are occurring.



var tracked = "We're";

console.log("==================== Question 01 ====================");
// What is the value of `tracked` here?
// `tracked` = "We're"
console.log(tracked);



loseTracked1();

function loseTracked1() {
  var tracked = "no";
}

console.log("==================== Question 02 ====================");
// What is the value of `tracked` here?
// `tracked` = "We're"
console.log(tracked);
// `tracked` was declared again inside the function, so it was found in 
// the local scope and it didn't have to look outside to the global scope



loseTracked2(tracked);

function loseTracked2(arg) {
  arg = "strangers";
}

console.log("==================== Question 03 ====================");
// What is the value of `tracked` here?
// `tracked` = "We're"
console.log(tracked);
// `arg` is the argument to the function and it is a pointer to the value of `tracked`
// when we reassign `arg`, it doesn't change the value of `tracked`



loseTracked3();

function loseTracked3(tracked) {
  console.log("==================== Question 04 ====================");
  // What is the value of `tracked` here?
  // `tracked` = undefined
  console.log(tracked);
  // while `tracked` is defined outside the function, `tracked` inside the function
  // points to the argument which we didn't define when we called `loseTracked3`
}



loseTracked4();

function loseTracked4() {
  tracked = "to";
}

console.log("==================== Question 05 ====================");
// What is the value of `tracked` here?
// `tracked` = "to"
console.log(tracked);
// because we didn't `tracked` isn't defined within the function, it will look
// outside the function to find `tracked` in the global scope and assign the new
// value to the global `tracked`



loseTracked5("love");

function loseTracked5(arg) {
  tracked = arg;
}

console.log("==================== Question 06 ====================");
// What is the value of `tracked` here?
// `tracked` = "love"
console.log(tracked);
// `tracked` is one again not defined locally, so the global `tracked` is assigned
// the value of the `arg` argument which is "love"



loseTracked6("You");

function loseTracked6(arg) {
  arg = "know";

  console.log("==================== Question 07 ====================");
  // What is the value of `tracked` here?
  // `tracked` = "love"
  console.log(tracked);
  // `tracked` is not changed at all within this function
}



console.log("==================== Question 08 ====================");
// What is the value of `tracked` here?
// `tracked` = "love"
console.log(tracked);



tracked = "the";

loseTracked7(tracked);

function loseTracked7(tracked) {
  tracked = "rules";

  console.log("==================== Question 09 ====================");
  // What is the value of `tracked` here?
  // `tracked` = "rules"
  console.log(tracked);

}



console.log("==================== Question 10 ====================");
// What is the value of `tracked` here?
// `tracked` = "the"
console.log(tracked);
// the `tracked` that was changed in `loseTracked7` is the local copy of `tracked`
// since the argument was also named `tracked`. Therefore, it didn't have to
// look globally for the variable `tracked`



loseTracked8("and");

function loseTracked8(arg) {
  var tracked = arg;

  console.log("==================== Question 11 ====================");
  // What is the value of `tracked` here?
  // `tracked` = "and"
  console.log(tracked);

}



console.log("==================== Question 12 ====================");
// What is the value of `tracked` here?
// `tracked` = "the"
console.log(tracked);
// `tracked` was declared locally and us assigning the value of the argument 
// to `tracked` doesn't change the fact that it didn't have to look outside
// to the global scope


var newTracked = "so";

function loseTracked9() {
  tracked = newTracked;  
}

console.log("==================== Question 13 ====================");
// What is the value of `tracked` here?
// `tracked` = "the"
console.log(tracked);
// `loseTracked9` is never invoked, so the code inside is never run, thus
// the value of `tracked` isn't changed by it


loseTracked10("do");

function loseTracked10(newTracked) {
  newTracked = "I";
}

tracked = newTracked;

console.log("==================== Question 14 ====================");
// What is the value of `tracked` here?
// `tracked` = "so"
console.log(tracked);
// `newTracked` was defined locally in `loseTracked10`, so the global `newTracked`
// wasn't reassigned. Thus, when we assigned the value of `newTracked` to `tracked`,
// it used the first value of `newTracked`



tracked = 12;

loseTracked11(tracked);

function loseTracked11(arg) {
  arg = 14;
}

console.log("==================== Question 15 ====================");
// What is the value of `tracked` here?
// `tracked` = 12
console.log(tracked);



tracked = false;

loseTracked12(tracked);

function loseTracked12(arg) {
  arg = true;
}

console.log("==================== Question 16 ====================");
// What is the value of `tracked` here?
// `tracked` = false
console.log(tracked);



tracked = {a: "hello", b: "world"};

loseTracked13(tracked);

function loseTracked13(arg) {
  arg = "goodbye";
}

console.log("==================== Question 17 ====================");
// What is the value of `tracked` here?
// `tracked` = {a: "hello", b: "world"}
console.log(tracked);



tracked = ["variable", "scoping", "is"]

loseTracked14(tracked);

function loseTracked14(arg) {
  arg = "fun";
}

console.log("==================== Question 18 ====================");
// What is the value of `tracked` here?
// `tracked` = ["variable", "scoping", "is"]
console.log(tracked);



tracked = ["Testing", "Arrays"];

loseTracked15(tracked);

function loseTracked15(arg) {
  arg[0] = "WHAT!?";
  arg.pop();
  arg.push("Arrays!")

  console.log("==================== Question 19 ====================");
  // What is the value of `tracked` here?
  // `tracked` = ["WHAT!?", "Arrays!"]
  console.log(tracked);

}



console.log("==================== Question 20 ====================");
// What is the value of `tracked` here?
// `tracked` = ["WHAT!?", "Arrays!"]
console.log(tracked);
// `arg` is a pointer to the argument which is the array that `tracked` points to.
// When we reassign values within `arg`, since `arg` points to the same array 
// as `tracked`, changing the contents of the array itself will change it for both
// variables



tracked = {how: "about", objects: "?"}

loseTracked16(tracked);

function loseTracked16(arg) {
  var key = "how";
  arg.key = "Dot Notation!";
  arg[key] = "Bracket Notation!";

  console.log("==================== Question 21 ====================");
  // What is the value of `tracked` here?
  // `tracked` = { how: 'Bracket Notation!', objects: '?', key: 'Dot Notation!' }
  console.log(tracked);
  // When we use the dot notation, javascript automatically converts whatever key
  // you designate afterwards to be a string. If you want to use the value of a
  // variable as a key, you must use the bracket notation

}




console.log("==================== Question 22 ====================");
// What is the value of `tracked` here?
// `tracked` = { how: 'Bracket Notation!', objects: '?', key: 'Dot Notation!' }
console.log(tracked);
// Much like arrays, variables point to objects themselves, so any mutator methods
// we execute on a variable pointing to the object will change the object for all
// variables pointing to that object



tracked = "Never Gonna Give You Up";

loseTracked17(tracked);

function loseTracked17(arg) {
  arg[0] = "R";
  arg[1] = "ick";

  console.log("==================== Question 23 ====================");
  // What is the value of `tracked` here?
  // `tracked` = "Never Gonna Give You Up"
  console.log(tracked);
  // Unlike with objects and arrays, a string cannot have two pointers pointing to it.
  // So, when we pass a variable that points to a string into `loseTracked17`, the
  // function tries to assign the pointer `arg` to the string. Since it can't, a new
  // string with the same value is created and `arg` now points to that new string.
}



console.log("==================== Question 24 ====================");
// What is the value of `tracked` here?
// `tracked` = "Never Gonna Give You Up"
console.log(tracked);
// The unique-ness of pointers to a string is also true for booleans, integers, and floats
