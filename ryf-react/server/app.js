const Koa = require('koa');
const cors = require('koa-cors');  //解决跨域问题
const app = new Koa();
const router = require('./routers/index');   //Koa路由引入
//http协议：能够提供http服务，能够在浏览器伺服,等待别人拿数据
//组件 中间件 middleware
// const main = ctx => {
//   ctx.response.body = 'Hello World';
// }

// app.use(main);
app.use(cors({
  origin: 'http://localhost:3000',
  exposeHeaderss: ['WWW-Authenticate', 'Server-Authenticate'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}));
app.use(router.routes());
app.listen(3006);
console.log('app started at port 3006');
