// Prime Factors


// The `primeFactors` function should take in a num and return a sorted Array
// of all the factors of the number that are also prime numbers.

// -------------------------------------------------------
//                Helper Functions (Optional)
//
// -------------------- Your Code Here --------------------

function checkPrime(num) {
  for (var i = 2; i <= num/i; i++){
    if (num % i === 0) {
      return false
    }
  }
  return num !== 1;
}

// --------------------- End Code Area --------------------



// ----------------------------------------------------------
//                        Prime Factors
// ----------------------------------------------------------
function primeFactors(num) {
  // -------------------- Your Code Here --------------------

  var factors = [];
  for (var i = 2; i <= num; i++) {
    if (num % i === 0 && checkPrime(i)) {
      factors.push(i);
    }
  }
  return factors;

  // --------------------- End Code Area --------------------
}



// --------------------------- Test Cases ---------------------------
//
//
// ---------------------------- Test 01 -----------------------------
var testnum1 = 64;
$("#output-area").append(`
  <div class="card m-3">
    <div class="card-header bg-secondary">
      <h5 class="text-light">Test 01</h5>
    </div>
    <div class="card-body">
      <p class="text-left">The following should be [2]</p>
      <hr class="mb-5">
      <p class="text-left">[${primeFactors(testnum1)}]</p> 
    </div>
  </div>
`)

// ---------------------------- Test 02 -----------------------------
var testnum2 = 104;
$("#output-area").append(`
  <div class="card m-3">
    <div class="card-header bg-secondary">
      <h5 class="text-light">Test 02</h5>
    </div>
    <div class="card-body">
      <p class="text-left">The following should be [2,13]</p>
      <hr class="mb-5">
      <p class="text-left">[${primeFactors(testnum2)}]</p> 
    </div>
  </div>
`)

// ---------------------------- Test 03 -----------------------------
var testnum3 = 54321;
$("#output-area").append(`
  <div class="card m-3">
    <div class="card-header bg-secondary">
      <h5 class="text-light">Test 03</h5>
    </div>
    <div class="card-body">
      <p class="text-left">The following should be [3,19,953]</p>
      <hr class="mb-5">
      <p class="text-left">[${primeFactors(testnum3)}]</p> 
    </div>
  </div>
`)
