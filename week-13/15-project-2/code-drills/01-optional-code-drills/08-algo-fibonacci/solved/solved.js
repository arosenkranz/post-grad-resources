function fib(n) {
  var arr = [0, 1, 1]

  for (var i = 2 ; i < n ; i++) {
    arr.push(arr[i - 1] + arr[i])
  }

  return arr[n]
}
// (O)2^n
function fib1(n) {
  if (n < 2) {
    // When we call this recursively we'll get the sum of n reaching 1 (i.e. < 2) from every iteration of this recursive call
    return n;
  }
  //Fib gets called 2 every time it is called once 🤯 
  return fib1(n - 1) + fib1(n - 2);
}

console.log(fib(7))
console.log(fib(0))

console.log(fib1(7))
console.log(fib1(0))

// WHAT THE HELL HAPPENED?
// This can be a tough thing for one to wrap his/her head around. It seems like there isn't much going on here, but there's actually a lot happening... too much. Every time we call the fib1 function, we're calling it an additional two times. If you draw a diagram of what's happening, it actually looks somewhat like a binary search tree.

// Each function branches of into two additional function calls. This happens for each branch until it hits 1. What is being returned to us is the sum of all those function calls. All those 1s being returned add up to the nth number in the fibonacci sequence. 

// This is a terrible approach to the problem, but demonstrates a good understanding of recursion. Because we call this function twice for every one call, this solution grows exponentially. For every one number n increases, the function stack doubles. 
