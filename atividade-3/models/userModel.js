const { openDb } = require('../database/database');

// Obter todos os usuários
exports.getAll = async () => {
    const db = await openDb();
    return db.all('SELECT * FROM users');
};

// Obter um usuário por ID
exports.getById = async (id) => {
    const db = await openDb();
    return db.get('SELECT * FROM users WHERE id = ?', [id]);
};

// Criar um novo usuário
exports.create = async (userData) => {
    const { name, email } = userData;
    const db = await openDb();
    const result = await db.run('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
    return { id: result.lastID, name, email };
};

// Atualizar um usuário (PUT)
exports.update = async (id, userData) => {
    const { name, email } = userData;
    const db = await openDb();
    const result = await db.run('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id]);
    if (result.changes === 0) return null;
    return { id, name, email };
};

// Atualizar parcialmente um usuário (PATCH)
exports.patch = async (id, userData) => {
    const user = await this.getById(id);
    if (!user) return null;

    const fields = [];
    const values = [];
    for (const key in userData) {
        if (userData[key] !== undefined && user.hasOwnProperty(key)) {
            fields.push(`${key} = ?`);
            values.push(userData[key]);
        }
    }

    if (fields.length === 0) {
        return user; // Nenhum campo válido para atualizar
    }
    
    values.push(id);
    const db = await openDb();
    await db.run(`UPDATE users SET ${fields.join(', ')} WHERE id = ?`, values);
    
    return this.getById(id);
};

// Excluir um usuário
exports.delete = async (id) => {
    const db = await openDb();
    const result = await db.run('DELETE FROM users WHERE id = ?', [id]);
    return result.changes > 0;
};