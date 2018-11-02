import { configure, addDecorator } from '@storybook/react'
import { configureViewport } from '@storybook/addon-viewport'
import { withOptions } from '@storybook/addon-options'
import { withBackgrounds } from '@storybook/addon-backgrounds'
import { withInfo } from '@storybook/addon-info'
import { withConsole } from '@storybook/addon-console'
import { withNotes } from '@storybook/addon-notes'

// Show additional information for stories: usage or other types of documentation alongside the story
addDecorator(
  withInfo({
    header: false
  })
)

// Redirect console output into Action Logger Panel
addDecorator((storyFn, context) => withConsole()(storyFn)(context))

// Add the withNotes decorator to all stories
/**
storiesOf('Component', module)
  .add('With Markdown', () => <Component />, {
    notes: { markdown: someMarkdownText }
  })
*/
addDecorator(withNotes)

// Customize UI
addDecorator(
  withOptions({
    /**
     * name to display in the top left corner
     * @type {String}
     */
    name: 'XP Components Library',
    /**
     * URL for name in top left corner to link to
     * @type {String}
     */
    url: 'https://x-team.com/',
    /**
     * display panel that shows a list of stories
     * @type {Boolean}
     */
    showStoriesPanel: true,
    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showAddonPanel: true,
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
    hierarchyRootSeparator: null,
    /**
     * sidebar tree animations
     * @type {Boolean}
     */
    sidebarAnimations: true,
    /**
     * id to select an addon panel
     * @type {String}
     */
    selectedAddonPanel: undefined, // The order of addons in the "Addon panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
    /**
     * enable/disable shortcuts
     * @type {Boolean}
     */
    enableShortcuts: true, // true by default
  })
)

// Add global background presets to all stories
addDecorator(
  withBackgrounds([
    { name: 'white', value: '#fff', default: true },
    { name: 'black', value: '#000' },
    { name: 'instagram', value: '#00aced' },
    { name: 'facebook', value: '#3b5998' }
  ])
)

// Load stories dynamically
const req = require.context('../src/components', true, /\.stories\.js$/)
function loadStories () {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
