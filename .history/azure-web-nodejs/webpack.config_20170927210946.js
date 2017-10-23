module.exports = {
  devtool   : 'eval',
  externals : {
    react       : 'React',
    'react-dom' : 'ReactDOM'
  },
  resolve   : {
    extensions : ['.js', '.jsx']
  },
  module    : {
    loaders : [
      {
        test    : /(\.js|\.jsx)$/,
        exclude : /(node_modules)/,
        loader  : 'babel-loader',
        query   : {
          cacheDirectory : true,
          compact        : true
        }
      },
      {
        test   : /\.json$/,
        loader : 'json-loader'
      },
      {
        test    : /\.yaml$/,
        loader  : 'yaml'
      }
    ]
  },
  plugins   : []
};
