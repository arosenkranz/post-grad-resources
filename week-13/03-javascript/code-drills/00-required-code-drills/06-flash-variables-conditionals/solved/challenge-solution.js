// declare a variable named farm

var farm;

// set that farm variable to be an array with the elements
// Pig, Cow, Chicken, Dog, Horse, Sheep

farm = ["Pig", "Cow", "Chicken", "Dog", "Horse", "Sheep"];

// write an if statement that creates an alert that says "RWAR!" if the first element of farm IS NOT "Godzilla"

if (farm[0] !== "Godzilla") {
  alert("RWAR!");
}

// write another if statement that creates an alert "SCREECH!" if the last element of farm IS "Mothra"

if (farm[farm.length - 1] === "Mothra") {
  alert("SCREECH!");
}

// declare a variable named dog with a value of "Spot"
var dog = "Spot";

// declare 3 variables cat, car, city without assigning them values
var cat, car, city;

// assign the string "Farley" to cat
cat = "Farley";

// assign the string "San Francisco" to city
city = "San Francisco";

// assign the string "Prius" to car
car = "Prius";

// using string concatenation, console log out the sentence 
// "See Spot run!" without explicitly using "Spot" inside the string.
console.log("See " + dog + " run!");

// using string concatenation, console log out the sentence 
//"I drive Farley around San Francisco in my Prius" without explicityly 
//using "Farley", "San Francisco", and "Prius"
// Remember to use the variables we just declared!
console.log("I drive " + cat + " around " + city + " in my " + car);

// declare a variable budget and assign it a value of 5000
var budget = 5000;

// declare a variable rentCost and assign it a value of 1500
var rentCost = 1500;

// declare a variable utilitiesCost and assign it a value of 150
var utilitiesCost = 150;

// declare a variable foodCost and assign it a value of 250
var foodCost = 250;

// declare a variable transportationCost and assign it a value of 350
var transportationCost = 350;

// declare a variable computerCost and assign it a value of 2000
var computerCost = 2000;

// write an if statement that checks whether the sum of all our costs is within the budget.
// if it is within budget, console log "Budget is okay!", otherwise,
// create an alert telling us the sum of all the costs.

if ((rentCost + utilitiesCost + foodCost + transportationCost) <= budget) {
  console.log("Budget is okay!");
} else {
  alert(rentCost + utilitiesCost + foodCost + transportationCost);
}

// write an if statement that checks whether both the rentCost is greater than 
// the sum of the utilitiesCost, foodCost, and transportationCost
// AND the computerCost is greater than the sum of rentCost and utilitiesCost
// if both those statements are true, then create an alert that says "Computer costs are too high!"
// else, create an alert that says "Rent is too high!"

if ((rentCost > (utilitiesCost + foodCost + transportationCost)) && 
  (computerCost > (rentCost + utilitiesCost))) {
    alert("Computer costs are too high!");
  } else {
    alert ("Rent is too high!");
  }
