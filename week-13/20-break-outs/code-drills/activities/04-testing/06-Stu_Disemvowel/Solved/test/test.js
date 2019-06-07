var expect = require("chai").expect;
var disemvowel = require("../disemvowel");

describe("Disemvowel", function() {
  it("should remove all vowels from lowercase strings", function() {
    expect(disemvowel("this is lowercase")).to.equal("ths s lwrcs");
  });

  it("should remove all vowels from uppercase strings", function() {
    expect(disemvowel("THIS IS UPPERCASE")).to.equal("THS S PPRCS");
  });

  it("should remove all vowels from mixed strings", function() {
    expect(disemvowel("this IS mixed")).to.equal("ths S mxd");
  });

  it("should ignore numbers in input strings", function() {
    expect(disemvowel("this IS mixed and has 2 NUMBERS 92")).to.equal(
      "ths S mxd nd hs 2 NMBRS 92"
    );
  });

  it("should cast numbers to strings", function() {
    expect(disemvowel(10971)).to.equal("10971");
  });
});
