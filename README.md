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


