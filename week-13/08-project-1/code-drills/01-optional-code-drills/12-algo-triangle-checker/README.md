# Algorithms

## Triangle Checker

### Instructions

_Given an array containing the lengths of the three sides of a triangle, return the string "Equilateral Triangle", "Isoceles Triangle", or "Scalene Triangle" depending upon the type of triangle represented by those three sides. If a triangle fits the criteria for two of the named triangle types, return an array containing those triangle types._

* An Equilateral Triangle is one where all three sides are equal in length
* An Isoceles Triangle is one where two of the three sides are equal in length
* A Scalene Triangle is one where all the sides are different lengths

for example

```javascript
checkTriangle([3, 3, 3])
// should return
["Equilateral Triangle", "Isoceles Triangle"]
```

and

```javascript
checkTriangle([4, 8, 5])
// should return
"Scalene Triangle"
```

* Hint: Do not overcomplicate the logic for this one! Keep in mind the scope of the ask.