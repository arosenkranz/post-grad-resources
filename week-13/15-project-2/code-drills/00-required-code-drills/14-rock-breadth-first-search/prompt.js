var Node = function (data) {
  this.data = data
  this.children = []
}


// YOUR WORK HERE





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