# Efficiency

## Practice Pt.3 - Hidden Costs of Methods

Be careful when using built in methods because a lot of them do not execute in constant time. There is a hidden cost to calling on these functions that's not immediately apparently. For example, the `sort` method for arrays executes in O(n*log(n)) time and the `includes` method executes in O(n) time.

### Instructions

* For each of the functions inside `challenge-prompt.js`, give the time complexity for each function in the indicated area and give a quick explanation of how you arrived at that time complexity.
    * You will have to look up the time complexities of the included methods.
    * Find the time complexity of each method used.

* Keep in mind that even if there's an iteration, if it's iterating through a constant size array, it's not going to increase the time complexity
