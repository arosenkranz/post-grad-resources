# Computer Science 

## Weaving Queues

### Instructions

* If you were unable to complete 02, a Queue constructor is provided for you in prompt.js

Create a function which takes two queues as arguments. Using only the methods in the Queue constructor, return an array which has `weaved` two queues together.

### Example
Given the following:
```
var one = new Queue ([1,3,5,7])
var two = new Queue ([2,4,6,8,10,12,14])

console.log(weave(one, two))
```
Your function should return:

[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14]

* Note that your function should be able to account for arrays of different sizes.