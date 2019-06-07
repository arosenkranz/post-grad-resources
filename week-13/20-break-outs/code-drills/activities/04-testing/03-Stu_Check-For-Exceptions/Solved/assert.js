var assertThrows = function(func, x, y) {
  var threw = false;

  // Try to execute func with x, y
  try {
    func(x, y);
  }
  catch (err) {
    // If func throws set threw to false and log the error
    // Since the error was caught, it doesn't crash our program
    threw = true;
    console.log(err);
  }
  // Return threw
  return threw;
};

var multiply = function(x, y) {
  // If either x or y is not a number, throw an error
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("Either x or y is not a number. Please try again with numbers.");
  }
  // Otherwise return the result of x * y
  else return x * y;
};

// Throws an error
console.log(assertThrows(multiply, "a", 2));

// No error thrown below
console.log(assertThrows(multiply, 2, 2));
