var Node = function(value){
  //each node will have a value
  this.value = value;
  //each node may point to a right node that is greater then its own value
  this.right = null;
  //each node may point to a left nodethat is less then its own value
  this.left = null;
  //you might have other information in this node 
}


var BinarySearchTree = function(){
  //head node to the tree
  this.head = null;
  this.size = 0;
}

//adding a function for inserting a new node to the tree
//honestly it is not the focus of this lesson - but may prove interesting
BinarySearchTree.prototype.insert = function(value){
  //if there is no head already set (no nodes in the tree)
  if (this.head === null){
    // when the tree is empty
    this.head = new Node(value);
    //increment the size of the tree because we inserted our first value (node)
    this.size++;
  } //if there is a value in the head (There IS a node in the tree then create the function and call it)
  else {
    // when stuff (a root node) has already been inserted - function for find and insert
    var findAndInsert = function(currentNode){

    //if the value that we are inserting is greater then the current node then look right
      if (value > currentNode.value){
        //if we have reached a point where the limb is null then we can insert a new node (this can be called our base case)
        if (currentNode.right === null){
          currentNode.right = new Node(value);
        } else {
        //if the value of right branch is not null then we call on the function again passing the right node as an argument
          findAndInsert(currentNode.right);
        }
    //if the value that we are inserting is less then the current node then look left
      } else if (value < currentNode.value){
        //if we have reached a point where the limb is null then we can insert a new node (this can be called our base case)
        if (currentNode.left === null){
          currentNode.left = new Node(value);
        } else {
          //if the value of left branch is not null then we call on the function again passing the left node as an argument
          findAndInsert(currentNode.left);
        }
      }
    }
    //function called if there is a value in the head (There IS a node in the tree then create the function and call it)
    findAndInsert(this.head);
    //increment the size of the tree because we inserted a new value (node)
    this.size++;

  }
}

//adding a function to BinarySearchTree to do a search to be used for delete 
//function declaration inside of a prototype function!?! 
//Look at prototype-based inheritance
//honestly it is not the focus of this lesson - but may prove interesting

//Logarithmic O(log n)
BinarySearchTree.prototype.search = function(target){
  var check = false;
  //create a function for 
  var traverse = function(currentNode){
   
    //if check is set to true (our base case)
    if (check){
      return;
    } //if the node passed is null then return out (another base case)
    else if (currentNode === null){
      return;
    } else if (currentNode.value === target){ //we found it! Return out of function TRUE
      check = true;
      return;
    }
    //if none of the above conditions are met then evaluate the target and the curent nodes value and see if it is greater then the target
    // if it is move right and call the function again
    if (target > currentNode.value){
      traverse(currentNode.right);
    } //if it is less then then go left
    else if (target < currentNode.value){
      traverse(currentNode.left);
    }
  }
  //kick off the function traverse with a function call passing the head node as an arguament and examining the target
  traverse(this.head);
  return check;
}

  //function to delete (will call on search function) passed the value to delete
BinarySearchTree.prototype.delete = function(deleteValue){
  //a temp holding array to hold all nodes 
  var temp = [];

  // this function is used to round up all nodes in the tree except for the node to be deleted
  //yes - a linear O(n) operation - have to keep this tree balanced 
  var roundUp = function(currentNode){
    //base case to see if the node we have reached is null return out.
    if (currentNode === null){
      return;
    } else {
      //otherwise push the node object to the array
      if (currentNode.value !== deleteValue){
        temp.push(currentNode.value);
      }
    }
    //do so recursively for right and left until you reach the end for each - it will return up the stack. 
    roundUp(currentNode.right);
    roundUp(currentNode.left);
  }
  //start the round up function with the head
  roundUp(this.head);

  //if the new array holding all the nodes are the same size as the original Bi Tree then it was not found all values were pushed in
  // no values met the criteria of if (currentNode.value !== deleteValue)
  if (temp.length === this.size){
    console.log('deleteValue: ' + deleteValue + ' was not found in binary search tree');
    return;
  }

  // create temporary tree - YEP we create a new bianary search tree
  //indeed this goes through all existing nodes
  var tempTree = new BinarySearchTree();

  // iterate through all of the found values that weren't the target
  // and insert them into the new tree O(n)
  temp.forEach(function(value){
    tempTree.insert(value);
  })

  // reinitialize the head as the tempTree head
  this.head = tempTree.head;

  // reduce size of tree by one (the one we deleted)
  this.size--;
  
  console.log(deleteValue + ' has been deleted from the tree');
}

var sapling = new BinarySearchTree();

sapling.insert(100);
sapling.insert(50);
sapling.insert(150);
sapling.insert(200);
sapling.insert(125);
sapling.insert(75);
sapling.insert(25);
sapling.insert(30);
sapling.insert(20);

console.log(sapling.head)
sapling.delete(50);
console.log(sapling.head)
