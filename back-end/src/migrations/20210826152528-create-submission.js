'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Submissions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      submissionDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      feedBack: {
        type: Sequelize.TEXT
      },
      taskId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        referencer: {
          model: {
            tableName: 'Tasks'
          },
          key: 'id'
        }
      },
      startupId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        referencer: {
          model: {
            tableName: 'Sturtups'
          },
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Submissions');
  }
};