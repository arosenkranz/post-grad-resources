# Algorithm

## Bracket Checker

### Instructions
`checkBracket` takes in a string and returns true if the configuration of brackets within is valid.

* There will be three different types of brackets to check for:
  1. Parenthesis: `(` and `)`
  2. Curly: `{` and `}`
  3. Hard: `[` and `]`

* Each opening bracket must be paired with a closing bracket
  * Closing brackets cannot be used before an opening bracket
  > "( ) } {" is not valid
  * Nested brackets must be fully closed before their parents are closed
  > "( [ ) ]" is not valid
  