CREATE DATABASE `simple_bookshelf` ;

use simple_bookshelf;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



CREATE  TABLE `books` (
  `ISBN` INT NOT NULL ,
  `title` VARCHAR(45) NOT NULL ,
  `author` VARCHAR(45) NULL ,
  `genreid` VARCHAR(45) NULL ,
  `comments` VARCHAR(200) NULL ,
  `editor` VARCHAR(45) NULL ,
  `edition` VARCHAR(45) NULL ,
  `description` VARCHAR(200) NULL ,
  PRIMARY KEY (`ISBN`) ,
  UNIQUE INDEX `ISBN_UNIQUE` (`ISBN` ASC) );

  CREATE  TABLE `simple_bookshelf`.`genres` (
    `genreid` INT NOT NULL AUTO_INCREMENT ,
    `name` VARCHAR(45) NOT NULL ,
    `description` VARCHAR(45) NULL ,
    PRIMARY KEY (`genreid`) );

