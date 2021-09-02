'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Collaborator extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Collaborator.belongsTo(models.User, {
        as: 'collaborator',
        foreignKey: 'userId'
      })

      Collaborator.belongsTo(models.Startup, {
        as: 'startup',
        foreignKey: 'startupId'
      })
    }
  };
  Collaborator.init({
    userId: DataTypes.INTEGER,
    startupId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Collaborator',
  });
  return Collaborator;
};