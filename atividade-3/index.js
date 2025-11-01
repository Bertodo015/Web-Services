const express = require('express');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users');
const { errorHandler } = require('./utils/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(bodyParser.json());

// Rotas da API
app.use('/api/users', usersRoutes);

// Middleware de tratamento de erros (deve ser o último)
app.use(errorHandler);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log('Para inicializar o banco de dados, execute: npm run init-db');
});