var Node = function (data) {
  this.data = data
  this.children = []
}
// YOUR WORK HERE



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