const path = require('node:path');

const isDev = process.env.NODE_ENV.includes('development');

const devServerConfig = {
  static: ['public'],
  client: {
    overlay: true,
    progress: true,
  },
  liveReload: true,
  compress: true,
  hot: true,
  port: 3000,
};

const webpackConfig = {
  target: ['web'],
  mode: isDev ? 'development' : 'production',
  devtool: isDev ? 'eval-source-map' : false,
  devServer: devServerConfig,
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.wasm'],
  },
  entry: './src/main.jsx',
  output: {
    path: path.resolve('./public'),
    filename: isDev ? '[name].bundle.js' : '[name].min.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};

module.exports = webpackConfig;
