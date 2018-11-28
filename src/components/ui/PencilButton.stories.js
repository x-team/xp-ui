import React from 'react'
import { storiesOf } from '@storybook/react'

import PencilButton from './PencilButton'

storiesOf('UI Components/PencilButton', module)
  .add('basic usage', () => (
    <PencilButton />
  ))
  .add('missing props (does component explode?)', () => <PencilButton />)

storiesOf('UI Components/PencilButton/Colors', module)
  .add('inverted color', () => (
    <span style={{ background: '#F63A55', padding: '10px' }}>
      <PencilButton color='inverted' hover='text' />
    </span>
  ))
  .add('monochrome color', () => <PencilButton color='monochrome' />)
  .add('grayscale color', () => <PencilButton color='grayscale' />)

storiesOf('UI Components/PencilButton/Hover Colors', module)
  .add('default hover color', () => <PencilButton hover='default' />)
  .add('inverted hover color', () => (
    <span style={{ background: '#000000', padding: '10px' }}>
      <PencilButton hover='inverted' />
    </span>
  ))
  .add('monochrome hover color', () => <PencilButton hover='monochrome' />)
  .add('grayscale hover color', () => <PencilButton hover='grayscale' />)
