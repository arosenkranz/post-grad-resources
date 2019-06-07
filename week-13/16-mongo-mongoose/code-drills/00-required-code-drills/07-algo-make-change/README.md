# Algorithms

## Make Change

### Instructions

You will be writing a `makeChange` function that, when given an integer as an argument representing a number of cents, returns an object containing the number of quarters, dimes, nickels, and pennies required to make that much money.

* The argument for `makeChange` will be a positive integer representing the value in number of cents

* `makeChange` will return an object where they keys are `quarters`, `dimes`, `nickels`, `pennies` and the values for those keys are the number of each to create the argument value in the fewest coins possible.
    * Quarters are worth 25 cents each
    * Dimes are worth 10 cents each
    * Nickels are worth 5 cents each
    * Pennies are worth 1 cent each

```javascript

makeChange(219);
// Returns
{
  "quarters": 8,
  "dimes": 1,
  "nickels": 1,
  "pennies": 4
}

```
