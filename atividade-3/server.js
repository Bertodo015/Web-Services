const express = require('express');
const sequelize = require('./config/database');
const Tutorial = require('./models/tutorial');

const app = espress();
const port = 3000;

app.use(espress.json());
//Sincronizar o modelo com o banco de dados
sequelize.sync().then(() => {
    console.log('Banco de dados sincronizado');
}); //rota de teste
app.get('/', (req,res) => {
    res.send('Hello World!');
});

//CREATE - Criar um novo tutorial
app.post('/tutorials', async (req, res) => {
    try {
        const tutorial = await Tutorial.create(req.body);
        res.send(201).json(tutorial);
    } catch (erro) {
        res.status(400).json({error: error.message});
    }
});