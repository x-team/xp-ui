import '../src/styles/fonts.js'

import { configure, addDecorator, addParameters } from '@storybook/react'
import { create } from '@storybook/theming'
import { withInfo } from '@storybook/addon-info'
import { withConsole } from '@storybook/addon-console'
import { withKnobs } from '@storybook/addon-knobs'

// Show additional information for stories: usage or other types of documentation alongside the story
addDecorator(
  withInfo({
    header: false
  })
)

// Redirect console output into Action Logger Panel
addDecorator((storyFn, context) => withConsole()(storyFn)(context))

// Add the `withKnobs` decorator to add knobs support to all stories
addDecorator(withKnobs)

addParameters({
  options: {
    theme: create({
      base: 'light',
      /**
       * name to display in the top left corner
       * @type {String}
       */
      brandTitle: 'XP Components Library',
      /**
       * URL for name in top left corner to link to
       * @type {String}
       */
      brandUrl: 'https://x-team.com/'
    }),
    /**
     * display panel that shows a list of stories
     * @type {Boolean}
     */
    showNav: true,
    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showPanel: true,
    /**
     * regex for finding the hierarchy separator
     * @example:
     *   null - turn off hierarchy
     *   /\// - split by `/`
     *   /\./ - split by `.`
     *   /\/|\./ - split by `/` or `.`
     * @type {Regex}
     */
    hierarchySeparator: /\//,
    /**
     * regex for finding the hierarchy root separator
     * @example:
     *   null - turn off multiple hierarchy roots
     *   /\|/ - split by `|`
     * @type {Regex}
     */
    hierarchyRootSeparator: /\|/,
    /**
     * sidebar tree animations
     * @type {Boolean}
     */
    sidebarAnimations: true,
    /**
     * enable/disable shortcuts
     * @type {Boolean}
     */
    enableShortcuts: true, // true by default
    isFullscreen: false,
    panelPosition: 'bottom',
    isToolshown: true
  },
  backgrounds: [
    { name: 'white', value: '#fff', default: true },
    { name: 'black', value: '#000' },
    { name: 'instagram', value: '#00aced' },
    { name: 'facebook', value: '#3b5998' }
  ]
})

// Load stories dynamically
const reqStyleguides = require.context('../src/components/styleguides', true, /\.stories\.js$/)
const reqUI = require.context('../src/components/ui', true, /\.stories\.js$/)
const reqForm = require.context('../src/components/forms', true, /\.stories\.js$/)

function loadStories () {
  // Order matters here - the order components are displayed
  // in the menu is the same as they are required here
  const req = ctx => ctx.keys().forEach(filename => ctx(filename))
  req(reqStyleguides)
  req(reqUI)
  req(reqForm)
}

configure(loadStories, module)
