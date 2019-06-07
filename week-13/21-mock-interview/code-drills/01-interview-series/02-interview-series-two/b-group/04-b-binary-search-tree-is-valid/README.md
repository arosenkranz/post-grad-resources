# INTERVIEW QUESTIONS

## IsValid Binary Search Tree

## Instructions
Given a tree, return true if the tree is a valid BST, else return false.

A valid BST is where everything left to the root node is less than the value of the root node and everything to the right is greater than the value of the root node.

This pattern repeats for each node within the tree.

## Example
                    100
                 200   400
                          500
Expected result:false

                    100
                50      150
              30  60       170
Expected result: true

## Optimal Time
O(nlogn)