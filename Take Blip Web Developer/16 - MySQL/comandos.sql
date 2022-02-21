-- cria uma nova tabela
CREATE TABLE pessoas (
    id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(30) NOT NULL,
    nascimento DATE
)

-- inserir novo valor
INSERT INTO pessoas (nome, nascimento) VALUES ("Nathally", "1990-05-22")

-- selecionar dados na tabela
SELECT * FROM pessoas 

-- atualiza dados da tabela com um id específico
-- sem o comando where todos os nomes da tabela seriam alterados
UPDATE pessoa SET nome='novo nome' WHERE id=2

-- deleta um dado da tabela
DELETE FROM pessoas WHERE id=1

-- ordena os dados de retorno de uma pesquisa ordenados
SELECT * FROM pessoas ORDER BY nome -- ordena pelo nome em ordem crescente
SELECT * FROM pessoas ORDER BY nome DESC -- ordena de forma decrescente

-- alterar a tabela
-- normalmente é uma função executada por adms, não por usuários
-- a função abaixo adiciona um campo na tabela
ALTER TABLE pessoas ADD genero VARCHAR(1) NOT NULL AFTER nascimento

-- agrupa os elementos selecionados
-- e conta quanto valores estão inseridos
SELECT COUNT(id), genero FROM pessoas GROUP BY genero

-- MySQL - Explorando relacionamentos com o workbench

-- no terminal os comandos sempre devem vir seguidos de ;
-- lista os bancos de dados 
show databases;

-- seleciona um banco de dados 
use <nome-do-banco>;

-- mostra tabelas
show tables;

-- os comandos sql podem ser usados no terminal
-- como o comando de criar tabelas
CREATE TABLE cursos(id_curso INT NOT NULL PRIMARY KEY AUTO_INCREMENT, nome VARCHAR(30));

-- deleta uma tabela
DROP TABLE <nome-da-tabela>

-- deleta um banco de dados
DROP DATABASE <nome-do-banco>

-- exclusões não podem ser desfeitas
-- tenha sempre um backup caso precise retornar os dados

-- para selecionar dados de tabelas linkadas
SELECT * FROM `videos` JOIN autor ON videos.fk_autor = autor.id_autor;
-- selecionando apenas campos específicos
SELECT videos.titulo, seo.categorias FROM videos JOIN seo ON videos.fk_seo= seo.id_seo;
-- utilizando mais de uma tabela
SELECT videos.titulo, seo.categorias, autor.nome FROM videos JOIN seo ON videos.fk_seo= seo.id_seo JOIN autor ON videos.fk_autor=autor.id_autor

-- quando temos uma relação de muitos para muitos entre tabelas, como por exemplo uma playlist de vídeos
-- onde vários videos podem estar em mais de uma playlist, precisamos de uma tabela auxiliar que relaciona
-- a foreign key do video com a foreign key da playlist. Realiza-se então a busca com o seguinte comando:
SELECT playlist.nome_pl, videos.titulo FROM playlist JOIN videos_playlist ON playlist.id_pl=videos_playlist.fk_pl
JOIN videos ON videos.id_video=videos_playlist.fk_video; -- Irá retornar os campos nome da playlist e titulo dos videos.

-- também é possível utilizar nome das tabelas simplificadas através da cláusula AS
SELECT * FROM nome_grande_da_tabela AS tabela JOIN outra_tabela AS outra ON tabela.id = outra.id;

-- ao utilizar a cláusula JOIN ou INNER JOIN o banco retornará apenas os dados da tabela que tiverem alguma relação
-- desta forma, caso algum vídeo não esteja relacionado à nenhum canal, ele não será exibido na consulta. Para isso,
-- é necessário utilizar a cláusula outer join, que retorna todos os elementos, mesmo que não se relacionem à nenhuma key
SELECT * FROM tabela RIGHT OUTER JOIN outra_tabela ON tabela.id = outra_tabela.id
-- isso irá retornar uma tabela com os valores relacionados e, na tabela da direita, os valores não relacionados
-- as cláusulas LEFT e RIGHT devem ser utilizadas de acordo com o contexto da tabela. Elas definem se os valores
-- não relacionados serão retornados na tabela da direita ou da esquerda.

-- A cláusula UNION é utilizada para retornas a união de duas consultas na vertical (inútil). Para isso é necessário que elas tenham
-- o mesmo número de colunas, ou que as colunas a serem retornadas sejam definidas nos argumentos da cláusula SELECT
SELECT videos.id, videos.titulo FROM videos LEFT OUTER JOIN videos_canais AS vc ON videos.id_videos = vc.fk_videos
UNION -- comandos podem ser escritos com quebra de linha desde que não haja ;
SELECT canais.id, canais.nome FROM canais RIGHT OUTER JOIN videos_canais AS vc ON canais.id = vc.fk_canais

-- também é possível filtrar as pesquisas com a clausula WHERE
SELECT playlist.nome_pl, videos.titulo FROM playlist JOIN videos_playlist ON playlist.id_pl=videos_playlist.fk_pl
JOIN videos ON videos.id_video=videos_playlist.fk_video WHERE playlist.id = 2;
-- irá retornar apenas os videos da playlist com id = 2

