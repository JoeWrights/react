const router = require('koa-router')();
const koaBody = require('koa-body');
const User = require('../model/user');
//配置路由数组
//函数中间件提供一个句柄
router.get('/', async(ctx) => {
  //get方式访问
  ctx.body = '首页';
});
router.get('/users', async(ctx) => {
  // ctx.body = '用户';
  const users = await User.findAll({
    where: {
      isdelete: 0
    }
  })
  ctx.body = users;
});

router.post('/user', koaBody(), async(ctx) => {
  //后端需要拿到前端传来的数据
  // console.log(ctx.request.body);
  const user = await User.build(ctx.request.body).save();
  // ctx.body = {
  //   status: 'ok'
  // }
  ctx.body = user;
});
module.exports = router;

