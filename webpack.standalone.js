const path = require('path')

const base = require('./webpack.config')

module.exports = {
  entry: {
    all: './src/index.js',
    fonts: './src/styles/fonts.js',
    registration: './src/registration.js',
    CustomSelector: './src/components/ui/CustomSelector',
    SkillsSelector: './src/components/ui/SkillsSelector',
    TextareaEditor: './src/components/ui/TextareaEditor/TextareaEditor',
    Timeframe: './src/components/ui/Timeframe',
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
