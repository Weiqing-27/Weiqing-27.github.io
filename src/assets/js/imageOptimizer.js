const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

(async () => {
  await imagemin(['src/assets/images/*.{jpg,png}'], {
    destination: 'src/assets/optimized',
    plugins: [imageminWebp({quality: 75})]
  });
  console.log('图片优化完成！');
})();