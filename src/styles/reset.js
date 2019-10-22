// @flow

const cmz = require('cmz')

export default {
  admin: cmz(`
    & h1 {
      color: red
    }
  `),

  applicant: cmz(`
    & h1 {
      color: blue
    }
  `)
}
