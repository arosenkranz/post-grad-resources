# Computer Science

## Largest Number in a Stack

_You have implemented and worked with stacks a lot of times already. In this activity, we will be creating a slightly different stack. This stack will keep track of the largest number in the stack and return that in constant time._

* Your stack should have all the usual methods
  * `push` to add elements to the stack
    * O(1) time complexity
  * `peek` to look at the top element of the stack
    * O(1) time complexity
  * `pop` to remove and return the top element of the stack
    * O(1) time complexity

* Add a `getMax` method that returns the current maximum number inside the stack
  * This method should work in constant time O(1)
  * What happens if you pop an element that was the maximum number?
    * Your `pop` method should still be in constant time O(1)
  * HINT: Skew the complexity towards the data you're storing and keeping track of since there are no space complexity restrictions
