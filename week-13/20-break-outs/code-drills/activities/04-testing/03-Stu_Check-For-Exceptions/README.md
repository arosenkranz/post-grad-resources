# Check for Exceptions
(5-7 mins)
In this activity we will write a test to check if an error was thrown by a function.

## Instructions

* Update the `multiply` function so that it throws an error if either `x` or `y` is not a number.

* Inside of the `assertThrows` function, wrap the call to `func` with a try/catch block. If an error is thrown, log the error and set `threw` to true. At the end of the function, return `threw`.

* Ensure everything works by logging the result of `assertThrows` when passed in `multiply` and any two numbers. `false` should be printed to the console, meaning no error was thrown.

* Then, log the result of `assertThrows` when passed in `multiply` with any number number and any string. An error should be logged, followed by `true`, meaning an error was thrown and caught.

