const path = require('path');

const sharedConfig = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'build/tsconfig.bundle.json'
        }
      },
    ],
  },
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