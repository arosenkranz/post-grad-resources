# Algorithms

## Binary Search Tree Validation

### Instructions

A Binary Search Tree is a data structure of linked nodes where every node to the left of a particular node contain values less than that node and every node to the right of that particular node contain values greater than that node.

* In this activity, you're going to be adding a `validate` method to a binary search tree constructor.
    * This method should iterate through the tree, starting from the head and check to make sure each node is valid.
    * In this instance of a binary search tree, there are no duplicate values.
    * Keep in mind that the following tree is not valid even though the individual nodes are valid:

    ```javascript
          10
         /  \
        5    20
       / \
      2  14
    ```

    * In the above example if you're only looking at the node `5`, it is valid because 2 is less than 5 and 14 is greater than 5, but when you look above, 14 is greater than 10, so it doesn't belong to the left of it.

* You should be able to solve this problem in O(n) time
    * You don't have to iterate through the rest of the tree for each node
    * This requires either recursion or creating a stack (or queue) of values to iterate through.
