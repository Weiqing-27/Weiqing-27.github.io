module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5, // Vant 的设计基准（375px 设计稿）
      propList: ['*'],
      exclude: /node_modules/i
    }
  }
}