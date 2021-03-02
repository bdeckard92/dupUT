DROP DATABASE IF EXISTS inventory_db;
CREATE DATABASE inventory_db;

USE inventory_db;

CREATE TABLE prices (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  price DECIMAL(10,2) NOT NULL
);

CREATE TABLE books(
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  book_name VARCHAR(30) NOT NULL,
  price INTEGER,
  -- Sets relationship between books table and prices table --
  FOREIGN KEY (price)
  REFERENCES prices(id)
  ON DELETE SET NULL
);
