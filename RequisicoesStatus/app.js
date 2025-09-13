const express = require('express');
const app = express();
const port = 3000;

//Middleware para parsear JSON
app.use(express.json());

//Rota geral
app.all('/', (req, res) => {
    const method = req.method;
    res.status(200).send(`O método utilizado foi: ${method}`);
});

//Rota para código 200 (OK)
app.get('/200', (req, res) => {

    res.status(200).send('OK');
});

//Rota para código 404 (Not Found)
app.get('/404', (req, res) => {
    res.status(404).send('Not Found');
});

//Rota para código 500 (Internal Server Error)
app.get('/500', (req, res) => {
    res.status(500).send('Internal Server Error');
});

//Rotas erros
app.get('/erros/:code', (req, res) => {
    const code = parseInt(req.params.code, 10);
    res.status(code).send(`Código de erro HTTP: ${code}`);
});

app.listen(port, () => {
    console.log(`Servidor HTTP codes rodando em http://localhost:${port}`);    
});