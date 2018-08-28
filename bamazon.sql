DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NULL,
  department_name VARCHAR(50) NULL,
  price DECIMAL(10,2) NULL,
  quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("nike-womens", "apparel", 100.00, 20), ("cooking set", "home and garden", 69.99, 15), ("wine opener", "home and garden", 25.00, 30), ("laptop", "electronics", 550.00 , 3), ("bicycle", "toys", 85.00, 50), ("soccer ball", "sports and outdoors", 36.00, 21), ("Yes please!", "books", 34.00, 30), ("Trolls", "movies", 24.00, 4), ("lawn mower", "home and garden", 165.00, 12), ("shaving kit", "health and beauty", 32.99, 24); 

