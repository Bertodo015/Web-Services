Markdown
# API RESTful com Node.js, Express e SQLite

Esta é uma API de exemplo para gerenciar usuários, construída com foco em boas práticas, estrutura modular e persistência de dados usando SQLite.

## Funcionalidades

-   **CRUD Completo**: Crie, Leia, Atualize e Delete usuários.
-   **Verbos HTTP**: Utiliza `GET`, `POST`, `PUT`, `PATCH` e `DELETE` corretamente.
-   **Persistência de Dados**: Armazena informações em um banco de dados SQLite.
-   **Validação**: Middleware para validar os dados de entrada.
-   **Tratamento de Erros**: Middleware global para capturar e tratar erros da aplicação.
-   **Estrutura Modular**: Código organizado em rotas, controladores, modelos e middlewares.

## Pré-requisitos

-   [Node.js](https://nodejs.org/) (versão 14 ou superior)
-   [npm](https://www.npmjs.com/) (geralmente instalado com o Node.js)

## Instalação e Execução

1. **Instale as dependências:**
    ```bash
    npm install
    ```

2.  **Inicialize o banco de dados:**
    Este comando criará o arquivo `dev.db` e a tabela `users` com alguns dados iniciais.
    ```bash
    npm run init-db
    ```

3.  **Inicie o servidor:**
    ```bash
    npm start
    ```
    O servidor estará rodando em `http://localhost:3000`.

## Endpoints da API

Aqui estão os endpoints disponíveis e exemplos de como usá-los com `curl`.

### 1. Obter todos os usuários

-   **Método**: `GET`
-   **Endpoint**: `/api/users`
-   localhost:3000/api/users
    ```

### 2. Obter um usuário por ID

-   **Método**: `GET`
-   **Endpoint**: `/api/users/:id`
-   localhost:3000/api/users/2
    ```

### 3. Criar um novo usuário

-   **Método**: `POST`
-   **Endpoint**: `/api/users`
-   **Corpo da requisição (JSON):**
    ```json
    {
      "name": "Alice Wonder",
      "email": "alice@example.com"
    }
    ```
-   localhost:3000/api/users
    ```

### 4. Atualizar um usuário (Substituição Total)

-   **Método**: `PUT`
-   **Endpoint**: `/api/users/:id`
-   **Corpo da requisição (JSON):**
    ```json
    {
      "name": "John Smith",
      "email": "john.smith@newdomain.com"
    }
    ```
-   localhost:3000/api/users/1
    ```

### 5. Atualizar um usuário parcialmente

-   **Método**: `PATCH`
-   **Endpoint**: `/api/users/:id`
-   **Descrição**: Atualiza apenas os campos enviados no corpo da requisição.
-   **Corpo da requisição (JSON):**
    ```json
    {
      "email": "jane.doe.updated@example.com"
    }
    ```
-   localhost:3000/api/users/2
    ```

### 6. Excluir um usuário

-   **Método**: `DELETE`
-   **Endpoint**: `/api/users/:id`
-   **Exemplo com curl:**
    localhost:3000/api/users/1
    ```