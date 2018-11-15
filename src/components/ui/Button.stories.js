import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from './Button'
import SvgIcon from './SvgIcon'

storiesOf('UI Components/Button/Color Options', module)
  .add('default red state', () => (
    <Button>Normal state with default color</Button>
  ))
  .add('silver state', () => (
    <Button color={'silver'}>Normal state with silver color</Button>
  ))
  .add('monochrome state', () => (
    <Button color={'monochrome'}>Normal state with monochrome color</Button>
  ))

storiesOf('UI Components/Button/Size Options', module)
  .add('small size', () => <Button size={'small'}>Small size</Button>)
  .add('normal size', () => <Button>Normal size</Button>)
  .add('large size', () => <Button size={'large'}>Large size</Button>)
  .add('block size', () => <Button block>Block size</Button>)
  .add('wide size', () => <Button wide>Wide size</Button>)

storiesOf('UI Components/Button/Extra States', module)
  .add('disabled', () => <Button disabled>Disabled state</Button>)
  .add('rounded default', () => <Button rounded>Rounded default state</Button>)
  .add('raised default', () => <Button raised>Raised default state</Button>)
  .add('link-style default', () => (
    <Button pseudolink>Link default state</Button>
  ))
  .add('outlined default', () => (
    <Button outlined>Outlined default state</Button>
  ))
  .add('outlined monochorme', () => (
    <Button outlined color={'monochrome'}>
      Outlined monochrome state
    </Button>
  ))
  .add('outlined silver', () => (
    <Button outlined color={'silver'}>
      Outlined silver state
    </Button>
  ))
  .add('button generated with custom element (<a>)', () => (
    <Button component='a' color={'monochrome'}>
      custom default button state
    </Button>
  ))

storiesOf('UI Components/Button/Use Cases', module)
  .add('skill tag', () => (
    <Button outlined rounded raised color={'silver'}>
      Android
    </Button>
  ))
  .add('selected skill tag', () => (
    <Button selected outlined rounded raised color={'silver'}>
      Android
    </Button>
  ))
  .add('skill tag pro', () => (
    <Button tag='pro' outlined rounded raised color={'silver'}>
      Android
    </Button>
  ))
  .add('selected skill tag pro', () => (
    <Button tag='pro' selected outlined rounded raised color={'silver'}>
      Android
    </Button>
  ))
  .add('exclude applicant form buttons', () => (
    <div style={{ textAlign: 'right' }}>
      <Button pseudolink>Cancel</Button>
      <Button>
        <SvgIcon icon={'paperplane'} color={'inverted'} />
      </Button>
    </div>
  ))
  .add('SelectBox option button', () => (
    <Button selectbox size='large'>
      <SvgIcon icon='edit' /> Edit Lists
    </Button>
  ))
  .add('disabled outlined', () => (
    <Button disabled outlined>
      Disabled outlined state
    </Button>
  ))
  .add('Missing props (does component explode?):', () => (
    <Button>Regular button with no props</Button>
  ))
