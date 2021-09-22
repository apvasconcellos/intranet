'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products_providers', { 
    id: {
      primaryKey:true,  
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull:false,
      autoIncrement: true
    },
    produtosId: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull:false,
      references:{
        model: 'products',
        key: 'id'
      }
    },
    providersId: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull:false,
      references:{
        model: 'providers',
        key: 'id'
      }
    },
    createdAt: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
    updatedAt: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    }
  });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products_providers');
    
  }
};
