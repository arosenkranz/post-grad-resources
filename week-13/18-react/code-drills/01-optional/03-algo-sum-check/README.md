# Algorithms

## Sum Check

### Instructions

`sumCheck` takes in a positive integer and an array of positive integers as the argument and returns true if there are two distinct numbers in the array that add up to the first argument.

* Each element within the array can only be used once, so unless a number is repeated, you can't use it again

```javascript
// Would be false because no combination of numbers equals 8 since 4 only appears once
sumCheck(8, [2, 4, 7])

// Would be true because 3 + 3 = 6 and 3 appears twice so we can use it again
sumCheck(6, [1, 3, 5, 3, 10])
```

* Solve this problem in O(n) time
