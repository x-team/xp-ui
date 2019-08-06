const path = require('path')

const base = require('./webpack.config')

module.exports = {
  entry: {
    all: './src/index.js',
    editor: './src/components/ui/TextareaEditor/TextareaEditor',
    fonts: './src/styles/fonts.js',
    registration: './src/registration.js',
  },
  devtool: 'source-maps',
  mode: 'production',
  output: {
    path: path.resolve('./lib'),
    filename: '[name].js',
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
