
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

module.exports = {
  target: 'node',
  externals: [
    nodeExternals()
  ],
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
    new webpack.optimize.CommonsChunkPlugin({
      names: ['react'],
      chunks: ['react'],
      minChunks: 2
    }),
    new webpack.ProvidePlugin({
      "React": "react"
    })
  ]
};
