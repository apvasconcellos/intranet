'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categories', { 
      id:{
        primaryKey:true,
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull:false,
        autoIncrement: true
      },
      nome:{
        type: Sequelize.STRING,
        allowNull:false
      } }); 
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('categories');
  }
};
