const path = require('path')

const base = require('./webpack.config')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('./lib'),
    filename: 'auto-ui.js',
    library: 'auto-ui',
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
