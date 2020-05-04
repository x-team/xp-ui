const path = require('path')

const base = require('./webpack.config')

module.exports = {
  devtool: 'source-maps',
  mode: 'production',
  entry: './src/registration.js',
  output: {
    path: path.resolve('./lib/registration'),
    filename: 'registration.js',
    libraryTarget: 'commonjs2'
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom'
    },
  },
  module: base.module
}
