const Router = require('koa-router'); 

const auth = new Router();

auth.get('/', (ctx) => {
  ctx.body = '✅ Welcome to auth!!';
});

module.exports = auth;