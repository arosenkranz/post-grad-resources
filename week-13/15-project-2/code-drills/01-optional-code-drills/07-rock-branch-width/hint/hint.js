var Node = function (data) {
  this.data = data
  this.children = []
}

// One way we can solve this is to essentially do a breadth-first search. However, we need to both count how many nodes are in a given row, and keep track of when we are moving down a row...

function branchWidth(root) {
  // Initialize an array with the root node and a string we can use later as a condition check. This is what the first branch will essentialy look like: One node and then a stop. 
  var arr = [root, "stop"]
  // What we'll return. The 0 will act as a counter for the number of nodes in a row.
  var widths = [0]

  // Create a loop that runs until there is only one element left in arr (this will ultimately be "stop"). 

    // Create a variable called "node" that returns and removes the first value from arr.

    // If we've hit a "stop"

      // send a new 0 (a counter) to widths. This means we're starting a new row

      // Send another "stop" to arr to mark anoter end of row

   // If we haven't hit a "stop"
   
      // Send each of "node"'s children to arr

      // Increment the last counter in arr


  return widths
}


// TESTS
var root = new Node(0);
root.add(1);
root.add(2);
root.add(3);
root.children[0].add(4);
root.children[2].add(5);

console.log(branchWidth(root))