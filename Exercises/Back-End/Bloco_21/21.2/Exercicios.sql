-- 1 - Crie uma view chamada film_with_categories utilizando as tabelas category , film_category e film do banco de dados sakila . Essa view deve exibir o título do filme, o id da categoria e o nome da categoria, conforme a imagem abaixo. Os resultados devem ser ordenados pelo título do filme.

CREATE VIEW film_with_categories AS 
SELECT 
    FI.title,
    CA.category_id,
    CA.name
FROM
    sakila.category AS CA
JOIN sakila.film_category AS CF
ON CA.category_id = CF.category_id
JOIN sakila.film AS FI
ON CF.film_id = FI.film_id
ORDER BY FI.title;

-- 2 -Crie uma view chamada film_info utilizando as tabelas actor , film_actor e film do banco de dados sakila . Sua view deve exibir o actor_id , o nome completo do ator ou da atriz em uma coluna com o ALIAS actor e o título dos filmes. Os resultados devem ser ordenados pelos nomes de atores e atrizes. Use a imagem a seguir como referência.

CREATE VIEW film_info AS 
SELECT 
	AC.actor_id,
    CONCAT(AC.first_name, ' ', AC.last_name) AS `actor`,
    FI.title
FROM sakila.actor as AC
JOIN sakila.film_actor as FA
ON FA.actor_id = AC.actor_id
JOIN sakila.film AS FI
ON FI.film_id = FA.film_id
ORDER BY `actor`;

-- 3 - Crie uma view chamada address_info que faça uso das tabelas address e city do banco de dados sakila . Sua view deve exibir o address_id , o address , o district , o city_id e a city . Os resultados devem ser ordenados pelo nome das cidades. Use a imagem abaixo como referência.

CREATE VIEW addres_info AS
SELECT
	AD.address_id,
    AD.address,
    AD.district,
    CI.city_id,
    CI.city
FROM sakila.address AS AD
JOIN sakila.city AS CI
ON AD.city_id = CI.city_id
ORDER BY CI.city;

-- 4 -Crie uma view chamada movies_languages , usando as tabelas film e language do banco de dados sakila . Sua view deve exibir o título do filme , o id do idioma e o idioma do filme , como na imagem a seguir.

CREATE VIEW movies_languages AS
SELECT
	FI.title,
    LA.language_id,
    LA.name
FROM sakila.film AS FI
JOIN sakila.language AS LA
ON FI.language_id = LA.language_id;


-- Desafios sobre INDEX

-- 1 -Verifique o impacto de um FULLTEXT INDEX na tabela category (banco de dados sakila ), adicionando-o na coluna name . Após ter adicionado o índice, mensure o custo da query utilizando o execution plan , como já foi feito em lições anteriores. Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.

CREATE FULLTEXT INDEX idex_name ON sakila.category(name);

SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');

SELECT *
FROM sakila.category
WHERE name LIKE '%action%';

-- 2 - Verifique o impacto de um INDEX na tabela address (banco de dados sakila ) adicionando-o na coluna postal_code . Após ter adicionado o índice, mensure o custo da query utilizando o execution plan, como já foi feito em lições anteriores. Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.

CREATE INDEX index_postal ON sakila.address(postal_code);


-- Mensure o custo com a seguinte query:
SELECT *
FROM sakila.address
WHERE postal_code = '36693';

ALTER TABLE sakila.address DROP INDEX index_postal;

SHOW INDEX FROM sakila.address;

-- Desafios sobre ALTER TABLE

-- 1 - Escreva uma query SQL para alterar na tabela localtions o nome da coluna street_address para address , mantendo o mesmo tipo e tamanho de dados.

DESC hr.locations;

ALTER TABLE hr.locations CHANGE STREET_ADDRESS ADDRESS VARCHAR(40);

-- 2 - Escreva uma query SQL para alterar o nome da coluna region_name para region , mantendo o mesmo tipo e tamanho de dados.

DESC hr.regions;

ALTER TABLE hr.regions CHANGE REGION_NAME REGION VARCHAR(25);

-- 3 - Escreva uma query SQL para alterar o nome da coluna country_name para country , mantendo o mesmo tipo e tamanho de dados.

DESC hr.countries;

ALTER TABLE hr.countries CHANGE COUNTRY_NAME COUNTRY VARCHAR(40);
