import initStoryshots from '@storybook/addon-storyshots'

global.window = global
window.matchMedia = () => ({})

initStoryshots()
