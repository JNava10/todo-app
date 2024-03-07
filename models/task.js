'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.User, {
        through: models.UserTask,
        foreignKey: 'taskId',
      });
    }
  }
  Task.init({
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    dueDate: {
      type:  DataTypes.DATE
    },
    completed: {
      type:  DataTypes.BOOLEAN,
    }
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};