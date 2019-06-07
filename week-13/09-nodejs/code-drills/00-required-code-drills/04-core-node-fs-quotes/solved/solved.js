var fs = require("fs");

// Keep track of user input
var args = [];




//Handle names that are longer than one word
for (var i = 2 ; i < process.argv.length ; i++) {
  args.push(process.argv[i]);
};

//Turn the name into a single string


var quote = args[args.length -1];

//Get rid of the quote as well as the word said
args.pop(); args.pop();

//The last remaining elements shoudld make up the name.
var person = args.join(" ");

//We can join the contents of this array later to get the final string we append to the file 
var fullQuote = [];

//Add the quotation marks around the quote
quote = '"' + quote + '"';
//The quote comes first
fullQuote.push(quote);
//Then the dash signifying who said it
fullQuote.push("-");
//Add the person
fullQuote.push(person);
//Turn the array into a string. Each element separated by a space.
fullQuote = fullQuote.join(" ");


fs.appendFile("quotes.txt", ";"+fullQuote, function(error, data) {
  console.log("Quote added!")
});



