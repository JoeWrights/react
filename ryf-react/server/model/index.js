//连接数据库
const Sequelize = require('sequelize');
//koa json数据
//数据库映射对象，在路由配置之前引入，在路由之前执行，js和sql不太好交流
const sequelize = new Sequelize('antd', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: true,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    timestamps: false
  }
});

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully');
}).catch(err => {
  console.log('Unable to connect to the database', err);
});

module.exports = sequelize;
