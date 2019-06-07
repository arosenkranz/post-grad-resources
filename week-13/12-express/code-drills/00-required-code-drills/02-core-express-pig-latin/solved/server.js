// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3505;

var sentence = "The quick brown apple dog jumped over the lazy fox"

function pigLatin(sen) {
// Stop our loop once it hits a vowel
  var alphabet = {
    "a": true,
    "b": false,
    "c": false,
    "d": false,
    "e": true,
    "f": false,
    "g": false,
    "h": false,
    "i": true,
    "j": false,
    "k": false,
    "l": false,
    "m": false,
    "n": false,
    "o": true,
    "p": false,
    "q": false,
    "r": false,
    "s": false,
    "t": false,
    "u": true,
    "v": false,
    "w": false,
    "x": false,
    "y": false,
    "z": false
  }

  //Split so we can manipulate each word individually
  var senArr = sen.toLowerCase().split(" ")

  for (var i = 0 ; i < senArr.length ; i ++) {

    var wordLength = senArr[i].length

    // Arrays can be manipulated more easily than strings (opinion)
    senArr[i] = senArr[i].split("")

    if (alphabet[senArr[i][0]]) {
      senArr[i].push("w")
    }

    for (var j = 0 ; j < wordLength && !alphabet[senArr[i][j]]; j ++) {

    //send the consonant to the back
      senArr[i].push(senArr[i][j])
      
    }

    //remove the first consonants
    senArr[i].splice(0,j)
    //return to a string and append "ae"

      senArr[i] = senArr[i].join("") + "ae"
    
    
    

  }

  senArr = senArr.join(" ")
  
  return (senArr)
}


app.get("/", function(req,res) {
  //You can sen strings as JSON
  res.json(pigLatin(sentence))
})


// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
