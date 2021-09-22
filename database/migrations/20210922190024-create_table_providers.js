'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('providers', { 
      id:{ 
        primaryKey:true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      nome:{ 
        type: Sequelize.STRING,
        allowNull:false
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull:false
      },
      email:{ 
        type: Sequelize.STRING,
        allowNull:false
      },
      createdAt:{ 
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      updatedAt:{ 
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      }
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('providers');
     
  }
};
