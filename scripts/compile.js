const { green, cyan, red } = require('chalk')
const webpack = require('webpack')
const path = require('path')
const fse = require('fs-extra')
const execa = require('execa')
const cherryPick = require('cherry-pick').default

const config = require('../webpack.registration')

const srcRoot = path.join(__dirname, '../src')
const libRoot = path.join(__dirname, '../lib')
const cjsRoot = path.join(libRoot, 'registration')

const clean = () => fse.existsSync(libRoot) && fse.removeSync(libRoot)

const step = (name, fn) => async () => {
  console.log(cyan('Building: ') + green(name))
  await fn()
  console.log(cyan('Built: ') + green(name))
}

const shell = cmd =>
  execa(cmd, { stdio: ['pipe', 'pipe', 'inherit'], shell: true })

/**
 * Run babel over the src directory and output
 * compiled common js files to ./lib.
 */
const buildLib = step('commonjs modules', async () => {
  await shell(`npx babel ${srcRoot} --out-dir ${cjsRoot} --env-name "cjs"`)
})

/**
 * Bundles a minified version of xp-ui including
 * all it's immediate dependencies (excluding React, ReactDOM, etc)
 */
const buildDist = step(
  'browser distributable',
  () =>
    new Promise((resolve, reject) => {
      webpack(
        config,
        async (err, stats) => {
          if (err || stats.hasErrors()) {
            reject(err || stats.toJson().errors)
            return
          }

          resolve()
        }
      )
    })
)

const buildDirectories = step('Linking directories', () =>
  cherryPick({
    inputDir: '../src',
    cjsDir: 'cjs',
    cwd: libRoot
  })
)

console.log(green('Building targets: commonjs, dist \n'))

clean()

Promise.all([
  buildLib(),
  buildDist()
])
  .then(buildDirectories)
  .catch(err => {
    if (err) {
      console.error(red(err.stack || err.toString()))
    }
    process.exit(1)
  })
