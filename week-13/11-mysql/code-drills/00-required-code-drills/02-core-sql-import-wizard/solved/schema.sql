DROP DATABASE IF EXISTS food_DB;
CREATE database food_DB;

USE food_DB;
-- create a nutrition table that contains id, foodname, calories, protein, fats, carbohyrates and primary key of id 
CREATE TABLE nutrition (
  -- Code Starts Here
  id INT NOT NULL,
  foodname VARCHAR(100) NULL,
  calories DECIMAL(10,1) NULL,
  protein DECIMAL(10,1) NULL,
  fats DECIMAL(10,1) NULL,
  carbohyrates DECIMAL(10,1) NULL,
  PRIMARY KEY (id)
  -- Code Ends Here
);

SELECT * FROM nutrition;

-- create a ingredients table that contains id, foodname main_ingredients, seasoning, oils, side_dish, origin and primary key of id
CREATE TABLE ingredients (
  -- Code Starts Here
  id INT NOT NULL,
  foodname VARCHAR(100) NULL,
  main_ingredients VARCHAR(100) NULL,
  seasoning VARCHAR(100) NULL,
  oils VARCHAR(100) NULL,
  side_dish VARCHAR(100) NULL,
  origin VARCHAR(100) NULL,
  PRIMARY KEY (id)
  -- Code Ends Here
);

SELECT * FROM ingredients;