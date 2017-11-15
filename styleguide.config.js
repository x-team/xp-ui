const snapguidist = require('snapguidist')
const path = require('path')
const config = require('./webpack.config.js')

module.exports = snapguidist({
  title: 'X-Team: Auto UI',
  components: 'src/components/**/*.js',
  webpackConfig: {
    devtool: 'source-map',
    module: config.module
  }
})
