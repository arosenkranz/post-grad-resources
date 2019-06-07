# Algos 

## 3's A PaRTaY

### Instructions 

Given a string of characters, return an array of arrays.

You are looking for any instance in the given string where a character is repeated three or more times. Any time that is the case, you need to store the starting index of this substring, and its ending index. These will make up the sub arrays of the larger array you'll return. This means that you'll return an array with 0 to n sub arrays, each sub array containing exactly 2 values.

### Example
Imagine you are given the following string:
`"aabbbccdddddeefggggg"`

You will need to return `[[2,4], [7,11], [15,19]]`.

Notice that only b, d and g are the characters that are repeated multiple times. The first b is at index 2, the last at index 4. 

The first d is at index 7, the last at index 11.

The first g is at index 15, the last at index 19.

`Create an algorithm that returns the opening and closing indices of character sequences longer than 2`.