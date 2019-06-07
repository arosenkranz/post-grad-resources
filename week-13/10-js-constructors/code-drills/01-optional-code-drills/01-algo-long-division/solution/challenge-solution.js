// Long Division

// This is the divide function. It takes in a dividend and a divisor 
// and returns the quotient from dividing the dividend by the divisor
function divide (dividend, divisor) {
// -------------------- Your Code Here --------------------

  var tempSum = 0;
  for (var quotient = 0; tempSum + divisor <= dividend; quotient++){
    tempSum += divisor;
  }
  if (tempSum !== dividend) {
    console.log (dividend + " / " + divisor + " has a remainder of " + (dividend - tempSum));
  }
  return quotient;

// --------------------- End Code Area --------------------
}

// Exporting the divide function for use in the test file.
module.exports = divide;