# Algorithms

## Spiral iteration through a matrix

### Instructions

_A matrix is a 2 dimensional table of values. Most times, a matrix in javascript is represented as an array of arrays. For example:_

```javascript
var matrix = [[ 1,  2,  3,  4,  5],
              [ 6,  7,  8,  9, 10],
              [11, 12, 13, 14, 15],
              [16, 17, 18, 19, 20]]
```

_The above is a 5 x 4 matrix. There are many ways to iterate through this array, but for this exercise, we will be writing a function to iterate through the matrix spiralling inward clockwise from the top left corner._

* Write a function that when given a rectangular matrix, iterates through the contents by spiraling inward from the top left corner and returns a new array with the contents in the order of iteration.
```javascript
var matrix = [[ 1,  2,  3,  4,  5],
              [16, 17, 18, 19,  6],
              [15, 24, 25, 20,  7],
              [14, 23, 22, 21,  8],
              [13, 12, 11, 10,  9]]

spiralIter(matrix)
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
```

* Start in the top left corner of the matrix and iterate clockwise through the matrix.

* You will be given a rectangular matrix which means every sub-array with have the same length
    * If the function is passed an empty matrix or a matrix with no entries, the return should be an empty array
    * The elements are not guaranteed to be in ascending order during the iteration. The example matrix was provided to clearly demonstrate the order of iteration.

* This can be a very challenging exercise, so refer to the hints if you're stuck.
    * Spiral iteration through a matrix is a fairly common concept to test job applicants on, so try your best!

* A `test.js` file has been provided for your convenience.