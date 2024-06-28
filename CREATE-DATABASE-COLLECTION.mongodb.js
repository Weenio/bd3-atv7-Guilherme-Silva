/*Define o nome do banco de dados*/

const database = 'BD3-NoSQL-Produtos'

/*Define o nome da collection*/

const collection = 'bd3-NoSQL-atv7'

/*Acessa o banco de dados*/

use(database)

/*Cria a collection*/

db.createCollection(collection)