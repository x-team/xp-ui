// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, radios } from '@storybook/addon-knobs'

import { typoColors, breakpoints } from '../../styles/theme'

import ColorPalette from './ColorPalette'
// $FlowFixMe
import colorPaletteInfo from './ColorPalette.md'

import Typography from './Typography'
// $FlowFixMe
import typographyInfo from './Typography.md'

import Layout from './Layout'
// $FlowFixMe
import layoutInfo from './Layout.md'

import Reset from './Reset'
// $FlowFixMe
import resetInfo from './Reset.md'

const colorOptions = Object.keys(typoColors).reduce((acc, cur) => ({ ...acc, [cur]: cur }), {})
const breakpointsOptions = {
  '100%': '100%',
  ...Object.keys(breakpoints).reduce((acc, cur) => ({ ...acc, [breakpoints[cur]]: cur }), {})
}
const textOptions = {
  'One line': 'oneLine',
  'Paragraphs': 'paragraphs'
}
const themeOptions = {
  'none': '',
  'XP Admin': 'admin',
  'XP Registration': 'applicant'
}

storiesOf('Styleguide|General', module)
  .add('ColorPalette', () => (
    <ColorPalette />
  ), {
    notes: { markdown: colorPaletteInfo }
  })
  .add('Typography', () => (
    <Typography
      color={select('Typography color', colorOptions, 'typoParagraph')}
      width={select('Breakpoint width', breakpointsOptions, '100%')}
      option={radios('Text preview', textOptions, 'oneLine')}
      text={text('One line text', 'The quick brown fox jumps over the lazy dog')}
      paragraphs={text('Paragraphs text', `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae nulla quis tortor ullamcorper accumsan eu id urna. Nam scelerisque scelerisque dignissim. Nullam at vestibulum mi. Nullam et lorem nec leo placerat semper non sed tellus. In sed massa convallis purus blandit hendrerit vitae porta ex. Cras eu elit est.
Nulla vehicula lorem sit amet pharetra pulvinar. Fusce neque neque, laoreet sit amet neque ac, fringilla viverra enim. In sit amet ultrices felis.
Sed non dapibus turpis, sed pulvinar nibh. Nam quis libero dapibus, vestibulum ipsum nec, tincidunt eros. Proin ultricies porttitor magna a ornare. Fusce risus lacus, suscipit vitae pharetra sit amet, consectetur a purus.`)}
    />
  ), {
    notes: { markdown: typographyInfo }
  })
  .add('Layout', () => (
    <Layout />
  ), {
    notes: { markdown: layoutInfo }
  })
  .add('Reset', () => (
    <Reset
      theme={select('Theme', themeOptions, 'none')}
    />
  ), {
    notes: { markdown: resetInfo }
  })
