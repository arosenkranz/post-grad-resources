# Efficiency

## Practice Pt.1

Each line of code you write takes time to run even if that time is relatively miniscule. However, when we have code that runs a varying amount of times depending on the size of the input, the time it takes to run that code can get out of hand relatively quickly.

Time Complexity in terms of Big O notation is a measure of how your function scales when the number of inputs approaches infinity. For example, if your code iterates through the input once, then it is O(n) because it scales linearly in run time with the number of inputs. If your code iterates through the input for ever element within the input, it will be O(n^2) because the code you have inside the nested for loop will run n times for every element and there are n elements, thus making your code scale quadratically with the size of the input.

### Instructions

* For each of the functions inside `challenge-prompt.js`, give the time complexity for each function in the indicated area and give a quick explanation of how you arrived at that time complexity.