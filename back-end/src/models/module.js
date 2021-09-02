'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Module extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Module.hasMany(models.Step, {
        as: 'step',
        foreignKey: 'moduleId'
      });
    }
  };
  Module.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Module',
  });
  return Module;
};