# INTERVIEW QUESTIONS

## Search a BST - hard

## Instructions
Add a method to a BST class which searches the tree for a given node. 

The interviewee is given a complete Node class and a BST class with a root node and nothing else. In solved, there is also an insert method, but this is just used for testing purposes. if the interviewer wishes, he/she may use that as a question on its own.

The method should return an entire node whose value matches the value that was passed as an argument.

Return null if there is no node that meets the search criteria.


## Optimal time
O(log n)

## Hints
- Use a while loop. 
- In each iteration, the while loop should seacrh a given node, and determine whether it should move to its left child or right child. The node to be searched in the next iteration of that loop should be the node that was selected between the two.

