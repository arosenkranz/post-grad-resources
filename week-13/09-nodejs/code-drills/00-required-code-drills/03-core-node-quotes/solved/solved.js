var fs = require("fs");

// Keep track of user input
var args = [];
var fullQuotes;
var person;
var message = "That person never said anything"

//Handle names that are longer than one word
for (var i = 2 ; i < process.argv.length ; i++) {
  args.push(process.argv[i]);
}

//Turn the name into a single string
person = args.join(" ");


fs.readFile("quotes.txt", "utf8", function(error, data) {
  
  //Separate the quotes
  fullQuotes = data.split(";");

  for (var i = 0 ; i < fullQuotes.length; i++) {
    //Separate the person from the quote
    var quote = fullQuotes[i].split("-");

    if (quote[1].toLocaleLowerCase() === person) {

      //change the default message to the quote in question
      message = quote[0];

    }
  }

  console.log(message)
});



