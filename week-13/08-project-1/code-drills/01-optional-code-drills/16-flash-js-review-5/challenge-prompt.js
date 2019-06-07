console.log("////////////////////////////// QUESTION 1.1 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")
/*Write a function called "addObjectProperty".

Given two objects and a key, "addObjectProperty" sets a new property on the 1st object at the given key. The value of that new property is the entire 2nd object.


Starter Code :*/
function addObjectProperty(obj1, key, obj2) {
    // your code here





    // code ends here
}

var person1 = {
    name: 'Joe Blow',
    role: 'schlub'
};
var person2 = {
    name: 'Mr. Burns',
    role: 'supervisor'
};
addObjectProperty(person1, 'manager', person2);
console.log(person1.manager); // --> { name: 'Mr. Burns', role: 'supervisor' }

console.log("////////////////////////////// QUESTION 1.2 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

/*Write a function called "getElementsUpTo".

Given an array and a index, "getElementsUpTo", returns an array with all the elements up until, but not including, the element at the given index.




Starter Code :*/
function getElementsUpTo(array, n) {
    // your code here





    // code ends here
}
var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3)
console.log(output); // --> ['a', 'b', 'c']

console.log("////////////////////////////// QUESTION 1.3 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

/*Write a function called "addToEnd".

Given an array and an element, "addToEnd" returns the given array with the given element added to the end.

Note: It should be the SAME array, not a new array.

Starter Code :*/
function addToEnd(arr, element) {
    // your code here





    // code ends here
}

var output = addToEnd([1, 2], 3);
console.log(output); // -> [1, 2, 3]

console.log("////////////////////////////// QUESTION 1.4 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

/*Write a function called "areaOfARectangle".

Given the length and width of a rectangle, "areaOfARectangle" returns its area.

Starter Code :*/
function areaOfARectangle(length, width) {
    // your code here





    
    // code ends here
}
var output = areaOfARectangle(4, 8);
console.log(output); // --> 32
