# Algorithms

## Balanced Binary Search Trees

### Instructions

A balanced binary search tree is one where the height of the children of each node is within 1 height of every other node's child branch on the same level inside the binary search tree. In this activity you will be writing a `checkBalance` method that returns true if the binary search tree is balanced and false otherwise.

* For example, the following is a balanced BST: 

```
          9
         / \
        5   12
       / \    \
      2   7    15
```

* The height of the tree above at the node `5` is 1 for both children and the height of the tree at node `12` is 0 for the left child and 1 for the right child. Because these heights are within 1 of each other and the same holds true for the rest of the tree, this tree is balanced.

<br>

* The following is not a balanced BST:

```
          9
         / \
        7   12
       /   /  \
      5   11   15
     /
    2
```
* The above tree is not balanced because the height of the left child of `7` is 2, but the height of the right child of `7` is 0 which is a difference greater than 1.

* There is room provided for a helper function if you wish to solve this problem recursively by checking if each node is balanced.
    * Remember to take into account the heights of the children of that node because even if a node is balanced, it might be much longer or shorter than a sibling node.