const Sequelize = require('sequelize'); // Exportar o Sequelize
const database = require('./config') // Receber as informações do Banco de dados

const sequelize = new Sequelize(database);

module.exports = sequelize  // Chamar o Arquivo de Configuração para Manipular o Banco de Dados
