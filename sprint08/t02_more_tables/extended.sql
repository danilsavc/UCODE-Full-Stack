USE ucode_web;

CREATE TABLE IF NOT EXISTS powers 
(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    type ENUM('attack', 'defense') NOT NULL,
    points INT NOT NULL,
    hero_id INT NOT NULL,
    FOREIGN KEY (hero_id) REFERENCES heroes (id) ON DELETE CASCADE 
);

CREATE TABLE IF NOT EXISTS races
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS teams
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    hero_id INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    FOREIGN KEY (hero_id)  REFERENCES heroes (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS heroes_powers
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    hero_id INT NOT NULL,
    power_id INT NOT NULL,
    power_points INT NOT NULL,
    FOREIGN KEY (hero_id)  REFERENCES heroes (id) ON DELETE CASCADE,
    FOREIGN KEY (power_id)  REFERENCES powers (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS heroes_teams 
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    hero_id INT NOT NULL,
    team_id INT NOT NULL,
    FOREIGN KEY (hero_id)  REFERENCES heroes (id) ON DELETE CASCADE,
    FOREIGN KEY (team_id)  REFERENCES teams (id) ON DELETE CASCADE
);
