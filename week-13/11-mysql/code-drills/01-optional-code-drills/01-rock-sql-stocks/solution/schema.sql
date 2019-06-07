DROP DATABASE IF EXISTS stockDB;
CREATE database stockDB;

USE stockDB;

CREATE TABLE stock (
-- YOUR CODE HERE --

  date VARCHAR(10) NOT NULL UNIQUE,
  open DECIMAL(10,6),
  high DECIMAL(10,6),
  low DECIMAL(10,6),
  close DECIMAL(10,6),
  volume INT,
  PRIMARY KEY (date)

-- END CODE AREA --
);

SELECT * FROM stock;
