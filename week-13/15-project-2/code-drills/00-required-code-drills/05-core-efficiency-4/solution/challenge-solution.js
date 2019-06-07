// Efficiency 4



// `checkPrime` checks if the integer passed in as an argument is
// a prime number, meaning it is not divisible except by 1 and itself.


// -------------------- Question 1 --------------------
//
// Solve this problem in O(n) time.
function nCheckPrime(num) {
  // -------------------- Your Code Here --------------------

  for (var i=2; i<num; i++) {
    if (num % i ==0)
      return false;
  }
  return true;

  // -------------------- End Code Area ---------------------
}



// -------------------- Question 2 --------------------
//
// Solve this problem in O(sqrt(n)) time.
function logCheckPrime(num) {
  // -------------------- Your Code Here --------------------

  // Because multiplication is commutative, we only need to check
  // until `i`^2 > `num` because past that point we will be checking
  // repeated numbers. For example, 15 is divisibly by 5, but we would
  // have already checked 3.
  for (var i=2; (i*i)<=num; i++) {
    if (num % i ==0)
      return false;
  }
  return true;

  // -------------------- End Code Area ---------------------
}

console.log('========================= Question 1 =========================');
// true
console.log(nCheckPrime(2));
// false
console.log(nCheckPrime(4));
// false
console.log(nCheckPrime(81));
// true
console.log(nCheckPrime(67));
// true
console.log(nCheckPrime(97));

console.log('========================= Question 2 =========================');
// true
console.log(logCheckPrime(2));
// false
console.log(logCheckPrime(4));
// false
console.log(logCheckPrime(81));
// true
console.log(logCheckPrime(67));
// true
console.log(logCheckPrime(97));