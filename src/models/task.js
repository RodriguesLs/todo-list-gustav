const task = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    name: {
      type: DataTypes.STRING
    },
    author: {
      type: DataTypes.STRING
    },
    done: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    date: {
      type: DataTypes.DATE
    } 
  }, { 
    tableName: 'task'
  }); 

  return Task;
}

module.exports = task;  
