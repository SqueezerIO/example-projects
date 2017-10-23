
const nodeExternals = require('webpack-node-externals');

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
      names: ['desktop/common', 'desktop/vendor'],
      chunks: ['desktop/index', 'desktop/post'],
      minChunks: 2
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['mobile/common', 'mobile/vendor'],
      chunks: ['mobile/index'],
      minChunks: 2
    })
  ]
};
