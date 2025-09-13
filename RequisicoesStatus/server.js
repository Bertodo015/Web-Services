const express = require('express');
const app = express();
const port = 3000;

//Middleware para parsear JSON
app.use(express.json());

//Simulação de Banco de Dados
let usuarios = [
    {id: 1, nome: 'Alice'},
    {id: 2, nome: 'Bruno'},
];

//Rotas da API de Usuários (Read)

//[Get] /usuarios - LER todos os usuários (Read)
app.get('/usuarios', (req, res) => {
    res.status(200).json(usuarios);
});

//[POST] /usuarios - CRIAR un novo usuário (Create)
app.post('/usuarios', (req, res) => {
    const novoUsuario = {
        id: usuarios.lenght + 1,
        nome: req.body.nome
    };

    if (!novoUsuario.nome) {
        return res.status(400).json({ erro: 'O campo "nome" é obrigatório!'});
    }

    usuarios.push(novoUsuario);
    //Retorna 201 Created com o recurso criado
    res.status(201).json(novoUsuario);
});

//Rotas de demonstração HTTP

//Rota geral para identificar o método HTTP utilizado
app.all('/', (req, res) => {
    const method = req.method;
    res.status(200).send(`O método utilizado na raiz (/) foi: ${method}`);
});

//Rota para demonstrar manipulação de cabeçalhos
app.get('/headers', (req, res) => {
    const userAgent = req.get('User-Agent');
    res.setHeader('X-Custom-Header', 'Aula de Web Services');
    res.status(200).send(`Seu User-Agent é: ${userAgent}`);
});

//Rota para simular erro interno do servidor
app.get('/500', (req, res) => {
    res.status(500).send('Internal Server Error');
});

//Rota dinâmica para testar qualquer código de status
app.get('/status/:code', (req, res) => {
    const code = parseInt(req.params.code, 10);
    //Validação para evitar que o servidor quebre com códigos inválidos
    if (code >= 100 && code < 600) {
        res.status(code).send(`Resposta com código de status HTTP: ${code}`);
    } else {
        res.status(400).send(`Resposta com código inválido: ${code}`);
    }
});

//Tratamento de erros

//Middleware para tratar rotas não encontradas (404)
//Deve ser o último, após todas as outras rotas.
app.use((req, res, next) => {
    res.status(404).json({erro: 'Rota não encontrada.'});
});

//Inicialização do servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    console.log('Use uma ferramenta como Insomnia ou Postman para testar as rotas!');
});