var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port;
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "!",
  database: "food_DB"
});

connection.connect(function (err) {
  if (err) throw err;
  foodSearch();
});



// RIGHT JOIN

function foodSearch() {
    var query = "SELECT ingredients.foodname, nutrition.protein,nutrition.carbohyrates, nutrition.fats, nutrition.calories FROM ingredients RIGHT JOIN nutrition ON ingredients.id = nutrition.id";

    connection.query(query, function (err, res) {
        console.log("err", err)
        console.log("res", res)
    });
}
