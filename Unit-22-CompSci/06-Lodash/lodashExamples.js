var _ = require("lodash");

// _.times
// Works like a loop. Takes in the number of iterations, and a callback function to execute each time
// with the current iteratee optionally passed in as an argument
console.log("--------------------------");
console.log("_.times");
_.times(10, function(iteratee) {
  console.log("Iteration number:", iteratee + 1);
});
console.log("--------------------------");

// _.random
// Works like Math.random, but gives us a number from 0 to whatever value we pass in
console.log("_.random");
console.log("Between 0 and 10:", _.random(10));
// If we pass in 2 values, then it will give us a number from the first number and the second number inclusive
console.log("Between 1 and 20:", _.random(1, 20));
console.log("--------------------------");

// _.each
// Works just like each in jQuery
console.log("_.each");
var arr = [1, 2, 3, 4, 5];
_.each(arr, function(item, index) {
  console.log("Index", index, "multiplied by 2 is", item * 2);
});
console.log("--------------------------");

// _.uniq
// Returns a duplicate free version of a given array
console.log("_.uniq");
var dupeArray = [1, 2, 2, 1, 4, 6, 2, 9, 10, 10, 1, 6];
console.log("Original array:", dupeArray);
var uniqueArray = _.uniq(dupeArray);
console.log("Original array:", uniqueArray);
console.log("--------------------------");

// _.shuffle
// Returns a shuffled array
console.log("_.shuffle");
console.log("Original array:", uniqueArray);
var shuffledArray = _.shuffle(uniqueArray);
console.log("Shuffled Array:", shuffledArray);
console.log("--------------------------");


// _.sum, _.multiply, _.mean
// Useful math functions for getting the sum, max, and mean of elements in an array
console.log("Array to use:", dupeArray);
console.log("Array sum:", _.sum(dupeArray));
console.log("Array max:", _.max(dupeArray));
console.log("Array mean:", _.mean(dupeArray));
console.log("--------------------------");

// _.clone
// Often times we want to copy an objects values onto another object to manipulate but don't want to alter
// the original. Since JavaScript objects are pass-by-reference, simply setting an object equal to another doesn't copy it
// as you would expect. Instead it just creates another variable thats pointing to the same object in memory.
// Any changes made to one object affects another

// _.clone attempts to solve this
// Before clone
console.log("Without using _.clone:");
var originalPerson = { name: "Sarah", age: 22 };
var samePerson = originalPerson;
samePerson.age = 25;
console.log("Original Person:", originalPerson);
console.log("Modified copy of original person:", samePerson);
console.log("Using _.clone:");
var clonedPerson = _.clone(originalPerson);
clonedPerson.name = "Mike";
console.log("Original Person:", originalPerson);
console.log("Modified cloned Person:", clonedPerson);
