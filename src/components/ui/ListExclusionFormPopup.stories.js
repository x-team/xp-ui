import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { number, text, array } from '@storybook/addon-knobs'
import State from '../../utils/State'

import ListExclusionFormPopup from './ListExclusionFormPopup'
import Button from './Button'
import { StoryTwoColumnsLayout } from './TwoColumnsLayout.stories'

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
    marginTop={number('Margin Top', props.marginTop || 10)}
    marginBottom={number('Margin Bottom', props.marginBottom || 10)}
    maxHeight={number('Popup Max Height', props.maxHeight || 400)}
    onCancel={props.onCancel || action('Cancelling form')}
    onSubmit={props.onSubmit || action('Submitting form')}
  />
)

const Body = ({ children }) => (
  <div style={{ height: '100vh', position: 'relative' }}>
    <style dangerouslySetInnerHTML={{ __html: `
      html, body { margin: 0; height: 100%; overflow: hidden; }
    ` }} />
    {children}
  </div>
)

const ScrollableContainer = ({ scrollable = true, children }) => (
  <div style={{
    height: '100%',
    overflow: scrollable ? 'auto' : 'hidden'
  }}>
    {children}
  </div>
)

const ButtonsList = ({ setState }) => Array(50)
  .fill('')
  .map((each, index) => (
    <div key={`trigger-${index + 1}`}>
      <Button
        block
        onClick={event => setState({
          isOpen: true,
          applicant: `Sample #${index + 1}`,
          positioning: event.currentTarget.getBoundingClientRect()
        })}
      >
        Click<br />here<br />#{index + 1}
      </Button>
    </div>
  ))

storiesOf('UI Components/ListExclusionFormPopup', module)
  .add('standalone', () => (
    <Body>
      <StoryListExclusionFormPopup />
    </Body>
  ))

storiesOf('UI Components/ListExclusionFormPopup/Debug', module)
  .add('stateful example composed with TwoColumnsLayout', () => (
    <State initialState={{ isOpen: false }}>
      {({ setState, state }) => (
        <Body>
          {state.isOpen && (
            <StoryListExclusionFormPopup
              applicant={state.applicant}
              positioning={state.positioning}
              marginTop={60}
              onCancel={() => setState({ isOpen: false })}
              onSubmit={() => setState({ isOpen: false })}
            />
          )}
          <StoryTwoColumnsLayout
            scrollableSidebar={!state.isOpen}
            sidebar={<ButtonsList setState={setState} />}
          />
        </Body>
      )}
    </State>
  ))
  .add('stateful example occupying the entire height of the screen', () => (
    <State initialState={{ isOpen: false }}>
      {({ setState, state }) => (
        <Body>
          {state.isOpen && (
            <StoryListExclusionFormPopup
              applicant={state.applicant}
              positioning={state.positioning}
              onCancel={() => setState({ isOpen: false })}
              onSubmit={() => setState({ isOpen: false })}
            />
          )}
          <ScrollableContainer scrollable={!state.isOpen}>
            <ButtonsList setState={setState} />
          </ScrollableContainer>
        </Body>
      )}
    </State>
  ))
  .add('missing props (does component explode?)', () => (
    <ListExclusionFormPopup />
  ))
