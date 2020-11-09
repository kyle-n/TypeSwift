const path = require('path');

module.exports = {
  entry: {
    'swiftlyjs': './src/index.ts',
    'swiftlyjs.min': './src/index.ts'
  },
  output: {
    path: path.resolve(__dirname, '_bundles'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'SwiftlyJS',
    umdNamedDefine: false
  },
  devtool: 'source-map',
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
  mode: 'development'
};
