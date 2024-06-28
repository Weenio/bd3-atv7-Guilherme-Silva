/*Define o nome do banco de dados*/

const database = 'BD3-NoSQL-Produtos'

/*Define o nome da collection*/

const collection = 'bd3-NoSQL-atv7'

/*Acessa o banco de dados*/

use(database)

db[collection].insertMany(
  [
    {
        "id": 1,
        "nome": "Smartphone XZ Pro",
        "descricao": "Um smartphone avançado com câmera de alta resolução e desempenho rápido.",
        "preco": 799.99
    },
    {
        "id": 2,
        "nome": "Notebook UltraSlim",
        "descricao": "Notebook leve e poderoso, perfeito para trabalho e entretenimento.",
        "preco": 899.50
    },
    {
        "id": 3,
        "nome": "Câmera DSLR Profissional",
        "descricao": "Câmera digital com sensor de última geração e qualidade de imagem excepcional.",
        "preco": 699.95
    },
    {
        "id": 4,
        "nome": "Smart TV 4K",
        "descricao": "TV com resolução 4K para uma experiência de visualização imersiva.",
        "preco": 599.75
    },
    {
        "id": 5,
        "nome": "Fone de Ouvido Bluetooth",
        "descricao": "Fones de ouvido sem fio com cancelamento de ruído e alta fidelidade sonora.",
        "preco": 249.99
    },
    {
        "id": 6,
        "nome": "Tablet SuperLite",
        "descricao": "Tablet fino e portátil com tela de alta definição e longa duração de bateria.",
        "preco": 449.00
    },
    {
        "id": 7,
        "nome": "Impressora Multifuncional",
        "descricao": "Impressora que imprime, digitaliza e copia com qualidade profissional.",
        "preco": 349.80
    },
    {
        "id": 8,
        "nome": "Console de Videogame NextGen",
        "descricao": "Console de nova geração com gráficos incríveis e jogabilidade avançada.",
        "preco": 799.00
    },
    {
        "id": 9,
        "nome": "Caixa de Som Bluetooth",
        "descricao": "Caixa de som portátil com conexão Bluetooth e resistência à água.",
        "preco": 159.95
    },
    {
        "id": 10,
        "nome": "Monitor Gamer UltraWide",
        "descricao": "Monitor com taxa de atualização alta e cores vibrantes, ideal para jogos.",
        "preco": 999.99
    }
]
)
