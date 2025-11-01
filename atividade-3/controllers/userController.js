const users = require('../models/userModel');

// Envolve as funções do controller para capturar erros assíncronos
const asyncHandler = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

exports.getAllUsers = asyncHandler(async (req, res) => {
    const allUsers = await users.getAll();
    res.json(allUsers);
});

exports.getUserById = asyncHandler(async (req, res) => {
    const user = await users.getById(parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.json(user);
});

exports.createUser = asyncHandler(async (req, res) => {
    const newUser = await users.create(req.body);
    res.status(201).json(newUser);
});

exports.updateUser = asyncHandler(async (req, res) => {
    const updatedUser = await users.update(parseInt(req.params.id), req.body);
    if (!updatedUser) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.json(updatedUser);
});

exports.patchUser = asyncHandler(async (req, res) => {
    const updatedUser = await users.patch(parseInt(req.params.id), req.body);
    if (!updatedUser) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.json(updatedUser);
});

exports.deleteUser = asyncHandler(async (req, res) => {
    const deleted = await users.delete(parseInt(req.params.id));
    if (!deleted) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(204).send();
});