'use strict';

module.exports = {
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

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("planets");
  }
};
