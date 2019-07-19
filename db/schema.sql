CREATE DATABASE school_db;

USE school_db;

CREATE TABLE classroom
(
  id INTEGER
  AUTO_INCREMENT NOT NULL,
 name VARCHAR
  (100) NOT NULL,
 classroom VARCHAR
  (100) NOT NULL,
 isUnder30 BOOLEAN DEFAULT true,
 PRIMARY KEY
  (id)
);
