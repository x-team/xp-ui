import React from 'react'
import { storiesOf } from '@storybook/react'

import MetaGroup from './MetaGroup'

const LeftSideElement = ({ children }) => (
  <div style={{ padding: '10px', border: '1px dotted red' }}>
    {children}
  </div>
)

const RightSideElement = ({ children }) => (
  <div style={{ padding: '10px', border: '1px dotted orange' }}>
    {children}
  </div>
)

const sampleLeftSideContent = Array(150).fill('Left-side').map((each, i) => (
  <span key={`leftside-${i}`}>{each}</span>
))

const sampleRightSideElements = Array(20).fill('Right-side').map((each, i) => (
  <RightSideElement key={`rightside-${i}`}>{each}</RightSideElement>
))

const Sandbox = ({ children }) => (
  <div style={{ margin: '60px 20px', border: '1px dashed silver' }}>
    {children}
  </div>
)

storiesOf('UI Components/MetaGroup', module)
  .add('standalone default usage', () => (
    <Sandbox>
      <MetaGroup
        leftSideElement={<LeftSideElement>Here would goes a bunch of filters definitions</LeftSideElement>}
        rightSideElements={[
          <RightSideElement key='Here-would-go-the-counter-component'>52 results</RightSideElement>,
          <RightSideElement key='Here-would-go-the-reloader-component'>(R)</RightSideElement>,
          <RightSideElement key='Here-would-go-the-columns-customizer-component'>Columns v</RightSideElement>
        ]}
      />
    </Sandbox>
  ), {
    notes: {
      markdown: `
Note: Dashed and dotted elements are for sandboxing purposes only, the real children used in application is not yet available for showcase.
      `
    }
  })

storiesOf('UI Components/MetaGroup/Debug', module)
  .add('responsive demonstration with many elements', () => (
    <Sandbox>
      <MetaGroup
        leftSideElement={(
          <LeftSideElement>{sampleLeftSideContent}</LeftSideElement>
        )}
        rightSideElements={sampleRightSideElements}
      />
    </Sandbox>
  ), {
    notes: {
      markdown: `
Note: Dashed and dotted elements are for sandboxing purposes only.

This story is useful to demonstrate how the component layout and positioning behaves.
The big amount of elements helps visibility of these patterns.
Try resizing the screen width to see the responsiveness in effect.
      `
    }
  })
  .add('missing props (does component explode?)', () => (
    <MetaGroup />
  ))
