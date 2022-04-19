CREATE DATABASE IF NOT EXISTS bd;
CREATE USER 'dzhyhun'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON bd.* TO 'dzhyhun'@'localhost';
USE bd;
CREATE TABLE IF NOT EXISTS users (
      id int NOT NULL AUTO_INCREMENT,
      login varchar(30) UNIQUE NOT NULL,
      status ENUM('admin', 'user'),
      password varchar(255) NOT NULL,
      full_name varchar(255) NOT NULL,
      email varchar(255) NOT NULL,
      PRIMARY KEY (id)
);