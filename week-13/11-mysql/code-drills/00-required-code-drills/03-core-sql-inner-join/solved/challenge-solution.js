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

// INNER JOIN

function foodSearch() {
    var query = "SELECT nutrition.id, ingredients.foodname FROM ingredients INNER JOIN nutrition ON nutrition.foodname = ingredients.foodname";
    connection.query(query, function (err, res) {
        console.log("err", err)
        console.log("res", res)
    });
}
