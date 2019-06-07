// Get filename from user
var filename = process.argv[2];
var readFile = require("./helpers").readFile;

// readFile throws due to an unknown error with the filesystem.
readFile(filename);

console.log("The rest of your program didn't work.");


