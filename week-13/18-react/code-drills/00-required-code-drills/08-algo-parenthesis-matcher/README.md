# React
## Parenthesis Matcher

### Instructions

 Write a function `matchParenthesis` that, when given a string containing parentheticals and the index of an opening parenthesis, returns the index of the corresponding closing parenthesis.

* There might be other matching parentheticals nested within the one you're trying to find the end parenthesis for
  * If the first index you're given is not a parenthesis, return null
  * If there is no matching parenthesis, return null

* For example, given a string "apple (banana grape (pineapple)) orange" and the index 6, `matchParenthesis` should return 31 because even though the parenthesis at index 30 is a closing parenthesis, it closes a different parenthesis
