'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.Startup, {
        as: 'myStartup',
        foreignKey: 'ownerId'
      })

      User.hasOne(models.Startup, {
        as: 'startup',
        foreignKey: 'mentorId'
      })

      User.hasOne(models.Collaborator, {
        as: 'collaborator',
        foreignKey: 'userId'
      })
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    cpf: DataTypes.STRING(11),
    role: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};