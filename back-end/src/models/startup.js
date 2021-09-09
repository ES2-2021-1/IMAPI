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
      Startup.belongsTo(models.Step, {
        as: 'currentStep',
        foreignKey: 'currentStepId'
      });
      Startup.hasMany(models.Collaborator, {
        as: 'collaborator',
        foreignKey: 'id'
      })
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
    logoPath: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Startup',
  });
  return Startup;
};