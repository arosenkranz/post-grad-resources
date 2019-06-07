# Palindrome Possibility Checker - Medium


### Ask the interviewee to write a function that when given a string as an argument returns whether or not the string could be rearranged into a palindrome

* A palindrome is a word that reads the same both forwards and backwards
  * such as `noon`, `dad`, or `racecar`

* If the function is passed a string that can be rearranged to be a palindrome, it should return true
  > possiblePalindrome("add") === true since "dad" is a palindrome

* If the function is passed a string that can not be a palindrome, it should return false
  > possiblePalindrome("cavern") === false since it can't be rearranged into a palindrome

* Assume that the strings are completely lowercase and there are no spaces


### Conclusion

* If the interviewee sorted the string and then iterated through it, ask them what the time complexity of their function is.
  * The time complexity should be at least O(n*log(n)) since they're sorting an array
  * Ask them to solve this problem in O(n) time

* If the interviewee iterates through the string without using an object, make sure they are handling repeated characters such as "aaaaabb"
  * Ask them what the time complexity of their function is
    * Most likely their time complexity is at least O(n^2) since they'll be iterating through the string again for each character
  * Ask them to solve this problem in O(n) time

### Hints

1. Try to start with simple cases like "aab", "aabb", "aabc", and "abcc"
  * What do the strings that fail have in common?
  * What do the strings that success have in common?

2. What can you deduce about the properties of the characters in a palindrome given the palindrome's properties?
  * If all we know about a palindrome is that it starts with "a", what is the minimum number of "a"s that palindrome must contain?
  * If we know a palindrome has a single "b", can it still be a palindrome if we add another "b"?
  * If we know a palindrome has only a single "b" and no "c"s, can it still be a palindrome if we add a single "c"?
  * ANSWER: Only one letter in a palindrome can be unpaired.

3. If the interviewee is struggling with handling repeated characters, 