const Application = require('waline/vercel');
const cors = require('cors'); // 需要安装cors模块，使用npm install cors

// 允许所有源访问，或者替换'*'以允许特定源访问
const corsOptions = {
  origin: '*', // 或者你的前端应用的源，如'https://eternitytq.github.io'
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // 根据需要允许的方法进行调整
  preflightContinue: false,
  optionsSuccessStatus: 204
};

const app = Application({
  plugins: [],
  async postSave(comment) {
    // do what ever you want after comment saved
  },
});

app.use(cors(corsOptions)); // 应用CORS中间件

module.exports = app;
