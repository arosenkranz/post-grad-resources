// Benchmark is a library that times
var Benchmark = require("benchmark");
var generate = require("../shared/generate");


// Generate an array of the given length.
var length = 100000000;
var stuff = generate(length);
var randomValue = stuff[Math.ceil(Math.random() * length)];

// A "suite" is a series of code snippets you
//   want to execute and time.
var suite = new Benchmark.Suite();

suite
// Add the function 'linearSearch' to the suite.
  .add("Linear Search", function linearSearch() {
    for (var i = 0; i < stuff.length; i += 1) {
      if (stuff[i] === randomValue) {
        return stuff[i];
      }
    }
    return false;
  })
  // On 'start', run the 'start' function.
  .on("start", function start() {
    console.log("Beginning benchmark...");
  })

  // On the 'complete' event, run the 'report' function.
  .on("complete", function report() {
    // Get successful benchmark.
    var benchmark = Benchmark.filter(this, "successful")[0];

    console.log("On average, " + benchmark.name + " took " + benchmark.stats.mean + " seconds to complete.");
  })

  // Run the test!
  .run();
