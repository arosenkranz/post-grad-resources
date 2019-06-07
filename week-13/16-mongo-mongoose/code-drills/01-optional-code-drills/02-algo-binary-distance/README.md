# Algorithms

## Binary Distance

### Instructions

In this activity, you will write a function 'binaryDistance` that takes a positive integer as an argument and finds the longest distance between 1's in the bitwise complement of the binary representation of that number. 

* You will have to convert that number to binary, so you can create a helper function using the code from the previous activity
    * If you had trouble with the previous activity, there is a working helper function inside the `challenge-hint.js` file for binary conversion

* A bitwise complement of a binary number is simply a binary number with all the 1s and 0s flipped, so that "01101110" becomes "10010001"

* `binaryDistance` will take the bitwise complement of the binary number and find the longest distance between 1s in that bitwise complement
    * For example, "01101110" has a bitwise complement of "10010001" and then you will find the longest distance between 1s in the complement which is 4
    * Consecutive 1s have a distance of 1 so the `binaryDistance` will be 0 only when the bitwise complement doesn't have more than a single 1 in it.
        * "1000" has a distance of 0
        * "11" has a distance of 1
