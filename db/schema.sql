CREATE DATABASE burger_db;
USE burger_db;

-- Create the table plans.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger varchar(255) NOT NULL,
devour boolean,
PRIMARY KEY (id)
);

-- Insert a set of records.

insert into burgers (burger, devour) values ('cheeseburger',true);
insert into burgers (burger, devour) values ('mushroom Burger',true);
insert into burgers (burger, devour) values ('turkey burger', true);

select * from burgers;