'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Annexes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      path: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      type: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      submissionId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Submissions'
          },
          key: 'id'
        }
      },
      taskId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Tasks'
          },
          key: 'id'
        }
      },
      stepId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Steps'
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
    await queryInterface.dropTable('Annexes');
  }
};