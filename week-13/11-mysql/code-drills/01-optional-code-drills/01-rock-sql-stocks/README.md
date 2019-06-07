# MySQL

## Stock Prices

### Instructions

_In this activity, we're going to be using the import wizard within the mySQL workbench in order to store a csv file into our database. Then we're going to be querying the relevant data before operating on it to return when to buy and sell in order to maximize our profits during the year._

* Look at the `stock_data.csv` file and create a schema for the data in the `stock` table inside `schema.sql`.

* Run the schema you've just defined and use the import wizard in order to import the file into the table.

* Inside `challenge-prompt.js`, configure the connection to your SQL database then customize your query in order to get the date along with the high and low for stock prices.

* Using the high and low prices, calculate the largest possible profit we could have made per stock over the year.

    * For this activity, you cannot short stock, so you must buy the stock before you can sell it. This means you cannot just find the lowest price of the stock and the highest price of the stock and find the difference since the lowest price point might occur after the highest price point.

    * Assume that you cannot buy and sell on the same day, so make sure that your code doesn't allow you to do so.

    * Remember that the most profit to be made could have happened before the stock hit its lowest point if there wasn't much growth after the low.

* Console log the date and price to buy the stock at and the date and price to sell the stock at along with the maximum profit to be made per stock. It should be:

```
Max Profit:     $7.91
Buy:  05-22  |  $22.07
Sell: 06-27  |  $29.98
```

### BONUS

* You can find the maximum profit by only iterating through the results of the query once. Try to find a solution that only needs one iteration.