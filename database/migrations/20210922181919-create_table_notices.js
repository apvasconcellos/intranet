'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('notices', { 
        
        id: {
          primaryKey:true,
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull:false,
          autoIncrement: true
        },
        titulo: {
          type: Sequelize.STRING,
          allowNull:false,
        },
        data: {
          type: Sequelize.DATE,
          allowNull:false,
        },
        texto: {
          type: Sequelize.TEXT,
          allowNull:false,
        },
        userId: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull:false,
          references: {
            model: 'users', 
            key: 'id'
          }
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
    await queryInterface.dropTable('notices');
  }
};
