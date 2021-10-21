-- Exercício 10: Utilizando o INNER JOIN , selecione todas as informações dos filmes com avaliação maior que 8 e que estejam em cartaz.

SELECT M.* FROM Pixar.Movies AS M
JOIN Pixar.BoxOffice AS B
ON M.id = B.movie_id
WHERE B.rating > 8;

-- Exercício 11: Utilizando o SELF JOIN , selecione os títulos e duração dos filmes que possuem o mesmo diretor.

SELECT t1.title, t1.length_minutes, t1.director 
FROM 
	Pixar.Movies AS t1, 
	Pixar.Movies AS t2
WHERE
	t1.director = t2.director
    AND
    t1.id <> t2.id
ORDER BY
	t1.director;
    
    
--  Exercício 12: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem o título dos filmes que arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.


SELECT 
	M.title
FROM 
	Pixar.Movies AS M
JOIN
	Pixar.BoxOffice AS B
ON 
	M.id = B.movie_id
WHERE
	B.domestic_sales + B.international_sales > 500000000
AND
	M.length_minutes > 110;
    
    
SELECT 
	title
FROM 
	Pixar.Movies AS M
WHERE id IN (

SELECT movie_id FROM Pixar.BoxOffice AS B
WHERE 
	domestic_sales + international_sales > 500000000
AND
	M.length_minutes > 115
);
