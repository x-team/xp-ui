const path = require('path')

const base = require('./webpack.config')

module.exports = {
  devtool: 'source-maps',
  mode: 'production',
  entry: './src/registration.js',
  output: {
    path: path.resolve('./lib/registration'),
    filename: 'index.js',
    library: 'xp-ui',
    libraryTarget: 'commonjs2',
    umdNamedDefine: true
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
