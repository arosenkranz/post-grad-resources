# Computer Science

## Circular List

### Instructions

Given a singularly linked list, find out if there is a loop within the list such that one node in the list links to an earlier element, thus creating a loop

* Examine the code given for the singularly linked list. The built in functionality is very minimal, but you should take some time to understand how the code behaves.

* Create a `checkLoop` method for the constructor using `prototype` property
    * This method will check to see if a loop exists within the current instance of the linked list and return true if a loop exists and false if a loop doesn't exist

* Bonus: This `checkLoop` method can be completed in O(n) time without using an object or array to keep track of previously visited nodes. Try to complete the method in O(n) time complexity and O(1) space complexity.
    * You will need to keep track of two iterators through the list, but nothing else
