'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Step extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Step.belongsTo(models.Module, {
        as: 'module',
        foreignKey: 'moduleId'
      });
      
      Step.belongsTo(models.Startup, {
        as: 'currentStep',
        foreignKey: 'id'
      });
      
      Step.hasOne(models.Task, {
        as: 'task',
        foreignKey: 'id'
      });
    }
  };
  Step.init({
    moduleId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    summary: DataTypes.TEXT,
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Step',
  });
  return Step;
};