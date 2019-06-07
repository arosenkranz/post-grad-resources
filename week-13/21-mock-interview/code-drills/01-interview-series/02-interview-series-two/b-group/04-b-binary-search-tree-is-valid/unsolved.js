var Node = function(value){
    //each node will have a value
    this.value = value;
    //each node may point to a right node that is greater then its own value
    this.right = null;
    //each node may point to a left nodethat is less then its own value
    this.left = null;
    //you might have other information in this node 
  }
  
  var Tree = function(){
    //head node to the tree
    this.head = null;
  }

  
    var sapling = new Tree();

    sapling.head = new Node(100);
    sapling.head.left = new Node(50)
    sapling.head.left.left = new Node(20)
    sapling.head.left.left.right = new Node(30)
    sapling.head.right = new Node(150)
    sapling.head.right.left = new Node(120)
    sapling.head.right.right = new Node(170)

  // console.log("isValid: ",sapling.isValid())

  var sapling1 = new Tree();

    sapling1.head = new Node(100);
    sapling1.head.left = new Node(50)
    sapling1.head.left.left = new Node(20)
    sapling1.head.right = new Node(150)
    sapling1.head.right.left = new Node(120)
    sapling1.head.right.right = new Node(130)

  // console.log("isValid: ",sapling1.isValid())
  
  