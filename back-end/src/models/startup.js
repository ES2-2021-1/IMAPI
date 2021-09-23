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
        as: 'mentor',
        foreignKey: 'mentorId'
      });
      Startup.belongsTo(models.User, {
        as: 'owner',
        foreignKey: 'ownerId'
      });
      Startup.hasOne(models.Step, {
        as: 'currentStep',
        foreignKey: 'id'
      });
    }
  };
  Startup.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    state: DataTypes.BOOLEAN,
    pitchLink: DataTypes.STRING,
    ownerId: DataTypes.INTEGER,
    mentorId: DataTypes.INTEGER,
    currentStepId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Startup',
  });
  return Startup;
};