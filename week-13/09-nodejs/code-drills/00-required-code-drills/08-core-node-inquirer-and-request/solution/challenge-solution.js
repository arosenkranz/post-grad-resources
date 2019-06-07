// require request and inquirer
var request = require("request");
var inquirer = require("inquirer")


// Use your own API key here
var api_key = "444138542c9de2031e7cb5ad505031f6";

// define the query URL
var queryURL = "http://api.openweathermap.org/data/2.5/weather?units=imperial&APPID="+api_key+"&q=";

inquirer.prompt([
  {
    type: "input",
    message: "Which city do you want to see the weather for? ",
    name: "userCity"
  }
]).then(function(userChoice) {
  request(queryURL+userChoice.userCity, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var cityWeather = JSON.parse(body);
      console.log(cityWeather.name, cityWeather.sys.country);
      console.log(cityWeather.weather[0].description)
    } else {
      console.log(error)
    }
  })
})
