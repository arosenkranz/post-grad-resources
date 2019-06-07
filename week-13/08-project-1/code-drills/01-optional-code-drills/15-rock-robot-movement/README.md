# Algorithms

## Pretty much AI

### Instructions

A robot starts at the cooridnates [0,0]. The robot can move up, down, left and right.

The first number in the robot's coordinates, represents up and down.

The second number represents left and right.

You will be given a string containing any possible mixture of the following characters: `U` (up), `D` (down), `L` (left), `R` (right).

- `U` will add 1. Given one `U`, your robot will move from [0,0] to [1,0]
- `D` will subtract 1. Given one `D`, your robot will move from [0,0] to [-1,0]
- `L` will subtract 1. Given one `L`, your robot will move from [0,0] to [0,-1]
- `R` will add 1. Given one `R`, your robot will move from [0,0] to [0,1]

Create a function that returns true if the robot ends where it started, that is to say [0,0]. Return false if the robot DOES NOT return back to the original coordinates. Finally, return "invalid move(s)" if any of the given characters is NOT `U`, `D`, `L` or `R`.

### Example

Given "UUURDLURLDDRDLLLLRRUUDDDRLDRURR", your function should return false, since the robot ends up at [-1,2].

Meanwhile, this one "UUURDLURLDDRDLLLLRRUUDDDRLRU" should return true (1 `D` and 2 `U`s were removed from the previous string).