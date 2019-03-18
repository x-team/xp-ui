import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import State from '../../utils/State'

import Tooltip from './Tooltip'
import { StoryAdminScreen } from './AdminScreen.stories'
import { StoryTwoColumnsLayout } from './TwoColumnsLayout.stories'

const sampleTooltipContent = [
  <h1 key='h1'>Tooltip content goes here</h1>,
  ...Array(5).fill('Anything goes in the Tooltip content body').map((each, i) => <div key={`content-${i}`}>{each}</div>)
]

const StoryTooltip = props => (
  <State initialState={{ isOpen: true }}>
    {({ setState, state }) => state.isOpen ? (
      <Tooltip
        onClose={() => setState({ isOpen: false })}
        {...props}
      />
    ) : null}
  </State>
)

const Body = ({ children }) => (
  <div style={{ height: '100vh' }}>
    <style dangerouslySetInnerHTML={{ __html: `
      html, body { margin: 0; height: 100%; }
    ` }} />
    {children}
  </div>
)

storiesOf('UI Components/Tooltip', module)
  .add('standalone default usage', () => (
    <StoryTooltip>
      {sampleTooltipContent}
    </StoryTooltip>
  ))

storiesOf('UI Components/Tooltip/Use cases', module)
  .add('composed in AdminScreen and TwoColumnsLayout', () => (
    <Body>
      <StoryAdminScreen>
        <Fragment>
          <StoryTwoColumnsLayout />
          <Tooltip>
            {sampleTooltipContent}
          </Tooltip>
        </Fragment>
      </StoryAdminScreen>
    </Body>
  ))

storiesOf('UI Components/Tooltip/Debug', module)
  .add('missing props (does component explode?)', () => (
    <Tooltip />
  ))
