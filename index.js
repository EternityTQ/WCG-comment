const Application = require('@waline/vercel');
const { VercelRequest, VercelResponse } = require('@vercel/node');
const cors = require('cors');

const app = Application({
  plugins: [],
  async postSave(comment) {
    // do what ever you want after comment saved
  },
});

const allowCors = cors({
  origin: ['http://eternitytq.github.io'], // 你可以添加更多的源
});

module.exports = (req, res) => {
  allowCors(req, res, () => app(req, res));
};
