// const path = require('path')

module.exports = {
  // entry: './src/index.js',
  // devtool: 'source-maps',
  // output: {
  //   path: path.resolve('./lib'),
  //   filename: 'xp-ui.js',
  //   library: 'xp-ui',
  //   libraryTarget: 'commonjs2',
  //   umdNamedDefine: true
  // },
  // externals: {
  //   react: {
  //     root: 'React',
  //     commonjs2: 'react'
  //   },
  //   'react-dom': {
  //     root: 'ReactDOM',
  //     commonjs2: 'react-dom'
  //   },
  // },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 50000
        }
      },
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre'
      }
    ]
  }
}
