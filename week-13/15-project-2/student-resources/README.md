[Return to Home](../../../README.md)

<hr>

# Student Resources :computer:

## Table of Contents
01. [Audio Resources](#audio-resources)
02. [Computer Science Introduction](#computer-science-introduction)
03. [Things to research](#things-to-research)
04. [Computer Science / Algo Selection Sort](#computer-science--algo-selection-sort)
05. [Helpful Links](#helpful-links)
06. [Whiteboarding & Interviewing](#whiteboarding-and-Interviews)



## Audio Resources
[Back to top](#student-resources)

01. [Podcasts](./podcasts.md)

## Computer Science Introduction
[Back to top](#student-resources)

 1:1 Mock interviews, White Boarding, Interview Practice

## Things to research

* Data Structuring
* Data Manipulation
* String Manipulation
* Utilizing Objects
* Array Iteration
* Alternate Solutions
* Brute Force and Efficiency

<hr>

* Binary Search
* Efficiency
* Time Complexity
* Time Complexity of built in methods

<hr>

* Sorting
* Stacks
* Queue

<hr>

* Nodes
* LinkedList
* Stacks
* Queues

## Computer Science / Algo Selection Sort
[Back to top](#student-resources)

Insertion Sort, Quick Sort, Stacks, Queue
Explore concepts related to Objects, Maps, Hashing Functions and LinkedList

* Object manipulation
* Modulo
* Data structures
* Recursion
* Binary Search Trees
* Sorting
* Time Complexity

<hr>

## Helpful Links
[Back to top](#student-resources)

* [Interviewbit](https://www.interviewbit.com/)
* [Harvard CS50](https://www.edx.org/course/introduction-computer-science-harvardx-cs50x)
* [Princeton COS126](https://www.edx.org/course/introduction-computer-science-harvardx-cs50x)
* [visualgo](https://visualgo.net/en)
* [Sorting w/ Toptal](https://www.toptal.com/developers/sorting-algorithms/)
* [There's more than one way to do it](https://en.wikipedia.org/wiki/There%27s_more_than_one_way_to_do_it)

* [Sorting Algorithms Animations](https://www.toptal.com/developers/sorting-algorithms)
* [Searching Sorted List](https://www.cs.usfca.edu/~galles/visualization/Search.html)
* [JavaScript Algorithms and Data Structures](https://github.com/trekhleb/javascript-algorithms)

<hr>


### Whiteboarding and Interviews

[Back to top](#student-resources)

* [Interviewbit](https://www.interviewbit.com/)
* [Harvard CS50](https://www.edx.org/course/introduction-computer-science-harvardx-cs50x)
* [Princeton COS126](https://www.edx.org/course/introduction-computer-science-harvardx-cs50x)
* [visualgo](https://visualgo.net/en)
* [Sorting w/ Toptal](https://www.toptal.com/developers/sorting-algorithms/)
* [There's more than one way to do it](https://en.wikipedia.org/wiki/There%27s_more_than_one_way_to_do_it)

* [Sorting Algorithms Animations](https://www.toptal.com/developers/sorting-algorithms)
* [Searching Sorted List](https://www.cs.usfca.edu/~galles/visualization/Search.html)
* [JavaScript Algorithms and Data Structures](https://github.com/trekhleb/javascript-algorithms)


### How What Why


#### LinkedList Vs. Array

*_When to use a linked list over an array/array list?_*

From here: https://stackoverflow.com/questions/393556/when-to-use-a-linked-list-over-an-array-array-list

*Linked lists are preferable over arrays when:*

a) you need constant-time insertions/deletions from the list (such as in real-time computing where time predictability is absolutely critical)

b) you don’t know how many items will be in the list. With arrays, you may need to re-declare and copy memory if the array grows too big

c) you don’t need random access to any elements

d) you want to be able to insert items in the middle of the list (such as a priority queue)

*Arrays are preferable when:*

a) you need indexed/random access to elements

b) you know the number of elements in the array ahead of time so that you can allocate the correct amount of memory for the array

c) you need speed when iterating through all the elements in sequence. You can use pointer math on the array to access each element, whereas you need to lookup the node based on the pointer for each element in linked list, which may result in page faults which may result in performance hits.

d) memory is a concern. Filled arrays take up less memory than linked lists. Each element in the array is just the data. Each linked list node requires the data as well as one (or more) pointers to the other elements in the linked list.

Array Lists (like those in .Net) give you the benefits of arrays, but dynamically allocate resources for you so that you don’t need to worry too much about list size and you can delete items at any index without any effort or re-shuffling elements around. Performance-wise, arraylists are slower than raw arrays.

#### BST

*_What are some practical applications of binary search trees?_*

From here: https://www.quora.com/What-are-some-practical-applications-of-binary-search-trees/answer/Eugene-Yarovoi?srid=pJ7U

Binary search trees are collections that can efficiently maintain a dynamically changing dataset in sorted order, for some “sortable” type.*

Having a sorted array is useful for many tasks because it enables binary search to be used to efficiently locate elements. The problem with a sorted array is that elements can’t be inserted and removed efficiently.

The binary search tree is a different way of structuring data so that it can still be binary searched (or a very similar procedure can be used), but it’s easier to add and remove elements. Instead of just storing the elements contiguously from least to greatest, the data is maintained in many separate chunks, making adding an element a matter of adding a new chunk of memory and linking it to existing chunks.

*Binary search trees support everything you can get from a sorted array:* efficient search, in-order forward/backwards traversal from any given element, predecessor /successor element search, and max /min queries, with the added benefit of efficient inserts and deletes. With a self-balancing binary search tree (BST), *all of the above run in logarithmic time.*