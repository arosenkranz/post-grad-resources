# Algorithms

## New developments in the city

San Francisco's mayor has been put in a tough spot. On the one hand she's being pressured to grow and develop the city. On the other, she is being asked to preserve the old look and feel of the city.

The mayor relies heavily on programmers like us. She's come up with a plan. She's commisiomed YOU to come up with a program that tells her the maximum height you can increase the buildings in the city while still maintaining the skyline.

### Instructions
Given a square matrix (an array of arrays, the amount of subarrays and elements within each one being equal), return the max height you can increase all the buildings while maintaining the sky line.

The skyline is defined by the tallest buildings (the highest value in a row or column in the matrix) viewed from "north" "east" "west" or "south".

### Example 
Imagine you are given the following matrix:
```
[ 
  [3, 0, 8, 4], 
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0] 
]

```

If we look from the "north", we see the tallest buildings are 9 (arr[2][0]), 4 (arr[1][1]), 8 (arr[0][2]), and 7 (arr[1][3]).

As an example, let's change the first row to fit the new skyline. The 3 at arr[0][0] becomes a 7. To keep the nine in view, we could make it an 8. But then if looked from the "west" it would overtake the other 8 to its right. Therefore, it becomes a 7.

The 0 at arr[0][1] becomes a 3. This keeps it smaller than the four in its column (the four is the tallest number in that column). The 3 is still smaller than 8 (the tallest building in its row), so it remains a 3.

8 at arr[0][2] is already the tallest building in its row and column. Therefore it does not change.

Finally, the 4 at arr[0][3] becomes a 6. That ensures that it is smaller than both the 8 in its row, and the 7 in its column.


The completed matrix would look like this:

```
[ 
  [7, 3, 8, 6],
  [6, 4, 6, 7],
  [9, 3, 7, 6],
  [2, 3, 2, 2] 
]
```

However, that is not what we want to return. We want to return 24, which is the sum of how much all the non-tallest buildings were increased.

You will need to keep track of how much each building grew in the new plans for the city, and return the sum of that growth.

Don't let the mayor down. Give her your algorithm in prompt.js!

You have two options... you can proceed to prompt.js, or go to challenge/prompt.js.

This is quite a difficult problem. In prompt.js, you'll find some pseudo code to guide you through the problem.

In challenge/prompt.js, you are given nothing so that you may attempt to solve the problem completely independently.