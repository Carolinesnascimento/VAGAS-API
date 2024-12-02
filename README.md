## API do Aplicativo VagaCerta

Este projeto é uma API RESTful criada com Node.js, Express e Sequelize que implementa operações CRUD (Create, Read, Update, Delete) para as entidades "Usuários" e "Vagas". O banco de dados utilizado é o SQLite.

## Componentes do grupo

<uL> 
  <li><a href="https://github.com/Carolinesnascimento/">Caroline Souza Nascimento</a></li>
  <li>João Vitor Moraes</li>
  <li>Livio Ribeiro</li>
  <li><a href="https://github.com/duasck">Luis Eduardo Leite Azevedo</a></li>
  <li><a href="https://github.com/victorcsar">Victor César</a></li>
</ul>

### Tecnologias Utilizadas

- Node.js
- Express
- Sequelize
- SQLite
- Body-parser
- UUID para geração de IDs únicos

### Estrutura do Projeto

Abaixo está a estrutura básica do projeto:

- **server.js** - Arquivo principal da aplicação que inicia o servidor.
- **config/database.js** - Configuração do Sequelize e do banco de dados SQLite.
- **routes/usuarios.js** - Rotas para o CRUD de Usuários.
- **routes/vagas.js** - Rotas para o CRUD de Vagas.

## Como baixar o código da API do Aplicativo VagaCerta?

### Instale o Git no seu computador e execute o seguinte comando:

```bash
git clone https://github.com/Carolinesnascimento/VAGAS-API.git
```

### Após clonar o repositório, instale as dependências:

```bash
npm install
```

### Inicie o servidor:
```bash
npm start
```

#### Observações: A API foi configurada para rodar na porta 3000 do computador.
#### Adicionamos no repositório do Github o arquivo “database.sqlite” já povoado para facilitar a correção da atividade e já contém os seguintes dados.


## Usuários
```bash
URL: http://localhost:3000/api/usuarios
```
```bash
[
  {
    "id": 1,
    "nome": "João Silva",
    "email": "joao.silva@example.com",
    "senha": "senha123",
    "createdAt": "2024-11-30T16:09:24.617Z",
    "updatedAt": "2024-12-01T01:29:47.242Z"
  },
  {
    "id": 2,
    "nome": "Carol Souza",
    "email": "carol@gmail.com",
    "senha": "senha123",
    "createdAt": "2024-11-30T16:13:38.799Z",
    "updatedAt": "2024-12-01T13:43:33.212Z"
  },
  {
    "id": 3,
    "nome": "Maria Oliveira",
    "email": "maria.oliveira@example.com",
    "senha": "senha456",
    "createdAt": "2024-11-30T16:23:28.896Z",
    "updatedAt": "2024-11-30T16:23:28.896Z"
  },
  {
    "id": 5,
    "nome": "Carlos Pereira",
    "email": "carlos.pereira@example.com",
    "senha": "senha789",
    "createdAt": "2024-11-30T17:55:12.322Z",
    "updatedAt": "2024-11-30T17:55:12.322Z"
  }
]
```

## Vagas

```bash
URL: http://localhost:3000/api/vagas
```
```bash
[
  {
    "id": 2,
    "titulo": "Desenvolvedor Back-end",
    "descricao": "Desenvolvimento de APIs RESTful utilizando Node.js.",
    "dataCadastro": "2024-06-28T00:00:00.000Z",
    "telefone": "8765-4321",
    "status": "aberta",
    "empresa": "Innovative Tech",
    "createdAt": "2024-11-30T16:21:06.379Z",
    "updatedAt": "2024-11-30T16:21:06.379Z"
  },
  {
    "id": 3,
    "titulo": "Analista de Sistemas",
    "descricao": "Análise e levantamento de requisitos de sistemas.",
    "dataCadastro": "2024-06-25T00:00:00.000Z",
    "telefone": "9988-7766",
    "status": "encerrada",
    "empresa": "System Analysts Inc.",
    "createdAt": "2024-11-30T16:21:20.254Z",
    "updatedAt": "2024-11-30T16:21:20.254Z"
  },
  {
    "id": 4,
    "titulo": "Engenheiro de Software",
    "descricao": "Desenvolvimento de software em diversas linguagens.",
    "dataCadastro": "2024-06-20T00:00:00.000Z",
    "telefone": "5544-3322",
    "status": "aberta",
    "empresa": "Global Software Solutions",
    "createdAt": "2024-11-30T16:21:27.097Z",
    "updatedAt": "2024-11-30T16:21:27.097Z"
  },
  {
    "id": 5,
    "titulo": "Suporte Técnico",
    "descricao": "Atendimento e suporte a clientes.",
    "dataCadastro": "2024-06-15T00:00:00.000Z",
    "telefone": "4433-2211",
    "status": "encerrada",
    "empresa": "Customer Support Ltd.",
    "createdAt": "2024-11-30T16:21:33.313Z",
    "updatedAt": "2024-11-30T16:21:33.313Z"
  },
  {
    "id": 6,
    "titulo": "Gerente de Projetos",
    "descricao": "Gestão e coordenação de projetos de TI.",
    "dataCadastro": "2024-06-10T00:00:00.000Z",
    "telefone": "1122-3344",
    "status": "aberta",
    "empresa": "Project Managers Corp.",
    "createdAt": "2024-11-30T16:21:52.029Z",
    "updatedAt": "2024-11-30T16:21:52.029Z"
  },
  {
    "id": 7,
    "titulo": "Designer UX/UI",
    "descricao": "Criação de interfaces e experiências de usuário.",
    "dataCadastro": "2024-06-05T00:00:00.000Z",
    "telefone": "6677-8899",
    "status": "encerrada",
    "empresa": "Creative Designs",
    "createdAt": "2024-11-30T16:21:58.895Z",
    "updatedAt": "2024-11-30T16:21:58.895Z"
  },
  {
    "id": 8,
    "titulo": "Analista de Dados",
    "descricao": "Análise e interpretação de dados empresariais.",
    "dataCadastro": "2024-06-01T00:00:00.000Z",
    "telefone": "5566-7788",
    "status": "aberta",
    "empresa": "Data Analysts LLC",
    "createdAt": "2024-11-30T16:22:06.517Z",
    "updatedAt": "2024-11-30T16:22:06.517Z"
  }
]
```
