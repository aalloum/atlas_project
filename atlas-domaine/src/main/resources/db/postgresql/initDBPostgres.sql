CREATE TABLE IF NOT EXISTS cabinets (
  id SERIAL,
  nom_cabinet VARCHAR(30),
  identifiant_fiscal VARCHAR(30),
  activite_principale VARCHAR(30),
  forme_juridique VARCHAR(30),
  regime VARCHAR(30),
  numero_registre_commerce VARCHAR(30),
  numero_cnss VARCHAR(30),
  numero_taxe_professionnelle VARCHAR(30),
  numero_ice VARCHAR(30),
  telephone VARCHAR(30),
  fax VARCHAR(30),
  email VARCHAR(30),
  rib VARCHAR(30),
  banque VARCHAR(30),
  agence VARCHAR(30),
  ville VARCHAR(30),
  code_postal VARCHAR(30),
  adresse VARCHAR(30),
  CONSTRAINT pk_cabinets PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS comptables (
  id SERIAL,
  prenom VARCHAR(30),
  nom VARCHAR(30),
  matricule VARCHAR(30),
  actived BOOLEAN NOT NULL,
  cabinet_id INT NOT NULL,
  FOREIGN KEY (cabinet_id) REFERENCES cabinets(id),
  CONSTRAINT pk_comptables PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS clients (
  id SERIAL,
  denomination VARCHAR(30),
  identifiant_fiscal VARCHAR(30),
  activite_principale VARCHAR(30),
  forme_juridique VARCHAR(30),
  regime VARCHAR(30),
  numero_registre_commerce VARCHAR(30),
  numero_cnss VARCHAR(30),
  numero_taxe_professionnelle VARCHAR(30),
  numero_ice VARCHAR(30),
  telephone VARCHAR(30),
  fax VARCHAR(30),
  email VARCHAR(30),
  rib VARCHAR(30),
  banque VARCHAR(30),
  agence VARCHAR(30),
  ville VARCHAR(30),
  code_postal VARCHAR(30),
  adresse VARCHAR(30),
  cabinet_id INT NOT NULL,
  comptable_id INT NOT NULL,
  FOREIGN KEY (cabinet_id) REFERENCES cabinets(id),
  FOREIGN KEY (comptable_id) REFERENCES comptables(id),
  CONSTRAINT pk_clients PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS plan_comptable (
  id SERIAL,
  nb NUMERIC,
  classe VARCHAR(30),
  compte BIGINT,
  libelle VARCHAR(100),
  sous_compte VARCHAR(30),
  formule_sous_compte VARCHAR(30),
  CONSTRAINT pk_plan_comptable PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS balance (
  id SERIAL,
  Compte BIGINT,
  Intitule_Compte VARCHAR(100),
  Solde_Initial_Debit DECIMAL,
  Solde_Initial_Credit DECIMAL,
  Mouvement_Debit DECIMAL,
  Mouvement_Credit DECIMAL,
  Solde_Debit DECIMAL,
  Solde_Credit DECIMAL,
  CONSTRAINT pk_balance PRIMARY KEY (id)
);
