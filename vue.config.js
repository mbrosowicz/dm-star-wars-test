// const path = require('path');

module.exports = {
  devServer: {
    port: 3000,
  },
  // css: {
  //   loaderOptions: {
  //     stylus: {
  //       import: [path.resolve(__dirname, './src/assets/styles/variables.styl')],
  //     },
  //   },
  // },
  configureWebpack: {
    devtool: 'source-map',
  },
};
