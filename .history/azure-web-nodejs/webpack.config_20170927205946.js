module.exports = {
  context   : path.join(__dirname),
  devtool   : 'cheap-module-source-map',
  externals : {
    react       : 'React',
    'react-dom' : 'ReactDOM'
  },
  output    : {
    libraryTarget : 'umd'
  },
  resolve   : {
    extensions : ['.js', '.jsx']
  },
  module    : {
    loaders : [
      {
        test    : /(\.js|\.jsx)$/,
        exclude : /(node_modules)/,
        loader  : 'babel-loader'
      },
      {
        test   : /\.json$/,
        loader : 'json-loader'
      },
      {
        test    : /\.yaml$/,
        include : path.resolve('data'),
        loader  : 'yaml'
      }
    ]
  },
  plugins   : []
};
