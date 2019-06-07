# Algorithms

## Product of all other numbers

### Instructions

_Write a function `otherProduct` that takes in an array of numbers and returns a new array where each element within the return array is the product of multiplying all the numbers in the argument array except the element corresponding to the current index._

* Assume the argument array has at least 2 elements

* Assume the argument array contains only positive integers

```javascript
otherProduct([2, 3, 4, 5])
// should return
[60, 40, 30, 24]
// because
[3*4*5, 2*4*5, 2*3*5, 2*3*4]

otherProduct([10, 2, 5, 4])
// should return
[40, 200, 80, 100]
// because
[2*5*4, 10*5*4, 10*2*4, 10*2*5]
```
