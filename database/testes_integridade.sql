cpf VARCHAR(14) NOT NULL UNIQUE



INSERT INTO paciente (nome, cpf)
VALUES ('João', '123.456.789-00');

INSERT INTO paciente (nome, cpf)
VALUES ('Maria', '123.456.789-00');



INSERT INTO paciente (nome)
VALUES ('João');



INSERT INTO medico (id_hospital, crm, nome)
VALUES (99999, '12345', 'Dr. João');
