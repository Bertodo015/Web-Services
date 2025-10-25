//Importar a classe DataTypes do pacote 'sequelize
const { DataTypes } = require('sequelize');

//Importar a instância sequelize configurada no arquivo 'database.js
const sequelize = require('../config/database');

//Define um novo modelo chamado 'Tutorial' com os campos 'title' e 'description'
const Tutorial = sequelize.define('Tutorial', {
    //Define o campo 'title' como uma string que não pode ser nula
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    //Define o campo 'description' como uma string, mas permite que seja nula
    description: {
        type: DataTypes.STRING
    }
});

