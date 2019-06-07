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
function maxProfit(arr){
  // Create a variable to store the values we want to return
  // Initialize the variable with the data from the first two days. We cannot
  // just set values to 0 because if a stock just decreases in value without
  // increasing, we will have values that don't reflect the data
  var bestStock = {
    maxProfit: arr[1].high - arr[0].low,
    buyDate: arr[0].date,
    buyPrice: arr[0].low,
    sellDate: arr[1].date,
    sellPrice: arr[1].high
  };
  // Create a variable to store the data for the day with the current lowest price we've
  // encountered so far
  var currMin = {
    buyDate: arr[0].date,
    buyPrice: arr[0].low,
  }
  // Iterate through the array we've been given
  for (var i = 1; i < arr.length; i++){
    // If the profit from selling the stock at the current high price after buying
    // it at the date of the current lowest price we've encountered is better than
    // the max profit so far, store the new values into the return variable
    var currProfit = arr[i].high - currMin.buyPrice;
    if (currProfit > bestStock.maxProfit) {
      bestStock.maxProfit = currProfit;
      bestStock.buyDate = currMin.buyDate;
      bestStock.buyPrice = currMin.buyPrice;
      bestStock.sellDate = arr[i].date;
      bestStock.sellPrice = arr[i].high;
    }
    // If the low for the current day is lower than the current lowest price we've
    // encountered, store the data into the current lowest price variable we have
    if (arr[i].low < currMin.buyPrice) {
      currMin.buyDate = arr[i].date;
      currMin.buyPrice = arr[i].low;
    }
  }
  // After iterating through the data, return the values for achieving maximum profit
  return bestStock;
}

// --------------------- End Code Area --------------------



// getStocks queries the SQL database and displays the days to buy and sell in order
// to maximize profits.
function getStocks() {

  // -------------------- Define Query Here --------------------
  var query = "SELECT date, high, low FROM stock";
  // -----------------------------------------------------------

  connection.query(query, function(err, res){
    // -------------------- Your Code Here --------------------

    // Call our helper function to find the optimal purchase dates
    // and prices and store the return value
    var stock = maxProfit(res);

    // Console log the return value from our helper function
    console.log("\n==============================");
    console.log(`Max Profit:     $${stock.maxProfit}`);
    console.log(`Buy:  ${stock.buyDate}  |  $${stock.buyPrice}`);
    console.log(`Sell: ${stock.sellDate}  |  $${stock.sellPrice}`);
    console.log("==============================\n");

    // --------------------- End Code Area --------------------
    connection.end();
  })
}
