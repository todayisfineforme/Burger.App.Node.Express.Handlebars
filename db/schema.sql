drop database if exists burgers_db;

create database burgers_db;

use burgers_db;

CREATE TABLE burgers(
	id INT AUTO_INCREMENT,
	burger_name VARCHAR(45) NULL,
	devoured BOOLEAN default false NOT NULL,
	PRIMARY KEY (id)
);