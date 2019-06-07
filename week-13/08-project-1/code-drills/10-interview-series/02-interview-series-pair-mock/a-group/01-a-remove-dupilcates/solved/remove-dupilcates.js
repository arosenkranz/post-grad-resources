
// solution:


function removeDuplicateNested(arr){
  var solutionArr = [];
// Q: What are you going to do? 
// A: instatiate an empty array
// Q: How are you going to do it? 
// A: assignment operator
// Q: Why are you going to do it? 
// A: to create a holding container for values we have seen before / Unique values
  for (var i = 0; i < arr.length; i++) {
// Q: What are you going to do? 
// A: interate through the input array
// Q: How are you going to do it? 
// A: for loop
// Q: Why are you going to do it? 
// A: to examine every element
    var found = false
// Q: What are you going to do? 
// A: declare a variable 'found' with an intial value of false
// Q: How are you going to do it? 
// A: assignment operator
// Q: Why are you going to do it? 
// A: to have a pointer to signify if a value has been seen before
    for (var j = 0; j < solutionArr.length; j++) {
// Q: What are you going to do? 
// A: while examining a single element compare that element to every element of the solutions array
// Q: How are you going to do it? 
// A: with a nested loop
// Q: Why are you going to do it? 
// A: to see if there are matching elements int he solutions array
      if(arr[i] === solutionArr[j]){
// Q: What are you going to do? 
// A: compare the initial element to every element of the solutions array
// Q: How are you going to do it? 
// A: comparison operator
// Q: Why are you going to do it? 
// A: to see if there are any matches - have we seen it before? 
        found = true;
// Q: What are you going to do? 
// A: assign the varible `found` with a value of true
// Q: How are you going to do it? 
// A: assignment operator
// Q: Why are you going to do it? 
// A: because if there is a matching value within the solutions array then it is a duplicate element - we now do nothing
      }
      
    }
    if(!found){
// Q: What are you going to do? 
// A: Check to see if the value of found is false - have we not seen it in the solutions array
// Q: How are you going to do it? 
// A: With the conditional check and bang (!) operator
// Q: Why are you going to do it? 
// A: see if we have found a duplicate value
      solutionArr.push(arr[i])
// Q: What are you going to do? 
// A: add the element to the solutions array
// Q: How are you going to do it? 
// A: with the Array built in method, push
// Q: Why are you going to do it? 
// A: to to push in the unique, have not seen it before, value
    }
  }
  return solutionArr;
// Q: What are you going to do? 
// A: return the solutions array
// Q: How are you going to do it? 
// A: with our explicit return statement
// Q: Why are you going to do it? 
// A: to return the solutions array with only unique valuess
}

var testArr = [1,3,3,3,1,5]
console.log(removeDuplicateNested(testArr));

//optimal
 // Answer: will start a for looping and keep an object/ associated array. 
 // If i find an element for the first time i will set its value as true (that will tell me element added once.). 
 // if i find a element in the exists object, i will not insert it into the return array.

 function removeDuplicate(arr){
  var exists ={};
// Q: What are you going to do? 
// A: instantiating an empty object 
// Q: How are you going to do it? 
// A: assignment operator and curly braces 
// Q: Why are you going to do it? 
// A: to create a tracker for all items we have seen before
  var outArr = []; 
// Q: What are you going to do? 
// A: instantiating an empty array
// Q: How are you going to do it? 
// A: assignment operator and hard bracketts
// Q: Why are you going to do it? 
// A: to have a holding container for all nonduplicate values

  for(var i =0; i < arr.length; i++){
// Q: What are you going to do? 
// A: interate through every element of the input array 
// Q: How are you going to do it? 
// A: for loop
// Q: Why are you going to do it? 
// A: to examine every element
    var elm = arr[i];
// Q: What are you going to do? 
// A: assign the varible `elm` to the value of arr[i]
// Q: How are you going to do it? 
// A: assignment operator and array bracket notation
// Q: Why are you going to do it? 
// A: to have a clear pointer to each element in the input array
    if(!exists[elm]){
// Q: What are you going to do? 
// A: check to see if the element has been seen before - does it exist on the tracker object
// Q: How are you going to do it? 
// A: contional checker obejct and array bracket notation
// Q: Why are you going to do it? 
// A: to determine if we have seen this element before
      outArr.push(elm);
// Q: What are you going to do? 
// A: for each element push it to the newly created array if it has not been seen before
// Q: How are you going to do it? 
// A: built-in array method `push` and the array bracket notation
// Q: Why are you going to do it? 
// A: to add each and every UNIQUE element of the input array
      exists[elm] = true;
// Q: What are you going to do? 
// A: add the element as a key on our tracker object with an associated value of 'true'
// Q: How are you going to do it? 
// A: object bracket notation and assignment operator
// Q: Why are you going to do it? 
// A: to track elements we have seen
   }
  }
  return outArr;
// Q: What are you going to do? 
// A: Return the `outArr`
// Q: How are you going to do it? 
// A: Return statement 
// Q: Why are you going to do it? 
// A: the for loop has completed - we have incremented through all characters/indices of the input array and tracked all non dups


// var testArr = [1,3,3,3,1,5]
// console.log(removeDuplicate(testArr));


