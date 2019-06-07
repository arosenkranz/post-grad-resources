# Algorithms

## Convert to Binary

### Instructions

You'll encounter people referring to binary numbers fairly often as you delve into the world of coding. Normally we deal with numbers in base 10. We count from 0 to 9 and for the next number, we add a new digit to the front and reset the right-most digit back to 0. It's much the same in another base, we count from 0 to one less than the number we're based in before the numbers reset. Binary is simply base two: we count from 0 to 1 before we reset.

* In this way, we can represent any number in binary because there will always be a combination of powers of 2 that equals any number since 2^0 is 1 which lets us make odd numbers.

* Binary is read much like a normal number with the right most digit representing n^0, the second right most digit being n^1, the third right most digit being n^2, and so on where n is 2

* In this activity, you will be tasked with converting a number from its decimal representation to its binary representation.
    * Because javascript inherently uses base ten for its math, you will have to store the binary representation as a string.

* Write a function `toBinary` that takes in a positive integer as the argument and returns that number's binary representation as a string.

* If you are having difficulty with understanding the algorithm for conversion, there's a walkthrough of the process here [https://medium.com/@jamesjefferyuk/how-to-convert-decimal-to-binary-7256d7d82b07](https://medium.com/@jamesjefferyuk/how-to-convert-decimal-to-binary-7256d7d82b07)
