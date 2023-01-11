const path = require('node:path');

const isDev = process.env.NODE_ENV.includes('development');

const webpackConfig = {
  target: ['web'],
  mode: isDev ? 'development' : 'production',
  devtool: isDev ? 'eval-source-map' : false,
  entry: './src/index.js',
  output: {
    path: path.resolve(isDev ? './public' : './build'),
    filename: isDev ? '[name].bundle.js' : '[name].min.js',
  },
};

module.exports = webpackConfig;
