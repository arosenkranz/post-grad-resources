# Algorithms

## Compressor

Your job in this algorithm is to create a function which will return a compressed string. If the given string contains more than one instance of the same character, the compressed string should contain the repeated character, followed by the number of times it was repeated. The compressed string should never have the same character more than once.

### Example 

Given the string "hhhkkkkkkttttttttt", our function should return h3k6t9.

- h3 because there are 3 "h"s in the string
- k6 because there are 6 "k"s in the string
- t9 because there are 9 "t"s in the string

Note: the characters do not have to be in order. The string "hrkjqehvewqjhvheqvwjcgfwegiuf" should return "h4r1k1j3q3e4v3w3c1g2f2i1u1"

### Instructions
Create a function which takes a string as an argument, and compress that string as desribed above.