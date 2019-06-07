// declare a variable for the array we're storing the history of user key presses 
// into and assign it to an empty array
var userHistory = [];

// declare a variable that is a string of all 26 lowercase letters in the english alphabet
// we can use a string in this situation because we're only checking against individual characters
// if we were to have to validate non-alphanumeric characters, we would have to use an array
var alphabet = "abcdefghijklmnopqrstuvwxyz"

// create a key press listener
document.onkeyup = function(input){

  // store the key the user pressed into a variable and
  // change it to lower case to make our logic not case sensitive
  var userKey = input.key.toLowerCase();

  // create an if statement that checks whether the key is part of our alphabet
  if (alphabet.includes(userKey)){

    // if the key is part of the alphabet, set the text value of div on our webpage we're 
    // using to display thecurrent key to that key
    document.getElementById("user-key").textContent = userKey;

    // also store the key into the array we declared at the top of the file
    userHistory.push(userKey);

    // finally set the text value of the key press history div to the array
    document.getElementById("user-history").textContent = userHistory;
  } else {

  // if the key is not part of our alphabet, change the current key div to ask the user to press
  // a key that's a letter within our alphabet
    document.getElementById("user-key").textContent = "Please press a valid letter";
  }

}