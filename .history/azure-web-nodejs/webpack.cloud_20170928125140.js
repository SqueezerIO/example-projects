
const webpack = require('webpack');

module.exports = {
  target: 'node',
  resolve: {
    extensions: ['.js', '.jsx']
  },
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
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react'
    })
  ]
};