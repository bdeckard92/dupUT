DROP TABLE IF EXISTS products;

CREATE TABLE products (
  id INTEGER PRIMARY KEY,
  flavor VARCHAR(45),
  price DECIMAL(10,2),
  quantity INTEGER
);
