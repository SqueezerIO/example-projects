
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  module: {
    loaders: [{
      test: /\.js|\.jsx$/,
      loaders: ['babel-loader'],
      include: __dirname,
      exclude: /node_modules/
    }]
  },
  output: {
    libraryTarget: 'commonjs'
  }
};
