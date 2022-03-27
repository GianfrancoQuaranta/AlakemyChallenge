DROP DATABASE IF EXISTS db_challengeAlkemy;
CREATE DATABASE db_challengeAlkemy;
USE db_challengeAlkemy;

CREATE TABLE charact (
    id INT AUTO_INCREMENT NOT NULL,
    image VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    age INT(2) NOT NULL,
    weight DECIMAL(5,2) NOT NULL,
    story TEXT(250) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE movie (
    id INT AUTO_INCREMENT NOT NULL,
    image VARCHAR(100) NOT NULL,
    title VARCHAR(100) NOT NULL,
    release_date DATE NOT NULL,
    rating DECIMAL(2,1),
    PRIMARY KEY (id)
);

CREATE TABLE genre (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(100),
    image VARCHAR(100),
    PRIMARY KEY (id)
);

CREATE TABLE charactMovie (
    id INT AUTO_INCREMENT NOT NULL,
    charact_id INT NOT NULL,
    movie_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (charact_id) REFERENCES charact (id),
    FOREIGN KEY (movie_id) REFERENCES movie (id)
);

CREATE TABLE movieGenre (
    id INT AUTO_INCREMENT NOT NULL,
    movie_id INT NOT NULL,
    genre_id INT NOT NULL, 
    PRIMARY KEY (id),
    FOREIGN KEY (movie_id) REFERENCES movie (id),
    FOREIGN KEY (genre_id) REFERENCES genre (id)
);


INSERT INTO charact (id, image, name, age, weight, story)
VALUES (1, "www.google.com.ar", "Google", 15, 45.72, "Se trata de un navegador web");