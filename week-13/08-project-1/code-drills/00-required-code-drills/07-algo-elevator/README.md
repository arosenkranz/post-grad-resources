# Algorithms

## What floor am I on???

### Instructions

In this exercise you will be given a string containing ONLY the following characters: `v` and `^`.

The `v` means the elevator will go down one floor. The `^` means the elevator will go up one floor. Assume the elevator starts on floor 0.

Given a string in this format, create a function that returns the floor the elevator will land at. 

If the elevator goes lower than floor zero, return a string informing the user that the elevator has, unfortunately, crashed.

### Example

Given the following string: "^^^vv^^^v^^"

Your function should return 5. The elevator goes up to floor 3, back down two floors to 1, up three back to 4, down one to 3 and finally back up two to 5.


### Bonus
Create a condition that returns a string which says the function is unable to take in the input if the input includes any character OTHER than `v` or `^`.