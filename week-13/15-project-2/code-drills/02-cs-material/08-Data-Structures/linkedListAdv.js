// Using pseudoclassical instantiation for Node constructor function
function Node(val){
  this.value = val;
  this.next = null;
}

// Using pseudoclassical instantiation for LinkedList constructor function
function LinkedList(){
  //each list will have a head node
  this.head = null;
  //each list will have a tail node - the caboose in our train
  this.tail = null;
  //with each new node we will track a count
  this.length = 0;
}
LinkedList.prototype.printHeadTail = function(){
  // use insert method to insert a new node after the tail node
  //the insert method will instantiate a new node object with the value
  var info = [this.head,this.tail]
  return info
}

// Add a node at the very end of the linked list
LinkedList.prototype.append = function(val){
  // use insert method to insert a new node after the tail node
  //the insert method will instantiate a new node object with the value
  this.insert(val, this.tail);
}

// Insert a node 
// If prevNode is undefined or null, then assume insert in the front of linked list
LinkedList.prototype.insert = function(val, prevNode){
  //create a new node with the value passed
  var node = new Node(val);
  
  if(!prevNode){ // if there was no value passed as an argument to the prevNode parameter
    if(!this.head){   //if head is null
      this.tail = node; //set the tail to be the new node
    } else { //if head is not null then...
      node.next = this.head; //set the new node's 'next' field to be set to the heads next which which was null or pointed to another object
    }
    this.head = node; // if the head was null then set the head node to be the new node // this is true if we are prepending - creating a node to replace head (passing no prevNode)
    //yep - the head and the tail of the LL will both be pointing to the same object - it's only lonly node. 
  } else { //if there was a value passed as an argument to the prevNode parameter
    node.next = prevNode.next; //the new node's field of 'next' will be now set to the prevNode's 'next' value
    prevNode.next = node; //now set the previous Node's 'next' field to be set to the new node
    // if insert into end of list, then update tail node
    if(this.tail === prevNode){ // if the prev Node was the last Node (same exact object) then set the LL's tail to be the new Node
      this.tail = node;
    }
  }
  this.length++; //yipee we added a new node increase the numbe of nodes on the LL
}

// Remove the first node that matches the input value
LinkedList.prototype.delete = function(val){
  // Use find method to get the previous and current node to delete
  var findNodes = this.find(val);

  if(findNodes){   //find returns an array of two things: [prevNode, currentNode] or false if it is not found
    var prevNode = findNodes[0]; //wow - so when we delete a node we have to find it and when we do - we are given the prev node too! 
    var currentNode = findNodes[1];
  } //if returned false 
  else {
    return "Input value was not found."
  }

  // Reposition the tail and head nodes, then reassign the previous
  // node's pointer to the node after the current node to delete
  // let garbage collection handle the actual removal of memory - yep this little deleted node is off in memory space unreferneced 
  //sad farley face
  if(this.tail === currentNode){
    this.tail = prevNode;
  }
  if(prevNode === null){
    this.head = currentNode.next;
  } else {
    prevNode.next = currentNode.next;
  }
  this.length--;
}

  // This method checks if a val exists in the linked list
  // uses the find helper method
LinkedList.prototype.contains = function(val){
  return !!this.find(val); //if single bang evaluates the truthyness the what does !! do? Reverses it. NOT NOT ! ! - I just wanted a true or a false
}

  // Searched for a specific value and returns the previous and current
  // node if value exists in list
LinkedList.prototype.find = function(val){
  var prevNode = null;
  var currentNode = this.head; //start it off with the head while looking for a particular value
  while(currentNode){
    if(currentNode.value === val){
      return [prevNode, currentNode]; ///if we found it return the previous and current Node BTW - when we start out with Head prev Value will be null
    }
    prevNode = currentNode; //if we did not find the value at the head then we first start by assinging the current node to prevode
    currentNode = currentNode.next; //and next node to currentNode.Next
  }//and the cycle continues until we reach the end of the train and the current Node's next value is null
  // if that occurs we return false :( sad farley face. 
  return false;
}

//Test cases
var list = new LinkedList();

console.log(list.length); // 0
// console.log(list.insert(1)); 
// console.log(list.printHeadTail()); 
console.log(list.append(10));
console.log(list.length); // 1
console.log(list.contains(10)); // True
console.log(list.contains(5)); // False

console.log(list.append(5)); //
console.log(list.find(5)); // [node10, node5]
console.log(list.find(8)); // False
console.log(list.find(10)); // [null, node10]

console.log(list.append(15));

list.delete(15); 

console.log(list.contains(15)); // False
console.log(list.tail); // Node5

list.delete(10);

console.log(list.head) // Node5
console.log(list.delete(5));
console.log(list.head) // null
console.log(list.tail) // null
console.log(list.length) // 0

list.append(20);
list.append(30);
list.append(40);
list.append(50);
list.append(60);
list.append(70);
list.append(80);
list.append(90);
list.append(100);
list.append(110);
list.append(120);
list.append(130);

console.log(list.length)//12
console.log(list.find(20));
console.log(list.find(30));
console.log(list.find(40));
console.log(list.find(50));

console.log(list.find(60));
list.delete(60);
console.log(list.find(60));//false

console.log(list.find(70));
console.log(list.find(80));
console.log(list.find(90));
console.log(list.find(100));
console.log(list.find(110));
console.log(list.find(120));
console.log(list.find(130));
console.log(list.find(140));//false






