DROP TABLE comptables IF EXISTS;

CREATE TABLE comptables (
  id INTEGER IDENTITY PRIMARY KEY,
  prenom VARCHAR(30),
  nom VARCHAR(30),
  matricule VARCHAR(30),
  actived BOOLEAN ,
);

