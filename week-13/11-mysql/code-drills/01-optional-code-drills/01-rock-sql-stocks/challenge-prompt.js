var mysql = require("mysql");

var connection = mysql.createConnection({
  // Your connection information here
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "stockDB"
});

// Connect to the database and then run the function to display the
// optimal buy and sell dates
connection.connect(function(err) {
  if (err) throw err;
  getStocks();
});


// --------------------------------------------------------
//                Helper Functions (Optional)
//
// -------------------- Your Code Here --------------------






// --------------------- End Code Area --------------------



// getStocks queries the SQL database and displays the days to buy and sell in order
// to maximize profits.
function getStocks() {


  // -------------------- Define Query Here --------------------
  var query = "YOUR QUERY HERE";
  // -----------------------------------------------------------


  connection.query(query, function(err, res){
    // -------------------- Your Code Here --------------------






    // --------------------- End Code Area --------------------
    connection.end();
  })
}
