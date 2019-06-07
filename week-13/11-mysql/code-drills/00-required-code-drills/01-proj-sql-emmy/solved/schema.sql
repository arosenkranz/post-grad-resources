-- First, we need to create the database for our list of nominees. pricewaterhousecoopers says they trust us to re-enter their old list of nominees... Little do they know, we're going to put in our own list of who we think the nominees should be. 

-- Create a database 
CREATE database emmysDB;

-- Make it clear that the database we want to refer to is the one we just created
USE emmysDB;

-- The table for emmy nominees must follow a very strict format. We must give it the following columns:
-- 1. nominee_id - an integer that increments automaticallly. It should not be null
-- 2. show_name - the name of the show (must be a string, even if it's 90210)
-- 3. num_seasons - an integer pointing to the number of existing seasons for a show
-- 4. genre - a string pointing to the genre of the show
-- 5. rating - a decimal rating out of 10. Make sure this cannot take more than two digits before the decimal point
-- 6. Set nominee_id as the primary key

CREATE TABLE nominees (
  nominee_id INT(11) AUTO_INCREMENT NOT NULL,
  show_name VARCHAR (100),
  num_seasons INT(2),
  genre VARCHAR (35),
  rating DECIMAL (2,2),
  PRIMARY KEY (nominee_id)
);


-- Let the fun begin!! Seed your database with the 5 best TV shows of all time!  
INSERT INTO nominees (show_name, num_seasons, genre, rating) VALUES ("The Office", 9, "Comedy", 10), ("Game of Thrones", 7, "Drama", 10), ("Lost", 6, "Drama", 8.7), ("Spongebob", 15, "Kids", 8.2), ("Dexter", 7, "Drama", 7.8);

-- Paste this into your DB manager and create the table
-- Return back to the readme


            