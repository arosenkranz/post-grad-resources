var expect = require("chai").expect;
var titleize = require("../titleize");

describe("Titleize", function() {
  it("to capitalize initial letter of each word in input", function() {
    expect(titleize("seth smith")).to.equal("Seth Smith");
  });

  it("to append period to leading titles", function() {
    expect(titleize("dr zhivago")).to.equal("Dr. Zhivago");
  });

  it("to not change properly cased strings", function() {
    expect(titleize("Mr. Alexander Pushkin")).to.equal("Mr. Alexander Pushkin");
  });

  it("to add periods to properly capitalized titles", function() {
    expect(titleize("Mr Alexander Pushkin")).to.equal("Mr. Alexander Pushkin");
  });

  it("to properly case mixed case strings", function() {
    expect(titleize("Mr ALEXANDER PushKIn")).to.equal("Mr. Alexander Pushkin");
  });
});
