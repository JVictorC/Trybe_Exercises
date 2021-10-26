-- Table Cordenadores
CREATE TABLE Cordenador(
	cordenador_id INT PRIMARY KEy AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
);

-- Table Cuidadores

CREATE TABLE Cuidador(
	cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    cordenador_id INT NOT NULL,
    
	FOREIGN KEY (cordenador_id) REFERENCES Cordenador(cordenador_id)
);

-- Table Especies

CREATE TABLE Especie(
	especie_id INT PRIMARY KEY AUTO_INCREMENT,
    nome_especie VARCHAR(100) NOT NULL
);


-- Table Sexo

CREATE TABLE Sexo(
	sexo_id INT PRIMARY KEY AUTO_INCREMENT,
    sexo VARCHAR(100) NOT NULL
);

-- Table Localização

CREATE TABLE Localizacao(
	localizacao_id INT PRIMARY KEY AUTO_INCREMENT,
    localizacao VARCHAR(100) NOT NULL
);


-- Table Animal

CREATE TABLE Animal(
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
    nome_animal VARCHAR(100) NOT NULL,
    idade INT,
    especie_id INT NOT NULL,
    sexo_id INT NOT NULL,
    cuidador_id INT NOT NULL,
    localizacao_id INT NOT NULL,
    
	FOREIGN KEY (especie_id) REFERENCES Especie(especie_id),
    FOREIGN KEY (sexo_id) REFERENCES Sexo(sexo_id),
    FOREIGN KEY (cuidador_id) REFERENCES Cuidador(cuidador_id),
    FOREIGN KEY (localizacao_id) REFERENCES Localizacao(localizacao_id)
);



