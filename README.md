# XP UI

[![Build Status](https://secure.travis-ci.org/x-team/xp-ui.png)](https://travis-ci.org/x-team/xp-ui)

_UI component library for the XP platform._

## Requirements

You need to install:

- [nvm](https://github.com/creationix/nvm)

## Get started

- `nvm use v9.3.0`
- `npm install`
- `npm start`

## Deploy

It's important to follow these steps with every update to `xp-ui` that we want to deploy. After release branch is merged into master branch of xp-ui (once the Production release was confirmed), check out `master` branch and run a sequence of commands:

```bash
npm version [patch|minor|major]
git push && git push --tags
npm publish --access public
```

## Live preview

- The latest Storybook spec page built out of `master` branch is available for preview [here](https://x-team.github.io/xp-ui/)
- The latest Storybook spec page built out of `develop` branch is available for preview [here](https://xpui-develop.netlify.com/)

## Styleguide

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://standardjs.com/rules.html)

## Contributing

Read [design principles](./design-principles.md) to get an understanding of the principles we're aiming for.
