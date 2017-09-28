const snapguidist = require('snapguidist')
const path = require('path')
const config = require('./webpack.config.js')

module.exports = snapguidist({
  components: 'src/components/**/*.js',
  webpackConfig: {
    devtool: 'source-map',
    module: config.module
  }
})
