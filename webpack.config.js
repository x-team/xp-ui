module.exports = {
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.png$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  }
}
