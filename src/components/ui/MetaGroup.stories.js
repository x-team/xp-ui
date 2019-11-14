import React from 'react'
import { storiesOf } from '@storybook/react'
import faker from 'faker'

import MetaGroup from './MetaGroup'

const MainBodyElement = ({ children }) => (
  <div style={{ padding: '10px', border: '1px dotted red' }}>
    {children}
  </div>
)

const sampleMainBodyContent = Array(150).fill('Left-side').map((each, i) => (
  <span key={`leftside-${i}`}>{each}</span>
))

const SecondaryElement = ({ children }) => (
  <div style={{ padding: '10px', border: '1px dotted orange' }}>
    {children}
  </div>
)

const sampleSecondaryElements = Array(10).fill('').map((each, i) => (
  <SecondaryElement key={`rightside-${i}`}>
    {Array(faker.random.number(2) + 1).fill('').map((e, ind) => (
      <span key={`rightside-string-${i}-${ind}`}>{faker.random.word()}<br /></span>
    ))}
  </SecondaryElement>
))

const Sandbox = ({ children }) => (
  <div style={{ margin: '60px 20px', border: '1px dashed silver' }}>
    {children}
  </div>
)

storiesOf('Core Components|MetaGroup', module)
  .add('standalone composed with children', () => (
    <Sandbox>
      <MetaGroup
        mainBodyElement={<MainBodyElement>Here would goes a bunch of filters definitions</MainBodyElement>}
        secondaryElements={[
          <SecondaryElement key='Here-would-go-the-counter-component'>52 results</SecondaryElement>,
          <SecondaryElement key='Here-would-go-the-reloader-component'>(R)</SecondaryElement>,
          <SecondaryElement key='Here-would-go-the-columns-customizer-component'>Columns v</SecondaryElement>
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

storiesOf('Core Components|MetaGroup/Debug', module)
  .add('responsive demonstration with many elements', () => (
    <Sandbox>
      <MetaGroup
        mainBodyElement={(
          <MainBodyElement>{sampleMainBodyContent}</MainBodyElement>
        )}
        secondaryElements={sampleSecondaryElements}
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
