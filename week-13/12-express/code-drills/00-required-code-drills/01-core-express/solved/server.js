// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3505;

//Expected Output: 
// {
//   jerome: 50,
//   code: 80,
//   org: 58,
//   ricky: 30,
//   com: 90,
//   robert: 60,
//   chicken: 68,
//   sasha: 8
// }
var input = ["50 jerome.code.org", "30 ricky.code.com", "60 robert.chicken.com", "8 sasha.chicken.org"]

function getNumVisits(arr) {
  // The final object which will be populated in this function
  var obj = {}

  // Separates the domains and their respective visits
  var domainsAndCount = []


  for (var i = 0 ; i < arr.length ; i++) {
    domainsAndCount.push(arr[i].split(" "))
  }

  

  for (var i = 0 ; i < domainsAndCount.length ; i++) {

    var visits = parseInt(domainsAndCount[i][0])
    var domain = domainsAndCount[i][1]

    //Seperate the domains into subdomains
    var subDomains = domain.split(".")

    for (var j = 0 ; j < subDomains.length; j++) {
      //If the key doesn't exist, initialize it to the visit count
      if (!obj[subDomains[j]]) {
        obj[subDomains[j]] = visits
        
        //Otherwise, add the number of visits to it
      } else {
        obj[subDomains[j]] += visits
      }
    }

  }

  return obj

}

app.get("/", function(req, res) {
  var subDomains = getNumVisits(input)
  res.json(subDomains)
})



// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
