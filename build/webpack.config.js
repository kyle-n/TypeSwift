const path = require('path');

module.exports = {
  entry: './src/index.ts',
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
  mode: 'development',
  output: {
    filename: 'typeswift.js',
    path: path.resolve(__dirname, '..', '_bundles'),
  },
};