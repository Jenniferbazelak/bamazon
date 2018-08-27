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
VALUES ("nike-womens", "apparel", 100, 45), ("cooking set", "home and garden", 69, 15), ("wine opener", "home and garden", 39, 30), ("laptop", "electronics", 500 , 30), ("bicycle", "toys", 85, 100), ("soccer ball", "sports and outdoors", 35, 21), ("Yes please!", "books", 39, 30), ("Trolls", "movies", 39, 30), ("lawn mower", "home and garden", 165, 42), ("shaving kit", "health and beauty", 32.99, 54); 

