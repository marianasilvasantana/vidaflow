INSERT INTO paciente (nome, cpf)
VALUES ('João da Silva', '123.456.789-00');



SELECT * FROM paciente;



UPDATE paciente
SET telefone = '44999999999'
WHERE cpf = '123.456.789-00';



DELETE FROM paciente
WHERE cpf = '123.456.789-00';
