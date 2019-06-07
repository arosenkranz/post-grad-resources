# Computer Science

## Making Stacks (F.I.F.O) out of Queues (L.I.F.O)

## Instructions

Create a stack using only queues

Assume you are given a queue constructor with the the following methods:

- add O(1)
- remove O(n)
- peek O(1)

Create a new stack constructor with the same three methods using the queue to store your data

- add
- remove
- peek

You can only use the methods of the queue constructor to manipulate your data. Do not use any other data structures for this activity.

## Optimal Time
O(n^2)

# Hint

* In a queue the first element to enter is the first element to leave the queue

* In a stack the last element to enter is the first element to leave the stack

* If we add an element to an empty queue, it becomes the first element in the queue, in other words, the first one out...