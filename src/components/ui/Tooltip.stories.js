import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Tooltip from './Tooltip'
import Button from './Button'
import SelectBox from './SelectBox'

const Sandbox = ({ children }) => (
  <div style={{ margin: '40px 20px', padding: '10px 20px', border: '1px dashed silver' }}>
    {children}
  </div>
)

const sampleSelectBoxItems = [
  { id: 2, value: 'registered' },
  { id: 3, value: 'portfolio-building' },
  { id: 4, value: 'portfolio-review' },
  { id: 5, value: 'social-media-screen' },
  { id: 6, value: 'react-shortlist' }
]

storiesOf('UI Components/Tooltip/Debug', module)
  .add('demonstration with many trigger buttons and only one instance of same type', () => (
    <Sandbox>
      <Sandbox>
        <p>The Tooltip component is declared here in the markup composition, it's independent from the triggers.</p>
        <Tooltip
          tooltipId='selectbox'
          render={(dataTip) => (
            <SelectBox
              placeholder={dataTip}
              expanded
              items={sampleSelectBoxItems}
              width={300}
              visibleItems={3}
              onClick={action(dataTip)}
            />
          )}
        />
      </Sandbox>
      <Sandbox>
        {Array(50).fill('Click here for sample #').map((each, index) => (
          <div key={`trigger-${index + 1}`}>
            <Button
              data-tip={`Sample #${index + 1}`}
              data-for='selectbox'
              data-event='click'
            >
              {each}{index + 1}
            </Button>
          </div>
        ))}
      </Sandbox>
    </Sandbox>
  ), {
    notes: {
      markdown: `
Things to observe is that the Tooltip component is declared only once and it's independent from the component that triggers it.

The Tooltip will render a React component with custom props, so that the component are allowed to trigger actions: in the SelectBox examples, observe the placeholder and the **actions** log when clicking on its items.

Note: The dashed area is for sandboxing purposes. Buttons and SelectBoxes are for demonstrations and debugging.
      `
    }
  })
  .add('missing props (does component explode?)', () => (
    <Tooltip />
  ))
