# Algorithm

## Dynamic Data Analysis

### Instructions

Write a new class `DataTracker` that returns statistial analysis for data it's keeping track of.

* Write an `insert` method that adds data to `DataTracker`
  * `DataTracker` doesn't necessarily have to keep track of the individual values, we only need to know the values that the methods would return
  * The newly inserted data should affect the values the methods would return

* Add a `getMean` method that returns the arithmetic mean of the data that `DataTracker` is keeping track of.
  * The mean of a set of data is the average value of all the data

* Add a `getMin` method that returns the minimum value that `DataTracker` is keeping track of.

* Add a `getMax` method that returns the maximum value that `DataTracker` is keeping track of.

* Add a `getMode` method that returns the mode of the data that `DataTracker` is keeping track of.
  * The mode of a set of data is the data values that appear the most often in the dataset
  * If multiple data values are tied, return an array with all of the values
  * You can return an array with one element if there's only one mode

* BONUS: `insert`, `mean`, `min`, `max`, and `mode` should all run in constant time O(1)