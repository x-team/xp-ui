const path = require('path')

const base = require('./webpack.config')

module.exports = {
  entry: './src/index.js',
  devtool: 'source-maps',
  mode: 'production',
  output: {
    path: path.resolve('./lib'),
    filename: 'xp-ui.js',
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
