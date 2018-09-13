const snapguidist = require('snapguidist')
const path = require('path')

const config = require('./webpack.config.js')

module.exports = snapguidist({
  title: 'XP Components Library',
  components: 'src/components/**/*.js',
  sections: [
    {
      name: 'UI Components',
      components: 'src/components/ui/**/*.js'
    },
    {
      name: 'Forms',
      components: 'src/components/forms/**/*.js'
    }
  ],
  webpackConfig: {
    devtool: 'source-map',
    module: config.module
  },
  ignore: [
    '**/components/AdminScreen.js',
    '**/components/ListsScreen.js',
    '**/components/forms/SolutionForm/Title.js',
    '**/components/ui/TextareaEditor/MediumEditorWrapper.js',
    '**/components/ui/Tabs/index.js',
    '**/components/ui/Tabs/Tab.js'
  ]
})
