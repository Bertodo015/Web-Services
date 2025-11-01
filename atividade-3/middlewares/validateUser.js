module.exports = (req, res, next) => {
    const { name, email } = req.body;

    if (!name || typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({ message: 'O campo "name" é obrigatório e deve ser um texto válido.' });
    }

    if (!email) {
        return res.status(400).json({ message: 'O campo "email" é obrigatório.' });
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'O formato do email é inválido.' });
    }

    next();
};