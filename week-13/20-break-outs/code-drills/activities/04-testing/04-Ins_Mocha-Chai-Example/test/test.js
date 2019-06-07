var expect = require("chai").expect;

var multiply = function(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("x or y is not a number.");
  }
  else return x * y;
};

// We use a describe block to contain multiple tests for an individual set of work. In other words, we can fit many `it` blocks inside of a `try` one. The "Multiply" argument is a custom name, but it should be indicative of what we're testing
describe("Multiply", function() {
  it("should multiply properly when passed numbers", function() {
    // If we change the 8 to a 9, we will see an error thrown.
    expect(multiply(2, 4)).to.equal(8);
  });

  // Similar to the argument we passed to describe, The string below is a custom one so we can know exactly which tests passed and which ones failed
  it("should throw when not passed numbers", function() {
    expect(function() {
      multiply(2, "4");
    }).to.throw(Error);
  });
});
