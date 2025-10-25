const { Sequelize } = require('sequelize');

//Cria uma instância no Sequelize
const sequelize = new Sequelize({
    dialect:'sqlite', 
    storage:'database.sqlite'
});

module.exports = sequelize;