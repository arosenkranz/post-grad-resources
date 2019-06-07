# Algorithms

## Character Distance

_Are we in a long distance relationship?_

### Instructions

Given a string and a character, create a function that returns the minimum distance between each character in the first argument and the single given character. 

### Example
Given "ilovetowritecode" and "o", your algorithm should return [2,1,0,1,2,1,0,1,2,3,3,2,1,0,1,2]

In this example, the character "i" is 2 spaces away from the nearest "o". Notice that "i" is the first character in the string, and it's corresponding 2 (distance from the nearest "o") is also the first element in the array.

"l" is 1 space away from the nearest "o". Notice that "l" is the second character in the string, and it's corresponding 1 (distance from the nearest "o") is also the second element in the array.

And so on...