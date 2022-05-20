# Instalando o Sequelize
    npm init -y
    npm install sequelize pg pg-hstore express
    npm install -g sequelize-cli
    npm install sequelize-cli -D
    npx sequelize-cli init

# Configurar Config JSON para Config.JS e Preencher
    module.exports = {
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "123",
    database: "curso_sequelize",
    define: {
        timestamps: true,
    },
    };

# Criar Banco de Dados
    npx sequelize db:create

# Criar Migration (NOME DA CREATE TABLE)
    npx sequelize migration:create --name=planets

# Criar Tabela No Sequelize / Javascript
    up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("planets", {
      id: {
        type: Sequelize.INTEGER, // Tipo Inteiro
        autoIncrement: true,   // Auto incrimento?
        allowNull: false, // Permitir Nullo?
        primaryKey: true, // Chave Primaria
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      position: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: { // Quando o Dado foi Criado
        type: Sequelize.DATE,
      },
      updatedAt: { // Quando o Dado foi Alterado
        type: Sequelize.DATE,
      },

    });
    },
# Deletar Tabela No Sequelize / Javascript
    donw: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("planets");
    }
# Rodar a Migration Up
    npx sequelize db:migrate

# Roda a Migration Down
    npx sequelize db:migrate:undo

# Estrutura Do Banco De Dados
## Config/Sequelize.js:
    const Sequelize = require('sequelize'); // Exportar o Sequelize
    const database = require('./config') // Receber as informações do Banco de dados

    const sequelize = new Sequelize(database);

    module.exports = sequelize  // Chamar o Arquivo de Configuração para Manipular o Banco de Dados


# Criar Um Arquivo Dentro De Models Para Fazer A Comunicação Com Banco De dados. Ex: Planet.js
## Models/Planet.js:
    const { DataTypes } = require("sequelize"); 
    const sequelize = require("../config/sequelize");

    const Planet = sequelize.define("planets", {
    name: DataTypes.STRING,
    position: DataTypes.INTEGER,

    }); 
    module.exports = Planet;

# Criar um arquivo na Raiz da Pasta para Inserir na Estrutura de comunicação

## Inserir Dados No Banco De Dados
## index.js:

    (async () => {
    const Planet = require("./models/Planet");

    const newPlanet = await Planet.create({
        name: "Terra",
        position: 3,
    });
    console.log(newPlanet);

    })();

# Para Testar O Projeto Rodar o Node No Terminal
    node index

# Fazer Consulta De Todos Os Dados Via Sequelize / Javascript
## index.js:

    (async () => {
    const Planet = require("./models/Planet");

    const seePlanets = await Planet.findAll();

    console.log(seePlanets);

    })();

# Fazer Consulta Por ID Via Sequelize / Javascript
## index.js:

    (async () => {
    const Planet = require("./models/Planet");

    const seePlanets = await Planet.findByPk(4);

    console.log(seePlanets);

    })();

# Fazer Consulta De Dados Por Nome
## index.js:

    (async () => {
    const Planet = require("./models/Planet");

    const seePlanets = await Planet.findAll({
        where: {
            name: "Terra",
        },
    });

    console.log(seePlanets);

    })();

# Atualizar Dados Via Sequelize
## index.js:
    (async () => {
    const Planet = require("./models/Planet");
    
    const updatePlanets = await Planet.findByPk(2);
    updatePlanets.name = "Marte";
    await updatePlanets.save();

    console.log(updatePlanets);

    })();

# Removendo Dados Via Sequelize
    (async () => {
    const Planet = require("./models/Planet");

    const deletePlanets = await Planet.findByPk(4);

    console.log(deletePlanets);

    await deletePlanets.destroy();

    })();