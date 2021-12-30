const sequelize = require('../../config/sequelize');
const Sequelize = require('sequelize');

const Task = require('./task');

const task = Task(sequelize, Sequelize.DataTypes);

const db = {
  task,
  sequelize
}

module.exports = db;
