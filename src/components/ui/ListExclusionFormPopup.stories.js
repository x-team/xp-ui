import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { number, text, array } from '@storybook/addon-knobs'
import State from '../../utils/State'

import ListExclusionFormPopup from './ListExclusionFormPopup'
import Button from './Button'

const StoryListExclusionFormPopup = (props) => (
  <ListExclusionFormPopup
    applicant={text('Applicant', props.applicant || 'Lorem Ipsum')}
    reasons={array('Reasons', props.reasons || [
      'Not available',
      'Not qualified',
      'Rate too high',
      'Other'
    ])}
    positioning={props.positioning || {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }}
    onCancel={props.onCancel || action('Cancelling form')}
    onSubmit={props.onSubmit || action('Submitting form')}
  />
)

const Body = ({ children }) => (
  <div style={{ height: '100vh', padding: '50px' }}>
    <style dangerouslySetInnerHTML={{ __html: `
      html, body { margin: 0; height: 100%; }
    ` }} />
    {children}
  </div>
)

const ScrollableContainer = ({ scrollable = true, children }) => (
  <div style={{
    height: '50vh',
    padding: '20px',
    overflow: scrollable ? 'auto' : 'hidden',
    border: '1px dashed silver'
  }}>
    {children}
  </div>
)

storiesOf('UI Components/ListExclusionFormPopup', module)
  .add('standalone', () => (
    <StoryListExclusionFormPopup />
  ))

storiesOf('UI Components/ListExclusionFormPopup/Debug', module)
  .add('stateful usage', () => (
    <State initialState={{ isOpen: false }}>
      {({ setState, state }) => (
        <Body>
          {state.isOpen ? (
            <StoryListExclusionFormPopup
              applicant={state.applicant}
              positioning={state.positioning}
              onCancel={() => setState({ isOpen: false })}
              onSubmit={() => setState({ isOpen: false })}
            />
          ) : null}
          <ScrollableContainer scrollable={!state.isOpen}>
            {Array(50)
              .fill("Click here for sample #")
              .map((each, index) => (
                <div key={`trigger-${index + 1}`}>
                  <Button
                    onClick={event => setState({
                      isOpen: true,
                      applicant: `Sample #${index + 1}`,
                      positioning: event.currentTarget.getBoundingClientRect()
                    })}
                  >
                    {each}
                    {index + 1}
                  </Button>
                </div>
              ))}
            </ScrollableContainer>
        </Body>
      )}
    </State>
  ))
  .add('missing props (does component explode?)', () => (
    <ListExclusionFormPopup />
  ))
