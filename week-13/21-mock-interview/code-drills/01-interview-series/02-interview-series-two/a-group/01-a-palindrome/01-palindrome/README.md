# Palindrome Checker - Easy


### Ask the interviewee to write a function that takes in a string and checks whether the string is a valid palindrome

* A palindrome is a word that reads the same both forwards and backwards
  * such as `noon`, `dad`, or `racecar`

* If the function is passed a string that is a palindrome, it should return true
  > palindromeCheck("kayak") === true

* If the function is passed a string that is not a palindrome, it should return false
  > palindromeCheck("banana") === false

* Assume that the strings are completely lowercase and there are no spaces

### Conclusion

* At the end, If the interviewee writes the function using `split` and the built in array methods ("Cheeky Solution" in `solution.js`), ask them to solve the function without them
  * This activity checks the interviewee's ability to iterate through strings, not their knowledge of built in methods

* At the end, If the interviewee iterates through the entire string, ask them if they need to iterate through the entire string.
  * How much would they need to iterate through?


### Hints

1. Instead of solving for the abstract case, solve to handle a couple simple examples such as `noon` and `racecar`
  * Have them step through how they would check the strings
  * After they've looked at the simple cases, see if they can expand that logic to handle more general cases
  
2. If the only thing we know about the string is that the first letter is "a", what needs to be true for the string to have the possibility of being a valid palindrome?
  * Can the interviewee expand this logic for characters other than "a"
  * Answer: The last character has to be the same as the first character
  