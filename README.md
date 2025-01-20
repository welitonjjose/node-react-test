# Biblioteca

## Descrição

Este projeto é uma aplicação que gerencia empréstimos e informações de pessoas. Ele permite que os usuários registrem, visualizem e gerenciem empréstimos, além de associar esses empréstimos a pessoas específicas. A aplicação utiliza o Sequelize como ORM para interagir com o banco de dados.

## Funcionalidades

- **Gerenciamento de Empréstimos**: Criação, leitura, atualização e exclusão de registros de empréstimos.
- **Gerenciamento de Pessoas**: Criação, leitura, atualização e exclusão de registros de pessoas.
- **Relação entre Empréstimos e Pessoas**: Cada empréstimo pode ser associado a uma pessoa, permitindo um melhor controle e organização.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express**: Framework para construção de APIs e aplicações web.
- **Sequelize**: ORM para Node.js que facilita a interação com bancos de dados SQL.
- **SQLite**: Sistema de gerenciamento de banco de dados relacional utilizado para armazenar os dados.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-projeto.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd nome-do-projeto
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. O SQLite não requer configuração de banco de dados, mas você pode ajustar as configurações no arquivo de configuração (ex: `config/database.js`) se necessário.

5. Execute as migrações para criar as tabelas no banco de dados:
   ```bash
   npx sequelize-cli db:migrate
   ```

6. Inicie o servidor:
   ```bash
   npm start
   ```

## Uso

Após iniciar o servidor, você pode acessar a API através de `http://localhost:3000`. Utilize ferramentas como Postman ou Insomnia para testar os endpoints disponíveis.

## Test

Link para executar via postman

```
https://app.getpostman.com/join-team?invite_code=1a539a959519597146ab90d8be45a84bf34ddadc2b8f81ce22c7c136d0796027
```

## Endpoints
 ### Autenticação
- **POST /auth/login**
  - Descrição: Realiza o login de um usuário. O corpo da requisição deve conter as credenciais (ex: username e senha).

- **POST /auth/register**
  - Descrição: Registra um novo usuário. O corpo da requisição deve conter os dados do usuário (ex: username, senha).


### People

- **GET /api/people**
  - Descrição: Retorna uma lista de todas as pessoas cadastradas.
  
- **GET /api/people/:id**
  - Descrição: Retorna os detalhes de uma pessoa específica pelo ID.

- **POST /api/people**
  - Descrição: Cria uma nova pessoa. O corpo da requisição deve conter os dados da pessoa (ex: nome, endereco).

- **PUT /api/people/:id**
  - Descrição: Atualiza os dados de uma pessoa específica pelo ID. O corpo da requisição deve conter os novos dados.

- **DELETE /api/people/:id**
  - Descrição: Remove uma pessoa específica pelo ID.
  - 
  
### Livros

- **GET /api/books**
  - Descrição: Retorna uma lista de todos os livros cadastrados.

- **GET /api/books/:id**
  - Descrição: Retorna os detalhes de um livro específico pelo ID.

- **POST /api/books**
  - Descrição: Cria um novo livro. O corpo da requisição deve conter os dados do livro (ex: título, autor, ano de publicação).

- **PUT /api/books/:id**
  - Descrição: Atualiza os dados de um livro específico pelo ID. O corpo da requisição deve conter os novos dados.

- **DELETE /api/books/:id**
  - Descrição: Remove um livro específico pelo ID.

### Cópias

- **GET /api/copies**
  - Descrição: Retorna uma lista de todas as cópias cadastradas.

- **GET /api/copies/:id**
  - Descrição: Retorna os detalhes de uma cópia específica pelo ID.

- **POST /api/copies**
  - Descrição: Cria uma nova cópia de um livro. O corpo da requisição deve conter os dados da cópia (ex: ID do livro, status).

- **PUT /api/copies/:id**
  - Descrição: Atualiza os dados de uma cópia específica pelo ID. O corpo da requisição deve conter os novos dados.

- **DELETE /api/copies/:id**
  - Descrição: Remove uma cópia específica pelo ID.

### Loan

- **GET /api/loan/report**
  - Descrição: Retorna uma lista de todos os empréstimos dos 3 livros mais emprestados por cada mes.

- **GET /api/loan/:id**
  - Descrição: Retorna os detalhes de um empréstimo específico pelo ID.

- **POST /api/loan**
  - Descrição: Cria um novo empréstimo. O corpo da requisição deve conter os dados do empréstimo (ex: pessoal e book).

- **PUT /api/loan/:id/return**
  - Descrição: Devolucao do livreo emprestado.

