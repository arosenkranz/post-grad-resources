// Nested Array Access 


console.log("====================  Foreword  ====================");
var array = ["Zero","One","Two","Three","Four","Five"];
// Accessing values in a single-dimensional array is as easy as calling on the index of the index of the target element that you are looking for. 
// For example, if your target element was the string "Three" in the above array then we would access the index where that element was located: 
// array[3] and the value held at that index would be returned : "Three"

// Arrays in JS can store any datatype, including a sub-array:
var subArray = ["Zero","One","Two",["Three","Four"],"Five"];
// To access the element "three" we would first need to access the array that is held at index 3: 

//subArray[3] which would return the sub-array ["Three","Four"] and then access the index of that sub-array in order to return the value of "Three":
console.log(subArray[3][0]);

// Let us examine a more complicated example: 
var nestedArray = [[1,2], ["nested", ["Radio Flyer Wagon", "Chemistry Set", ["Joy Buzzer", "Yo-Yo"]]]];
// `nestedArray` is a multi-dimensional data structure, and becoming familiar with accessing nested values is a skill that takes practice. 

// Below is a series of sample data structures. We have specified a desired target element and asked for you to provide the code for accessing that value.

// ------------------------------------------------------------------
console.log("==================== Question 01 ====================");
// Your target is: "Yo-Yo"
var nestedArray = [[1,2], ["nested", ["Radio Flyer Wagon", "Chemistry Set", ["Joy Buzzer", "Yo-Yo"]]]];
var target;
// assign `target` the value of "Yo-Yo" using the `nestedArray` variable
// 
target = nestedArray[1][1][2][1];



// This should console log out "Yo-Yo"
console.log(target);

// ------------------------------------------------------------------
console.log("==================== Question 02 ====================");
// Your target is: "Sock Monkey"
var nestedArray = ["Pop-Up Book", ["Stuffed Mickey Mouse", ["Beach Ball", "Sock Monkey"], "Buck Rogers Rocket Pistol"], "Microscope Set"];
var target;
// assign `target` the value of "Sock Monkey" using the `nestedArray` variable
// 
target = nestedArray[1][1][1];



// This should console log out "Sock Monkey"
console.log(target)

// ------------------------------------------------------------------
console.log("==================== Question 03 ====================");
// Your target is: 42
var nestedNumberArray = [3,1,[41,59,265,358,979],32,38,46,[264338,327,9,50,[2,88,42,971],69,3,9,937],510,58,2];
var target;
// assign `target` the value of 42 using the `nestedNumberArray` variable
// 
target = nestedNumberArray[6][4][2];



// This should console log out 42
console.log(target);

// ------------------------------------------------------------------
console.log("==================== Question 04 ====================");
// Your target is is: "Legos"
var nestedMixedArray = [8,[76,["Bubble Solution"],530,"Slinky","Magic 8 Ball","Legos"],9];
var target;
// assign `target` the value of "Legos" using the `nestedMixedArray` variable
// 
target = nestedMixedArray[1][5];



// This should console log out "Legos"
console.log(target);

// ------------------------------------------------------------------
console.log("==================== Question 05 ====================");
// Nested Object Access
// It is important to remember the following with arrays and Objects:
// Arrays: Are ordered, integer-indexed collections of any object. This is a data structure where order matters and elements within an array are accessed by index.
// Objects: Are dictionary-like collections of unique keys and their values. This is a data structure where order does not matter, and elements within aObject are accessed by a key which returns a value.

// Your desired target is: "Value!"
var nestedObject = {"outer": {"innerKey": {"object": {"key": "Value!"}}}}
var target;
// assign `target` the value of "Value!" using the `nestedObject` variable
// 
target = nestedObject.outer.innerKey.object.key;



// This should console log out "Value!"
console.log(target);

// ------------------------------------------------------------------
console.log("==================== Question 06 ====================");
// Nested Mixed DataType Access
// Your target is: "goal"
var nestedMixedDataTypes = {"array": ["array", {"object": "goal"}]}
var target;
// assign `target` the value of "goal" using the `nestedMixedDataTypes` variable
// 
target = nestedMixedDataTypes.array[1].object;



// This should console log out "goal"
console.log(target);

// ------------------------------------------------------------------
console.log("==================== Question 07 ====================");
// Iterate over the Array of objects:
// iterating over nested data structures becomes easier when you have a grasp on how to access nested values. 
// Using the following array of objects, iterate over the array and print the elements in order.
var toyArrayOfObjects = [  
  {  
     "Product":20,
     "item":"Yo-Yo"
  },
  {  
     "Product":19,
     "item":"Legos"
  },
  {  
     "Product":18,
     "item":"Chemistry Set"
  },
  {  
     "Product":17,
     "item":"Bubble Solution"
  },
  {  
     "Product":16,
     "item":"Tonka Truck"
  },
  {  
     "Product":15,
     "item":"Frisbee"
  },
  {  
     "Product":14,
     "item":"Plarail Toy Train"
  },
  {  
     "Product":13,
     "item":"Etch A Sketch"
  },
  {  
     "Product":12,
     "item":"Koosh Ball"
  },
  {  
     "Product":11,
     "item":"Buzz Lightyear"
  },
  {  
     "Product":10,
     "item":"Furby"
  },
  {  
     "Product":9,
     "item":"Tickle Me Elmo"
  },
  {  
     "Product":8,
     "item":"Beanie Baby"
  },
  {  
     "Product":7,
     "item":"Teddy Ruxpin"
  },
  {  
     "Product":6,
     "item":"Slap Bracelet"
  },
  {  
     "Product":5,
     "item":"Cabbage Patch Kids"
  },
  {  
     "Product":4,
     "item":"Stretch Armstrong"
  },
  {  
     "Product":3,
     "item":"Rubik's Cube"
  },
  {  
     "Product":2,
     "item":"Weebles"
  },
  {  
     "Product":1,
     "item":"NERF Ball"
  }
];
// The output for each element should be formatted like this:

// Count: 20
// Item: Yo-Yo
// *************************
// Count: 19
// Item: Legos
// *************************
// Count: 18
// Item: Chemistry Set
// *************************
// Count: 17
// Item: Bubble Solution
// *************************

function iterateArrObjects(arrOfObj){
  // ---------- Your Code Here ----------

  for (var i = 0; i < arrOfObj.length; i++) {
    console.log("Count: ", arrOfObj[i].Product);
    console.log("Item: ", arrOfObj[i].item);
    console.log("*************************");
  }

  // ---------- End of Code Area ----------
}
// Calling the function
iterateArrObjects(toyArrayOfObjects);

// ------------------------------------------------------------------
console.log("==================== Question 08  ====================");
// Using the `toyArrayOfObjects` variable from question 7, iterate through the
// array again, but print all the elements in reverse order. Your output should
// look like the following: 

// Count: 1
// Item: NERF Ball
// *************************
// Count: 2
// Item: Weebles
// *************************
// Count: 3
// Item: Rubik's Cube
// *************************
// Count: 4
// Item: Stretch Armstrong
// *************************

function iterateArrObjectsReverse(arrOfObj){
  // ---------- Your Code Here ----------

  for (var i = arrOfObj.length-1; i >= 0; i--) {
    console.log("Count: ", arrOfObj[i].Product);
    console.log("Item: ", arrOfObj[i].item);
    console.log("*************************");
  }

  // ---------- End of Code Area ----------
}
// Calling the function
iterateArrObjectsReverse(toyArrayOfObjects);
