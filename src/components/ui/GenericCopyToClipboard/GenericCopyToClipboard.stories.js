// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import GenericCopyToClipboard from '.'
import Tooltip from './Tooltip'
import Button from '../Button'
import SvgIcon from '../SvgIcon'

const Body = ({ children }) => (
  <div style={{ width: '100%', textAlign: 'center', margin: '100px 0 0', position: 'relative' }}>
    {children}
  </div>
)

storiesOf('Core Components|GenericCopyToClipboard', module)
  .add('basic usage', () => (
    <Body>
      <GenericCopyToClipboard text={'example@email.com'}>
        <div>Try hovering this element and click to copy</div>
      </GenericCopyToClipboard>
    </Body>
  ))

storiesOf('Core Components|GenericCopyToClipboard/Tooltip', module)
  .add('basic usage', () => (
    <Body>
      <Tooltip />
    </Body>
  ))

storiesOf('Core Components|GenericCopyToClipboard/Tooltip/States', module)
  .add('copied', () => (
    <Body>
      <Tooltip copied />
    </Body>
  ))

storiesOf('Core Components|GenericCopyToClipboard/Debug', module)
  .add('missing children or props (does GenericCopyToClipboard explode?)', () => (
    <GenericCopyToClipboard />
  ))
  .add('missing props (does Tooltip explode?)', () => (
    <Tooltip />
  ))
  .add('with custom X offset', () => (
    <Body>
      <GenericCopyToClipboard text={'example@email.com'} tooltipXOffset={-25}>
        <Button size='small'>
          <SvgIcon icon='copy' color='inverted' />
        </Button>
      </GenericCopyToClipboard>
    </Body>
  ))
