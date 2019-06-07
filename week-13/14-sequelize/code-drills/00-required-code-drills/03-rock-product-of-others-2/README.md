# Algorithms

## Product of all other numbers

### Instructions

_Like many problems that you will come across, the previous activity has multiple solutions. It is important to be able to recognize alternate solutions, especially when you're trying to write better code. In this activity, you will solve the previous activity using a different method than the one you used previously._

* If you brute forced the solution by iterating through the rest of the array for each element within the argument, try to solve it without doing that. You might have to iterate through the array more than once, but this problem can be solved without using nested for-loops.
    * If you did not brute force the solution, solve this problem by brute forcing the solution with nested for-loops.
        * While this approach is inefficient, it is often times the easiest to understand and implement, so if you're under time pressure to push out a working solution, being able to quickly brute force an answer is valuable.
        * You can always go back and make it more efficient if you have time, but whether it's a project or a job interview, getting a working solution is much more important than getting an efficient solution.

* Write a function `otherProduct` that takes in an array of numbers and returns a new array where each element within the return array is the product of multiplying all the numbers in the argument array except the element corresponding to the current index.
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
