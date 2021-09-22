'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categories_products', { 
    id: {
      primaryKey:true,  
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull:false,
      autoIncrement: true
    },
    categoriesId: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull:false,
      references:{
        model: 'categories',
        key: 'id'
      }
    },
    productsId: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull:false,
      references:{
        model: 'products',
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
    await queryInterface.dropTable('categories_products');
    
  }
};
