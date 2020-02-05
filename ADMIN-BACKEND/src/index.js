require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');

const api = require('./api');

const app = new Koa();

// 환경변수를 불러옵니다.
const { PORT: port } = process.env;

const router = new Router();
router.use('/api', api.routes());
// middleware
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () => {
  console.log(`✅  heurm server is listening to port ${port}`);
});