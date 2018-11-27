import initStoryshots from '@storybook/addon-storyshots'

global.window = global
window.addEventListener = () => {}
window.requestAnimationFrame = () => {
  throw new Error('requestAnimationFrame is not supported in Node')
}
window.cancelAnimationFrame = () => {
  throw new Error('cancelAnimationFrame. is not supported in Node')
}
window.matchMedia = () => ({})

initStoryshots()
