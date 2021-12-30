const task = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    name: {
      type: DataTypes.STRING
    },
    author: {
      type: DataTypes.STRING
    }
  }, { 
    tableName: 'task'
  });

  return Task;
}

module.exports = task;
