/*Define o nome do banco de dados*/

const database = 'BD3-NoSQL-Produtos'

/*Define o nome da collection*/

const collection = 'bd3-NoSQL-atv7'

/*Acessa o banco de dados*/

use(database)

/*Procura os dados com especificações*/

db[collection].find({"preco": {$gt:700}})

db[collection].find({"preco": {$lt:450}})

db[collection].find({"preco": {$gte:500, $lte:950}})