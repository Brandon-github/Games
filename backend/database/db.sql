
CREATE DATABASE games;

USE games;

-- Create table 'game types'
CREATE TABLE game_type(
  id INT NOT NULL,
  name VARCHAR(90) NOT NULL
);

ALTER TABLE game_type
  ADD PRIMARY KEY(id),
  MODIFY id INT NOT NULL AUTO_INCREMENT;

-- Create table 'games'
CREATE TABLE games(
  id INT NOT NULL,
  name VARCHAR(90) NOT NULL,
  description TEXT NOT NULL,
  id_type INT NOT NULL
);

ALTER TABLE games
  ADD PRIMARY KEY(id),
  MODIFY id INT NOT NULL AUTO_INCREMENT,
  ADD FOREIGN KEY(id_type) REFERENCES game_type(id);


