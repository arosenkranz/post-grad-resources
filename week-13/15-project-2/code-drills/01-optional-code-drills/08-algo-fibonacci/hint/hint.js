// For fibonacci normal, remember a couple of things:
// 1. The number 0 and 1 are taken for granted, and do not really fit into the sequence.
// 2. Each finbonacci number is the sum of the two numbers before it

// For the recursive solution:
// 1. Recursion at its most basic level means a function invoked within itself.
// 2. You may return a function
// 3. When you return a function being called recursively, the output of those functions add up.
// 4. Don't forget that recursion needs a place to stop. Otherwise, the process will run forever until manually stopped.


// TESTS
console.log(fib(7))
console.log(fib(0))

console.log(fib1(7))
console.log(fib1(0))