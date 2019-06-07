var Node = function (data) {
  this.data = data
  this.children = []

}

// YOUR WORK HERE

var Tree = function () {
  this.root;


  this.add = function(node, data) {
    node.children.push(new Node(data))
  }

  this.remove = function(node, data) {
    node.children.filter(function(child) {
      return child.data !== data
    })
  }

  // There are a lot of ways to think about this problem. Rememeber, we want to iterate through all of the children of a given node, and only when all of those nodes have been iterated through do we want to move on to the grandchildren.

  this.breadth = function (func) {
    // Initialize an array which contains only this.root

    // Create a loop that lasts as long as the array we just created has a length greater than 0.

      // create a variable that returns and removes the first element of the array we created.

      // Create a loop that iterates through all  the children of the variable we created in the last step

      // Send each child to the array we created.

      // Invoke the callback "func" on each node (what the variable we created points to)
  }


}





// TESTS

var letters = [];
var t = new Tree();
t.root = new Node('a');
t.add(t.root, 'b');
t.add(t.root, 'c');
t.add(t.root.children[0], 'd');
t.add(t.root.children[0], 'e');
t.add(t.root.children[1], 'f');

t.breadth(function(node) {
  letters.push(node.data);
});

console.log(letters)