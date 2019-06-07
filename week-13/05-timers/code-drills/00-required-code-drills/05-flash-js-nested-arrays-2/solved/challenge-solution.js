// More Nested Array Access


// ------------------------------------------------------------------
console.log("==================== Question 01  ====================");
// Constructing a Custom Object:
// So far you have learned about arrays and objects and played with enumerators (loops!). 
var toyArray = ["Water Balloon","Silly Putty","Paint-by-Numbers Kit",
             "Mr. Potato Head","Wiffle Ball","PEZ Dispenser",
             "Mr. Potato Head","Gumby","Hula Hoop","Mr. Potato Head",
             "Troll Doll","Silly Putty","Slip n Slide"]

// For this challenge, iterate over the provided `toyArray` and create your own custom `toyInventoryObj`. 
//`toyInventoryObj` will be an object with key-value pairs. 

//What the `toyInventoryObj` should store is the name of the toy as the key and how many times it occurs in the toyArray as the value. 
// For example "Water Balloon" occurs once in the toyArray and "Silly Putty" occurs twice. What I would expect the function to construct is:

// toyInventoryObj = {
//   "Water Balloon":1,
//   "Silly Putty":2,
//   ...
// }

function returnCustomObject(arr){
	var obj ={};
  
  // ---------- Your Code Here ----------

  for (var i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] += 1;
    } else {
      obj[arr[i]] = 1;
    }
  }

  // ---------- End of Code Area ----------

	return obj;
}

// calling on your function and storing the return value
var toyInventoryObj = returnCustomObject(toyArray);
console.log(toyInventoryObj);
// This is what I would expect as the return value of the `toyInventoryObj`:

// { 'Water Balloon': 1,
//   'Silly Putty': 2,
//   'Paint-by-Numbers Kit': 1,
//   'Mr. Potato Head': 3,
//   'Wiffle Ball': 1,
//   'PEZ Dispenser': 1,
//   'Gumby': 1,
//   'Hula Hoop': 1,
//   'Troll Doll': 1,
//   'Slip n Slide': 1 }




// ------------------------------------------------------------------
console.log("==================== Question 02  ====================");
// Evaluating Values in a Object:

// Iterate over the custom object you created in the previous question (`toyInventoryObj`) and look at each of its keys and values. 
// Return the toy that occurs the greatest number of times using the `toyInventoryObj`.

function greatestFrequency(toyInventory){
  var maxToy, maxNum;
  
  // ---------- Your Code Here ----------

  maxToy = "";
  maxNum = 0;

  for (toy in toyInventory) {

    if (toyInventory[toy] > maxNum){
			maxNum = toyInventory[toy];
			maxToy = toy;
		}
  }

  // ---------- End of Code Area ----------

	console.log("The toy that occurs the greatest number of times is "+ maxToy + ", which occurs " + maxNum +" times.")
}

// The console log of your application should be the following string: 
// "The toy that occurs the greatest number of times is 'Mr. Potato Head', which occurs 3 times."
greatestFrequency(toyInventoryObj);




// ------------------------------------------------------------------
console.log("==================== Question 03  ====================");
// Custom obj Creation from an Array of Values

// Object creation from an array of elements:
var toyArray = ["Iron Man vs. Ultron","Iron Man vs. Loki","Park Animals", "Adventure Camp Rafting","Snax"]
// Using the names given in the `toyArray`, construct toy objects and create a new array, `toyObjectArray`, filled with those 5 new `Toy Objects`.
// The names of the toys should be stored within the `name` key.

function toyArrToObj(arrayOfToys){
  
  var toyArrayOfObjs = [];

  // ---------- Your Code Here ----------

	for(var i =0; i < arrayOfToys.length; i++){
		toyArrayOfObjs.push({name: arrayOfToys[i]})
  }
  
  // ---------- End of Code Area ----------

	return toyArrayOfObjs
}

var newToyArray = toyArrToObj(toyArray)
console.log(newToyArray);
// The newToyArray should look like this:

// [ { name: 'Iron Man vs. Ultron' },
//   { name: 'Iron Man vs. Loki' },
//   { name: 'Park Animals' },
//   { name: 'Adventure Camp Rafting' },
//   { name: 'Snax' } ]




// ------------------------------------------------------------------
console.log("==================== Question 04  ====================");
// Constructing a Custom Object With Calculated Values:

// Please iterate over the provided toyInventoryArrayOfObjects and create a custom object that holds the following values:
// Requirements: 
// A key for each toyLine with the following key value pairs
// - toyLine, which contains the name of the toyLine
// - An array holding the names of each toy in that line
// - number of total number of toys in stock for that line

// The desired Object that you should expect is a Object that looks like this:

// { 'Potato Head Series': 
//    { toyLine: 'Potato Head Series',
//      toyLineToys: 
//       [ 'Mr. Potato Head',
//         'Potato Bug',
//         'Johnny Rotten Apple',
//         'Dr. Fruitcake',
//         'Ham Monster',
//         'Mr. Giblets',
//         'Aliens' ],
//      totalToysInToyLine: 1930 },
//   'Adventure Time Series': 
//    { toyLine: 'Adventure Time Series',
//      toyLineToys: [ 'Finn the Human', 'Jake the Dog', 'Princess Bubblegum' ],
//      totalToysInToyLine: 116 } }

// DATA SET

// Here is the provided array that contains each of the toy objects that contain the information that you need:  

toyInventoryArrayOfObjects = [
 {  "title": "Mr. Potato Head", //name of toy
    "toyLine" : "Potato Head Series", //name of toyline
    "fullPrice": "05.00", //full price for this toy
    "stock": 3 //number of toys in stock for this toy
 },
 {  "title": "Potato Bug",
    "toyLine": "Potato Head Series",
    "fullPrice": "10.00",
    "stock": 1
 },
 {  "title": "Johnny Rotten Apple",
    "toyLine": "Potato Head Series",
    "fullPrice": "15.00",
    "stock": 59
 },
 {  "title": "Dr. Fruitcake",
    "toyLine": "Potato Head Series",
    "fullPrice": "20.00",
    "stock": 265
 },
 {  "title": "Ham Monster",
    "toyLine": "Potato Head Series",
    "fullPrice": "25.00",
    "stock": 265
 },
 {  "title": "Mr. Giblets",
    "toyLine": "Potato Head Series",
    "fullPrice": "30.00",
    "stock": 358
 },
 {  "title": "Aliens",
    "toyLine": "Potato Head Series",
    "fullPrice": "35.00",
    "inStock": false,
    "stock": 979
 },
 {  "title": "Finn the Human",
    "toyLine": "Adventure Time Series",
    "fullPrice": "40.00",
    "stock": 32
 },
 {  "title": "Jake the Dog",
    "toyLine": "Adventure Time Series",
    "fullPrice": "45.00",
    "stock": 38
 },
 {  "title": "Princess Bubblegum",
    "toyLine": "Adventure Time Series",
    "fullPrice": "50.00",
    "stock": 46
 }];

// Iterate over each object in the provided `toyInventoryArrayOfObjects` and create a custom object: `customToyLineObject`.
// We can to consolidate the array of toy objects into a toyline object as defined by the instructions above
function createCustomObject(objectArr){

	customToyLineObj = {};

  // ---------- Your Code Here ----------

	for(var i=0; i < objectArr.length;i++){
    // if the toyline already exists, add the current toy to the "toyLineToys" array
    // and add the stock of the current toy to the toyline stock 
		if(customToyLineObj[objectArr[i].toyLine]){
			customToyLineObj[objectArr[i].toyLine].toyLineToys.push(objectArr[i].title)
			customToyLineObj[objectArr[i].toyLine].totalToysInToyLine += objectArr[i].stock
      
    // otherwise, instantiate a new toyline object within our `customToyLineObj`
		}else{
      customToyLineObj[objectArr[i].toyLine] = {
      toyLine: objectArr[i].toyLine,
      toyLineToys: [objectArr[i].title],
      totalToysInToyLine: objectArr[i].stock
      };
    
    }    
	}

  // ---------- End of Code Area ----------

	return customToyLineObj
}

// The following should console.log the `customToyLineObject` to terminal
var customObject = createCustomObject(toyInventoryArrayOfObjects)// takes the `toyInventoryArrayOfObjects` as an argument
console.log(customObject);

// This is a tester function that will perform a quick spot check to test if your code is working
function testObject(obj) {
  if (customObject['Potato Head Series'] && customObject['Adventure Time Series']) {
    if ((customObject['Potato Head Series'].totalToysInToyLine === 1930) &&
      (customObject['Potato Head Series'].toyLineToys.length === 7) &&
      (customObject['Adventure Time Series'].totalToysInToyLine === 116) &&
      (customObject['Adventure Time Series'].toyLineToys.length === 3))  
    {
      return true;
    }
  }
  return false;
}

// We're going to test your code with the tester function
// This should console log `true` if the object you made matches up enough with ours
console.log(testObject(customObject));




// ------------------------------------------------------------------
console.log("==================== Question 05  ====================");
// Write a function that when passed an array of numbers, returns true if there are
// duplicate numbers within that array and false if there are no duplicates within
// the argument

function areDups(arr){

  // ---------- Your Code Here ----------

  // create a lookup table to store all the values we've seen so far
  var existingNums = {};

  for (var i = 0; i < arr.length; i++) {
    // if we've seen the current value already, there is at least one duplicate, so return true
    if (existingNums[arr[i]]) {
      return true
    // otherwise, add the current value to the lookup table
    } else {
      existingNums[arr[i]] = true;
    }
  }

  // if we've iterated through the entire array without encountering a duplicate, then there are no duplicates
  return false;

  // ---------- End of Code Area ----------

}

// These arrays are going to be used to test your function
var duplicatesOne = [1,2,4,5,77,8,19,4];
var duplicatesTwo = [32,4,60,56,78,3,9];

// This should console log true:
console.log(areDups(duplicatesOne));

// This should console log false:
console.log(areDups(duplicatesTwo));
