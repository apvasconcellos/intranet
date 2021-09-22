'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.createTable('users', { 
      id: {
        primaryKey:true,
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull:false,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false,
      },
        email: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      senha: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      empresa: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      adm: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      createdAt:{
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull:false
      },
      updatedAt: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull:false
      }
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.dropTable('users');
    
  }
};
