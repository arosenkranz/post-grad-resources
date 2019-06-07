// Throw error.
var mockError = function() {
  throw new Error("Error: Filesystem appears corrupted, or file does not exist. Try again later.");
};

// Mock error due to filesystem.
var readFile = function(filename) {
  mockError();
};

exports.readFile = readFile;
