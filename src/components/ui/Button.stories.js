import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, select } from '@storybook/addon-knobs'

import Button from './Button'
import SvgIcon from './SvgIcon'

const sizes = {
  None: null,
  Normal: 'normal',
  Large: 'large',
  Small: 'small'
}
const colours = {
  None: null,
  Normal: 'normal',
  Monochrome: 'monochrome',
  Silver: 'silver'
}

const StoryButton = (props) => (
  <Button
    size={select('Size', sizes, props.size || null)}
    color={select('Color', colours, props.color || null)}
    readOnly={boolean('Ready-only', props.readOnly || false)}
    outlined={boolean('Outlined', props.outlined || false)}
    rounded={boolean('Rounded', props.rounded || false)}
    raised={boolean('Raised', props.raised || false)}
    pseudolink={boolean('Pseudolink', props.pseudolink || false)}
    selected={boolean('Selected', props.selected || false)}
    disabled={boolean('Disabled', props.disabled || false)}
    block={boolean('Block', props.block || false)}
    wide={boolean('Wide', props.wide || false)}
    selectbox={boolean('Selectbox', props.selectbox || false)}
    tag={text('Tag', props.tag || undefined)}
  >
    {text('Content', props.children || 'This is a button')}
  </Button>
)

storiesOf('UI Components/Button/With Knobs', module)
  .add('all effects', StoryButton)

storiesOf('UI Components/Button/Color Options', module)
  .add('default red state', () => (
    <StoryButton>Normal state with default color</StoryButton>
  ))
  .add('silver state', () => (
    <StoryButton color={'silver'}>Normal state with silver color</StoryButton>
  ))
  .add('monochrome state', () => (
    <StoryButton color={'monochrome'}>Normal state with monochrome color</StoryButton>
  ))

storiesOf('UI Components/Button/Size Options', module)
  .add('small size', () => (
    <StoryButton size={'small'}>Small size</StoryButton>
  ))
  .add('normal size', () => (
    <StoryButton>Normal size</StoryButton>
  ))
  .add('large size', () => (
    <StoryButton size={'large'}>Large size</StoryButton>
  ))
  .add('block size', () => (
    <StoryButton block>Block size</StoryButton>
  ))
  .add('wide size', () => (
    <StoryButton wide>Wide size</StoryButton>
  ))

storiesOf('UI Components/Button/Extra States', module)
  .add('disabled', () => (
    <StoryButton disabled>Disabled state</StoryButton>
  ))
  .add('rounded default', () => (
    <StoryButton rounded>Rounded default state</StoryButton>
  ))
  .add('raised default', () => (
    <StoryButton raised>Raised default state</StoryButton>
  ))
  .add('link-style default', () => (
    <StoryButton pseudolink>Link default state</StoryButton>
  ))
  .add('outlined default', () => (
    <StoryButton outlined>Outlined default state</StoryButton>
  ))
  .add('outlined monochorme', () => (
    <StoryButton outlined color={'monochrome'}>
      Outlined monochrome state
    </StoryButton>
  ))
  .add('outlined silver', () => (
    <StoryButton outlined color={'silver'}>
      Outlined silver state
    </StoryButton>
  ))
  .add('button generated with custom element (<a>)', () => (
    <StoryButton component='a' color={'monochrome'}>
      custom default button state
    </StoryButton>
  ))

storiesOf('UI Components/Button/Use Cases', module)
  .add('skill tag', () => (
    <StoryButton outlined rounded raised color={'silver'}>
      Android
    </StoryButton>
  ))
  .add('selected skill tag', () => (
    <StoryButton selected outlined rounded raised color={'silver'}>
      Android
    </StoryButton>
  ))
  .add('skill tag pro', () => (
    <StoryButton tag='pro' outlined rounded raised color={'silver'}>
      Android
    </StoryButton>
  ))
  .add('selected skill tag pro', () => (
    <StoryButton tag='pro' selected outlined rounded raised color={'silver'}>
      Android
    </StoryButton>
  ))
  .add('exclude applicant form buttons', () => (
    <div style={{ textAlign: 'right' }}>
      <StoryButton pseudolink>Cancel</StoryButton>
      <StoryButton>
        <SvgIcon icon={'paperplane'} color={'inverted'} />
      </StoryButton>
    </div>
  ))
  .add('SelectBox option button', () => (
    <StoryButton selectbox size='large'>
      <SvgIcon icon='edit' /> Edit Lists
    </StoryButton>
  ))
  .add('disabled outlined', () => (
    <StoryButton disabled outlined>
      Disabled outlined state
    </StoryButton>
  ))
  .add('missing props (does component explode?):', () => (
    <StoryButton>Regular button with no props</StoryButton>
  ))
