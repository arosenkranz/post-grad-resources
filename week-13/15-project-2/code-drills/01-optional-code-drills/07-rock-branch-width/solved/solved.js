var Node = function (data) {
  this.data = data
  this.children = []

}



function branchWidth(root) {
  // Initialize an array with the root node and a string we can use later as a condition check
  var arr = [root, "stop"]
  // What we'll return
  var widths = [0]

  while(arr.length > 1) {
    // Grab the first value in arr
    var node = arr.shift()
    // If Stop is the first value in arr
    if(node === "stop") {
      // re-initialize widths with 0
      widths.push(0)
      // Add another stop for condition checks
      arr.push("stop")
      // When the first value in arr is NOT "stop"
    } else {

      for (var i = 0 ; i < node.children.length ; i++) {
        // Send every child node to arr
        arr.push(node.children[i]) 
      }
      // Increment the lates value we're working on in widths. This stops getting added to when we hit "stop"
      widths[widths.length -1] ++
    }
  }

  return widths
}



var root = new Node(0);
root.add(1);
root.add(2);
root.add(3);
root.children[0].add(4);
root.children[2].add(5);

console.log(branchWidth(root))