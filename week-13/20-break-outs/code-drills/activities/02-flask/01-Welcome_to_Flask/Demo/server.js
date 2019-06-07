// Require Express
var express = require("express");

// Create an app using express, being sure to specify a PORT
var PORT = process.env.PORT || 8000;
var app = express();

// 3. Define what to do when a user hits the index route
app.get("/", function(req, res) {
  console.log("Server received request for 'Home' page...")
  res.send("Welcome to my 'Home' page!");
});

// 4. Define what to do when a user hits the /about route
app.get("/about", function(req, res) {
  console.log("Server received request for 'About' page...")
  res.send("Welcome to my 'About' page!");
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});