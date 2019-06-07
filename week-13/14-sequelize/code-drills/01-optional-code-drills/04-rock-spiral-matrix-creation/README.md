# Algorithms

## The Spiralist - Challenge

### Instructions

Given a number--let's call this number n for now--create a matrix with n * n dimensions.

A matrix is an array of arrays.

If n is 3, our matrix will have the following structure:
```javascript
[
  [number, number, number],
  [number, number, number],
  [number, number, number]
]
```

Notice that there are three sub arrays, and three elements in each sub array. If n were 4, we would have 4 sub arrays, each with 4 elements within.

Your job is to iterate through your created matrix in a spiral. You will be generating the numbers that populate this matrix.

Return the spiral matrix.

### Example
Given the number 3, we will create the following matrix:

```
[
  [1,2,3],
  [8,9,4],
  [7,6,5]
]
```
If you look at the above example, you'll see the spiral. We increment through the first row until we've filled it in. Then we move on to increment through the last column. Once that's complete we decrement through the last row, then up the first coulmn.

The process continues as such.

### Instructions cont.
This problem may prove very challenging. If you'd like to give it a shot on your own, open challenge.js, where you are given no help, just an empty function.

Otherwise, open prompt.js, where you are give pseudocode that will guide you through this challenging problem.

There are a series of tests written below the function you need to fill in. You will know it's solved when the result of all those tests match the structure of the spiral matrix described above.


