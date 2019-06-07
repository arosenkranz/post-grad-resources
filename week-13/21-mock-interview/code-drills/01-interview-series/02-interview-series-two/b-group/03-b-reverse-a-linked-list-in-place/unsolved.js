// Reverse Linked List in Place


function Node(val){
  this.value = val;
  this.next = null;
}

// Using pseudoclassical instantiation for LinkedList constructor function
function LinkedList(){
  //each list will have a head node
  this.head = null;

}

var lList = new LinkedList();
lList.head = new Node(10);
lList.head.next= new Node(20)
lList.head.next.next= new Node(30)
lList.head.next.next.next= new Node(40)


// console.log(lList.reverse())