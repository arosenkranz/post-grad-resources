console.log("////////////////////////////// QUESTION 4.1 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")
/*Write a function called "removeNumbersLessThan".

Given a number and an object, "removeNumbersLessThan" removes any properties whose values are numbers less than the given number.

Starter Code :*/
function removeNumbersLessThan(num, obj) {
  // your code here
  for(var pop in obj){
    if(obj[pop] < num){
     delete obj[pop]; 
    }
   }
  return obj;
  // code ends here
}

var obj = {
  a: 8,
  b: 2,
  c: 'montana',
  d: 5
}
removeNumbersLessThan(5, obj);
console.log(obj); // --> { a: 8, c: 'montana' }


console.log("////////////////////////////// QUESTION 4.2 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

/*Write a function called "elementsGreaterThan10".

Given an object and a key, "elementsGreaterThan10" reads the array located at that key and returns a new array containing only the values from the array in the object that are greater than 10 

returns an array containing elements that are greater than 10 from the array located at the argument key within the argument object.

Notes:
* If the array is empty, it should return an empty array.
* If the array contains no elements greater than 10, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the key, it should return an empty array. 

Starter Code :*/
function elementsGreaterThan10(obj, key) {
  // your code here
  var rtnArray = [];
  
  for(var element in obj[key]){
    if(obj[key][element] > 10){
      rtnArray.push(obj[key][element]);
    }
  }
  return rtnArray;
  // code ends here
}
var obj = {
  key: [1, 20, 30]
};
var output = elementsGreaterThan10(obj, 'key');
console.log(output); // --> [20, 30]