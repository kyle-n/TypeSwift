const path = require('path');
const cloneDeep = require('clone-deep');

const sharedConfig = {
  output: {
    path: path.resolve(__dirname, '_bundles'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'TypeSwift',
    umdNamedDefine: false
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: '/node-modules/'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
};

const config = {
  ...cloneDeep(sharedConfig),
  entry: {
    'typeswift': './src/index.ts'
  },
  mode: 'development',
  devtool: 'source-map',
};

const minifiedConfig = {
  ...cloneDeep(sharedConfig),
  entry: {
    'typeswift.min': './src/index.ts'
  },
  mode: 'production'
};

module.exports = [config, minifiedConfig];
