/*
//cria tabela de banco de dados
CREATE TABLE usuarios(
        nome VARCHAR(50),
        email VARCHAR(100),
        idade INT
);
CREATE TABLE npc(
        nome VARCHAR(50),
        raça VARCHAR(100),
        hp INT,
        mp INT,
        item VARCHAR(50)
);


//isere dados na tabela banco de dados

INSERT INTO usuarios(nome,email,idade) VALUES(
        "Belinha",
        "email@email",
        2
);

INSERT INTO npc(nome,raça,hp,mp,item) VALUES(
        "Tom",
        "humano",
        10,
        5,
        "faca"

);

//busca um dado em especifico com WHERE

SELECT * FROM usuarios WHERE idade <=3;
SELECT * FROM usuarios WHERE idade >=50;
SELECT * FROM usuarios WHERE nome ="Naima";

///deleta 
DELETE FROM npc WHERE nome="Hank";

///deleta um item da tabela
UPDATE npc SET nome="Elon" WHERE item="arco";

*/