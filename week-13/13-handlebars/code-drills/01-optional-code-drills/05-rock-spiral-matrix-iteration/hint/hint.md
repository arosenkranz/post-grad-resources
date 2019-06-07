* When iterating through the matrix, it is highly recommended that you iterate through the entire perimeter in each pass of the iteration.
    * This seperates out your logic so that once you figure out how to iterate through the perimeter of a matrix, you can redefine the matrix you're looking at in order to iterate through the next later of the matrix.
    * In the following example, the numbers of the matrix indicate which iteration the elements are processed.

```javascript
[[1, 1, 1, 1, 1, 1],
 [1, 2, 2, 2, 2, 1],
 [1, 2, 3, 3, 2, 1],
 [1, 2, 2, 2, 2, 1],
 [1, 1, 1, 1, 1, 1]]
```
* So, after the first iteration, the elements we still have left to iterate through are a smaller matrix within the first one.

```javascript
[[2, 2, 2, 2],
 [2, 3, 3, 2],
 [2, 2, 2, 2]]
```

* This way, we can apply the same logic we did to the first portion but with a smaller matrix.

* This means we have to make sure our logic for reading the perimeter is modular enough.