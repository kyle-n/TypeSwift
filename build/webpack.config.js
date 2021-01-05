const path = require('path');

const sharedConfig = {
  output: {
    path: path.resolve(__dirname, '..', '_bundles'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'TypeSwift',
    umdNamedDefine: false
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
};

const devConfig = {
  ...sharedConfig,
  entry: {
    'typeswift': './lib/index.js'
  },
  mode: 'development',
  devtool: 'source-map',
};

const minifiedConfig = {
  ...sharedConfig,
  entry: {
    'typeswift.min': './lib/index.js'
  },
  mode: 'production'
};

module.exports = [devConfig, minifiedConfig];
