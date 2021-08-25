'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Startup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Startup.belongsTo(models.User, {
        as: 'resMentor',
        foreignKey: 'resMentor'
      });
      Startup.belongsTo(models.User, {
        as: 'owner',
        foreignKey: 'owner'
      });
      Startup.hasOne(models.Step, {
        as: 'currentStep',
        foreignKey: 'currentStep'
      });
    }
  };
  Startup.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    state: DataTypes.BOOLEAN,
    pitchLink: DataTypes.STRING,
    ownerId: DataTypes.INTEGER,
    resMentorId: DataTypes.INTEGER,
    currentStepId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Startup',
  });
  return Startup;
};