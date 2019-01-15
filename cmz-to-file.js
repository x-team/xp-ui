require('./.jest/setupJSDOM')
require('./lib/auto-ui')

const styles = Array.from(document.querySelectorAll(`style[data-cmz]`))

const rules = styles.map(el => el.styleSheet ? el.styleSheet.cssText : el.textContent)

console.log(rules.join('\n'))
