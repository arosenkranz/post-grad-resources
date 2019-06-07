/*Write a function called "smallestNumber".

Given an array of mixed elements, "smallestNumber" returns the smallest number in the array

ignore values that aren't numbers

Starter Code :*/
function smallestNumber(arr) {

  // code starts here

  var smallest = null;

  for (var i=0; i<arr.length; i++){
    if (typeof arr[i] === 'number') {
      if (smallest === null) {
        smallest = arr[i];
      } else {
        smallest = Math.min(smallest, arr[i]);
      }
    }
  }
  
  return smallest
  // code ends here
}
var output = smallestNumber([9, 'lincoln', 5, 'octopus', 'a', 4, 10, 'hello']);
console.log(output); // --> 4