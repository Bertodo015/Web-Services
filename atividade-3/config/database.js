const { Sequelize } = require('sequelize');

//Cria uma intância do Sequelize
const sequelize = new Sequelize({
    dialet:'sqlite', // Define o tipo de banco de dados como SQLite
    storage:'database.sqlite' //Especifica o arquivo onde o banco de dados será armazenado
});

module.exports = sequelize;