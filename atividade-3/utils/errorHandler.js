exports.errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    // Erro específico de constraint (ex: email duplicado)
    if (err.code === 'SQLITE_CONSTRAINT') {
        return res.status(409).json({ message: 'Conflito de dados. O email fornecido já existe.' });
    }

    // Erro genérico do servidor
    res.status(500).json({ message: 'Algo deu errado no servidor!' });
};