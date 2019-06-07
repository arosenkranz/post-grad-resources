# Reverse A Linked List in Place


### Ask the interviewee to write a method for a Linked List class that reverses the order of the Linked List without creating any new nodes

* The Node class is provided, it keeps track of a value and the next node in the list:

```javascript
class Node {
  constructor(value = null){
    this.value = value;
    this.next = null;
  }
}
```

* The LinkedList class only keeps track of the head of the list.
```javascript
class LinkedList {
  constructor() {
    this.head = null;
  }
  reverse() {
    // Fill in this method
  }
```

* This reversal should be in place, meaning that there shouldn't be any new Nodes being created


### Conclusion

* Check to make sure the interviewee remembered to update the head of the list

* If the interviewee wrote the method with with a time complexity greater than O(n), ask them what the time complexity of their method is.
  * Have them complete the method in O(n) time

* If the interviewee iterated through the linked list more than once, let them know that this method is possible with only one iteration
  * Have them complete the method with only one iteration through the list


### Hint

1. Have the interviewee draw out a linked list and then step through everything they need to do in order to complete the method
  * `currentNode` should point to the `previousNode` and the `nextNode` should point to the `currentNode`

2. Since they are doing this in place, which pointers do they need to update?
  * The `next` pointer of each Node

3. Which pointers do they have access to during their iteration through the linked list?
  * They can easily track the `previousNode` and the `currentNode`
