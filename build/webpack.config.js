const path = require('path');

const sharedConfig = {
  resolve: {
    extensions: ['.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '..', '_bundles'),
  },
};

const devConfig = {
  ...sharedConfig,
  entry: {
    'typeswift': './lib/index.js'
  },
  devtool: 'source-map',
  mode: 'development'
};

const prodConfig = {
  ...sharedConfig,
  entry: {
    'typeswift.min': './lib/index.js'
  },
  mode: 'production'
};

module.exports = [devConfig, prodConfig]