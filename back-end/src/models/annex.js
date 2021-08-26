'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Annex extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Annex.belongsTo(models.Submission, {
        as: 'submission',
        foreignKey: 'submissionId'
      });
      Annex.belongsTo(models.Assignment, {
        as: 'assignment',
        foreignKey: 'assignmentId'
      });
      Annex.belongsTo(models.Step, {
        as: 'step',
        foreignKey: 'stepId'
      });
    }
  };
  Annex.init({
    path: DataTypes.STRING,
    type: DataTypes.INTEGER,
    submissionId: DataTypes.INTEGER,
    assignmentId: DataTypes.INTEGER,
    stepId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Annex',
  });
  return Annex;
};