# Algorithms

## Diverse Distribution

### Instructions

_Given an array of numbers where each number is the id of a different book, write a function that splits the books evenly into two piles and returns the maximum number of unique books that can be in one of the piles._

* Each unique number is an id of a book, but we can have multiple copies of the same book.

* The two piles must contain the same number of books. Discard the remaining book if there is one.

* You do not have to maximize the book diversity for both piles, only one of them.

* For example: 

> [1, 1, 2, 3, 4, 4, 4]

Returns 3 because while there are 4 unique books in the array, splitting them into even piles means there's a maximum of 3 books per pile.

> [1, 1, 1, 2, 2, 2]

Returns 2 because there can be at most 2 unique books in an even split of the array.
