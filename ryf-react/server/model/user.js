const Sequelize = require('sequelize');

const sequelize = require('./index');

//数据表和对象的映射，sequelize可以把json编译成sql语句，OEM
const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  },
  username: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  },
  address: {
    type: Sequelize.STRING
  },
  isdelete: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
});

module.exports = User;

