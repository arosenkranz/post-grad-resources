# INTERVIEW QUESTIONS

## `Caesar Cipher`

## Instructions

Create a function `cipher` that takes two arguments:
1. a string of letters, and 
2. an integer.

The `cipher` function should encrypt the string by shifting each letter in the *string* by *x* places the alphabet, where *x* is the *integer* given. For example, if the first letter of the string is **"a"** and the integer given is **3**, we would convert **"a"** to the letter that comes 3 places later in the alphabet, so **"a"** becomes **"d"**.

If shifting the letter would reach the end of the alphabet, then wrap around and start at the beginning of the alphabet. For example, if a given letter is **"z"** and the required offset is 1, we would land at **"a"**.

You can assume that the string will contain only letters.

## Bonus Challenges
- Allow for spaces and punctuations
- Maintain case sensitivity
- Think about other types of cyphers you could create. For example, reversing the alphabet's order or randomizing what letter corresponds to another letter

## Example
```javascript
function cipher(str, offset){
	//YOUR CODE HERE
}

// Initial String
var str = "the name of my kitten is dog";

// Run the cipher function that we will have defined.
cipher(str, 2);

```

Expected Output: 

"vjg pcog qh oa mkvvgp ku fqi"

<hr>

#### Additional Examples:

Test Case 1: "hey man", 3  
Expected Output: "khb pdq"

Test Case 2: "i am hungry", 9  
Expected Output: "r jv qdwpah"


## Optimal Time
O(n)