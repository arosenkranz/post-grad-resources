var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port;
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "food_DB"
});

connection.connect(function (err) {
  if (err) throw err;
  foodSearch();
});


// LEFT JOIN

function foodSearch() {
    var query = "SELECT nutrition.foodname, ingredients.seasoning, ingredients.oils, ingredients.side_dish, ingredients.origin FROM nutrition LEFT JOIN ingredients ON nutrition.id = ingredients.id";
    // console.log(query)
    connection.query(query, function (err, res) {
        console.log("err", err)
        console.log("res", res)
    });
}
