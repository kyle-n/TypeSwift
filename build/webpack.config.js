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
    extensions: ['.ts'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '..', '_bundles'),
  },
};

const devConfig = {
  ...sharedConfig,
  entry: {
    'typeswift': './src/index.ts'
  },
  devtool: 'source-map',
  mode: 'development'
};

const prodConfig = {
  ...sharedConfig,
  entry: {
    'typeswift.min': './src/index.ts'
  },
  mode: 'production'
};

module.exports = [devConfig, prodConfig]