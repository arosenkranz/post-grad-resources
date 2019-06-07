var Node = function (data) {
  this.data = data
  this.children = []

  this.add = function (data) {
    this.children.push(new Node(data))
  }

  this.remove = function (data) {
    this.children.filter(function (node) {
      return node.data !== data
    })
  }
}

// YOUR WORK HERE

var Tree = function () {
  this.root;


  this.breadth = function (func) {
    // Initialize empty array
    var arr = [this.root]
    // while there is content inside of arr...
    while (arr.length) {
      // initialize node to the first element in arr
      var node = arr.shift()
      for (var i = 0; i < node.children.length; i++) {
        // send all the children of a given node to arr.
        arr.push(node.children[i])
      }
      //You can now search through all the nodes in the tree 
      func(node)

    }
  }


  // There are a lot of ways to think about this problem. Rememeber, we want to iterate through the first child of a given node, then through that node's first child, and so on. Only when we reach the "bottom" of the tree do we go back up n levels to return to the first sibling we skipped. 

  this.depth = function (func) {
    // Initialize an array which contains only this.root

    // Create a loop that lasts as long as the array we just created has a length greater than 0.

      // create a variable that returns and removes the first element of the array we created.

      // Create a loop that iterates through all the children of the variable we created in the last step

      // Send each child to the BEGINNING OF the array we created.

      // Invoke the callback "func" on each node (what the variable we created points to)
  }


}





// TESTS
var letters = [];
var t = new Tree();
t.root = new Node('a');
t.root.add('b');
t.root.add('c');
t.root.children[0].add('d');

t.depth(node => {
  letters.push(node.data);
});

console.log(letters) // should be [ 'a', 'c', 'b', 'd' ]