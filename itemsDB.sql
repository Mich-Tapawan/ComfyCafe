CREATE TABLE orders (
    customer_id VARCHAR(50) NOT NULL PRIMARY KEY,
	item VARCHAR(20) NOT NULL,
    price DECIMAL(4, 2) NOT NULL,
    quantity INT NOT NULL
);