# INTERVIEW QUESTIONS

## Kth-node of a linked-list

## Instructions
Given a linked-list, return a pointer to the k-th node of the linked-list

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
    this.tail = null;
  }
}
```

## Example
Test Case 1: (20)->(30)->(40)->(50)->(60)->(70)->(80)->(90)->(100)->(110)->(120)->(130) , k=5
Expected Output: (60)->(70)->(80)->(90)->(100)->(110)->(120)->(130)

## Optimal Time
O(n)

## Bonus

## Instructions
Find Kth-To-The-Last node in the linked list

## Optimal Time
O(n)

## Example
Test Case 1: (20)->(30)->(40)->(50)->(60)->(70)->(80)->(90)->(100)->(110)->(120)->(130) , k=5
Expected Output: (90)->(100)->(110)->(120)->(130)
