USE ucode_web;

INSERT INTO powers(name, type, points, hero_id)

VALUES
('Crimson Pact', 'attack', '112', 2),
('Blade of Moonlight', 'defense', '86', 4),
('Cytokinesis', 'attack', '43', 5),
('Living forge', 'defense', '94', 6),
('Agile Fighter', 'attack', '256', 1),
('Spider queen', 'attack', '124', 5),
('Victory over death', 'attack', '460', 6),
('Shurima legacy', 'defense', '38',8),
('Thorn garden', 'defense', '158', 9),
('Herald of the ancient deity', 'attack', '59', 2),
('bloody fist', 'attack', '110', 3),
('iron shield', 'defense', '200',11),
('iron shield', 'defense', '200', 12);

INSERT INTO races(name)

VALUES
('Human'),
('Kree'),
('Eternal'),
('Eternal'),
('Kree'),
('Kree'),
('Human'),
('Kree'),
('Human'),
('Eternal'),
('Kree'),
('Human');


INSERT INTO teams
(hero_id, name)
VALUES
(1, 'Avengers'),
(2, 'Avengers'),
(3, 'Alliance'),
(4, 'Alliance'),
(5, 'Avengers'),
(6, 'Celestials'),
(7, 'Horde'),
(8, 'Eternal'),
(9, 'Hydra'),
(10, 'Celestials'),
(11, 'Avengers'),
(2, 'Hydra'),
(14, 'Hydra'),
(14, 'Alliance'),
(14, 'Hydra'),
(15, 'Alliance'),
(16, 'Alliance'),
(17, 'Alliance'),
(18, 'Celestials'),
(19, 'Avengers'),
(20, 'Hydra'),
(20, 'Celestials'),
(15, 'Celestials'),
(17, 'Celestials'),
(18, 'Eternal'),
(18, 'Eternal'),
(19, 'Eternal');

INSERT INTO heroes_powers(hero_id, power_id, power_points)

VALUES
(1, 1, '330'),
(2, 4, '600'),
(3, 5, '750'),
(4, 2, '100'),
(5, 7, '1050'),
(6, 8, '3230'),
(7, 3, '140'),
(8, 9, '950');

INSERT INTO heroes_teams(hero_id, team_id)

VALUES
(1, 1),
(2, 4),
(3, 5),
(4, 2),
(5, 7),
(2, 1),
(7, 3),
(8, 9),
(10, 10);
