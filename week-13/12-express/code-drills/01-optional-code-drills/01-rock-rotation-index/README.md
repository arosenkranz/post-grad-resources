# Algorithms

## Finding the rotation index

_The rotation index of an array is the index where if you were to take the front portion of the array before the index and append it onto the back portion of the array after the index, you would end up with a sorted array of numbers from lowest to highest_

### Instructions

* Write a function `rotIndex` that when given an array that has been rotated, returns the rotation index.
    * Refer to the examples for clarification.

* After you've filled in the logic for the function inside `challenge-prompts.js`, run the test.js file in order to check your output.

```javascript
var arr1 = [4, 5, 6, 7, 8, 1, 2, 3, 4];
console.log(rotIndex(arr1)); // = 5

var arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(rotIndex(arr2)); // = 0

var arr3 = [34, 87, 90, 5, 17, 22, 29, 31, 33];
console.log(rotIndex(arr3)); // = 3

var arr4 = [34, 87, 90, 95, 117, 122, 129, 131, 3];
console.log(rotIndex(arr4)); // = 8
```
