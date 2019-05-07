DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
item_id INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR (100) NULL, 
department_name VARCHAR(100)NULL,
price DECIMAL(10, 4) NULL,
stock_quantity INT(400) NULL,
PRIMARY KEY(item_id)

)
SELECT * FROM products;
INSERT INTO products (item_id, product_name, department_name,price,stock_quantity)
VALUES (200,"nikes","clothing",32.5 ,30);

INSERT INTO products (item_id, product_name, department_name,price,stock_quantity)
VALUES(201,"iphone X","technology",985,40);

INSERT INTO products (item_id, product_name, department_name,price,stock_quantity)
VALUES(202,"t-shirts","clothing",	3.5,12);

INSERT INTO products (item_id, product_name, department_name,price,stock_quantity)
VALUES(203,"pants","clothing",26.45,30);

INSERT INTO products (item_id, product_name, department_name,price,stock_quantity)
VALUES(204,"socks","clothing",1.95,100);

INSERT INTO products (item_id, product_name, department_name,price,stock_quantity)
VALUES(205,"tv","technology",185,20);

INSERT INTO products (item_id, product_name, department_name,price,stock_quantity)
VALUES(206,"coke","bevarage",1.35,100);

INSERT INTO products (item_id, product_name, department_name,price,stock_quantity)
VALUES(207,"chair","furniture",150,5);

INSERT INTO products (item_id, product_name, department_name,price,stock_quantity)
VALUES(208,"sofa","furniture",365,9);

INSERT INTO products (item_id, product_name, department_name,price,stock_quantity)
VALUES(209,"x-box","technology",220,12);

INSERT INTO products (item_id, product_name, department_name,price,stock_quantity)
VALUES(210,"beer","beverage",12.5,200);
select * from products;