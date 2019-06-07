# MYSQL

## Left Joins

### Instructions 

- Run `npm i` to install from the command line to install MySQL (it is already listed as a dependency in your package.json)

- From activity one we use the import wizard and fill the food_db with data and now we can practice combining those tables.
- Make sure you add in your own password to access the mysql database
- Create the query that selects nutrition's food name and ingredient's seasonings, oils, side_dish, origin 
- Then have nutrition left join ingredients on nutrition(id) and ingredients(id)

- Follow the steps of for query
    Step One - `SELECT` + Colum(s)name +
    Step Two- `FROM` + TableOne 
    Step Three - `LEFT JOIN` + TableTwo
    Step Four - `ON` tableone.name  = tabletwo.name


- Or go to the link below to check out how to do left joins

### Example
- A link to left join https://www.w3schools.com/sql/sql_join_left.asp

![results](./gif/results.gif)