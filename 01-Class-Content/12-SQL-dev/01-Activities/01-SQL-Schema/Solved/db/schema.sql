DROP DATABASE IF EXISTS inventory_db;
CREATE DATABASE inventory_db;

USE inventory_db;

CREATE TABLE books(
  id INTEGER NOT NULL,
  book_name VARCHAR(30) NOT NULL,
  book_description TEXT,
  category_name VARCHAR(30),
  price DECIMAL,
  in_stock BOOLEAN 
);

CREATE TABLE categories(
  id INTEGER NOT NULL,
  category_name VARCHAR(30) NOT NULL
);

