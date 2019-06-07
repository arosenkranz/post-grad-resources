// require inquirer
var inquirer = require("inquirer")

// define our initial quotes
var quotes = [
  {
    author: "Albus Dumbledore",
    quote: "It is our choices, Harry, that show what we truly are, far more than our abilities"
  },
  {
    author: "Sirius Black",
    quote: "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals"
  }
]

// call on the function that displays our main menu
start()
function start() {
  console.log("Welcome to the Quote Library!\n");
  mainMenu();
}

// define a function that displays the main menu
function mainMenu() {
  // prompt the user to choose between three options
  inquirer.prompt([
    {
      type: "list",
      name: "menuChoice",
      message: "What would you like to do?",
      choices: ["View a quote", "Add a quote", "Exit"]
    }
  ]).then(function (userChoice) {
    // depending on the user selection, 
    switch (userChoice.menuChoice) {
      // call on a function to show the quotes
      case "View a quote":
        showQuotes();
        break;
      // call on a function to add a new quote
      case "Add a quote":
        addQuotes();
        break;
      // exit the application by not calling on any functions
      case "Exit":
        console.log("\n Goodbye! Come back soon!");
    }
  })
}

// define a function that will show the user all the quotes to choose from
function showQuotes() {

  // create a new array of all the authors of the quotes to use for the user prompt
  var authorChoices = [];
  for (var i=0; i<quotes.length; i++) {
    authorChoices.push(i + ") " + quotes[i].author);
  }
  // ask the user to choose which author's quote they want to see
  inquirer.prompt([
    {
      type: "list",
      name: "authorChoice",
      message: "Show the quote from which author? ",
      choices: authorChoices
    }
  ]).then(function(userChoice) {

    // find the quote by the chosen author and display it
    var index = authorChoices.indexOf(userChoice.authorChoice);
    console.log("\n", quotes[index].quote, "\n");
    mainMenu();
  })
}

// define a function that lets the user add quotes to the display list
function addQuotes() {
  // ask the user to input the author and then the quote
  inquirer.prompt([
    {
      type: "input",
      name: "author",
      message: "Please input the author's name: "
    },
    {
      type: "input",
      name: "quote",
      message: "Please input the quote: "
    }
  ]).then(function(userInput) {
    // add the new quote with the corresponding author into our quote storage
    quotes.push({
      author: userInput.author,
      quote: userInput.quote});
    mainMenu();
  })
}