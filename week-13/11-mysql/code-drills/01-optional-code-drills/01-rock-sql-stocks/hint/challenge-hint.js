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

// Write a helper function to return an object containing the maximum
// profit, the optimal buy date and price, and the optimal sell date
// and price



  // Create a variable to store the values we want to return
  // Initialize the variable with the data from the first two days. We cannot
  // just set values to 0 because if a stock just decreases in value without
  // increasing, we will have values that don't reflect the data

  

  // Create a variable to store the data for the day with the current lowest price we've
  // encountered so far

  

  // Iterate through the array we've been given

  

    // If the profit from selling the stock at the current high price after buying
    // it at the date of the current lowest price we've encountered is better than
    // the max profit so far, store the new values into the return variable

    

    // If the low for the current day is lower than the current lowest price we've
    // encountered, store the data into the current lowest price variable we have

    

  // After iterating through the data, return the values for achieving maximum profit

  


// --------------------- End Code Area --------------------



// getStocks queries the SQL database and displays the days to buy and sell in order
// to maximize profits.
function getStocks() {


  // -------------------- Define Query Here --------------------
  var query = "YOUR QUERY HERE";
  // -----------------------------------------------------------


  connection.query(query, function(err, res){
    // -------------------- Your Code Here --------------------

    // Call our helper function to find the optimal purchase dates
    // and prices and store the return value

    

    // Console log the return value from our helper function

    
    

    // --------------------- End Code Area --------------------
    connection.end();
  })
}
