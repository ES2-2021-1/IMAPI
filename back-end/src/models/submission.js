'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Submission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Submission.belongsTo(models.Startup, {
        as: 'startup',
        foreignKey: 'startupId',
      });
      Submission.belongsTo(models.Task, {
        as: 'task',
        foreignKey: 'taskId',
      });
    }
  };
  Submission.init({
    submissionDate: DataTypes.DATE,
    feedBack: DataTypes.TEXT,
    taskId: DataTypes.INTEGER,
    startupId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Submission',
  });
  return Submission;
};