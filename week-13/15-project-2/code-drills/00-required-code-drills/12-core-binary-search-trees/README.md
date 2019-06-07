# Search Trees

## The Notorious BST, AKA The Binary Search Tree

### Instructions
In the last four exercises, we were dealing with unregulated trees. You could add as many nodes wherever you wanted to.

The Binary Search Tree is a type of search tree with some restrictions. Each node in a BST can only have two children. The child on the left MUST be smaller than its parent. The child on the right MUST be larger than its parent.

Let's say we have a root node (the top of the tree) of 20. 20 has two children: 15 and 25. 15 would be on the "left", and 20 on the "right". The same process can be repeated for 15 and 25, respectively, and to each of their children and so on.

`In this exercise, you'll be asked to create an add function to a BST constructor which adds the given value to its proper place within the tree.`

So for the tree described above, if our BST constructor was passed 12, it would go to the left of 20 because it is smaller than 20. Then it would go to 15, which it is also smaller than. Because 15 has no children of its own (or at least no left child), 12 can assume the spot of 15's left child.

You will need to use the given node constructor as a part of your logic.

Your BST constructor should include the following: 
- root: a variable that points to the root node, passed when the BST is created.

- insert: the function described in this exercise. The function takes an argument of data which represents the node to be inserted.

In prompt.js, you will only be given tests for your insert function.

In hint.js, you will be given the tests in addition to some pseudocode
