import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { number, text, array } from '@storybook/addon-knobs'
import State from '../../utils/State'

import ListExclusionFormPopup from './ListExclusionFormPopup'
import ApplicantGrid from './ApplicantGrid'
import ApplicantBadge from './ApplicantBadge'
import Button from './Button'
import { StoryTwoColumnsLayout } from './TwoColumnsLayout.stories'
import SvgIcon from './SvgIcon'

const StoryListExclusionFormPopup = props => (
  <ListExclusionFormPopup
    applicant={text('Applicant', props.applicant || 'Lorem Ipsum')}
    reasons={array('Reasons', props.reasons || ['Not available', 'Not qualified', 'Rate too high', 'Other'])}
    actionIdAttr={props.actionIdAttr}
    marginTop={number('Margin Top', props.marginTop || 10)}
    marginBottom={number('Margin Bottom', props.marginBottom || 10)}
    maxHeight={number('Popup Max Height', props.maxHeight || 400)}
    onCancel={props.onCancel || action('Cancelling form')}
    onSubmit={props.onSubmit || action('Submitting form')}
  />
)

const Body = ({ children }) => (
  <div style={{ height: '100vh', position: 'relative' }}>
    <style
      dangerouslySetInnerHTML={{ __html: `
        html, body { margin: 0; height: 100%; overflow: hidden; }
      ` }}
    />
    {children}
  </div>
)

const ScrollableContainer = ({ scrollable = true, children }) => (
  <div
    style={{
      height: '100%',
      overflow: scrollable ? 'auto' : 'hidden',
      paddingRight: '300px',
      paddingLeft: '100px'
    }}
  >
    {children}
  </div>
)

const ButtonsList = ({ setState }) => {
  const handleClick = (index, actionIdAttr) => () => setState({
    isOpen: true,
    applicant: `Sample #${index}`,
    actionIdAttr
  })

  return Array(50).fill('').map((each, index) => {
    const id = `trigger-${index + 1}`
    return (
      <div key={id}>
        <Button
          id={id}
          block
          onClick={handleClick(index + 1, id)}
        >
          Click<br />here<br />#{index + 1}
        </Button>
      </div>
    )
  })
}

const ApplicantList = ({ setState }) => {
  const hancleClick = actionIdAttr => {
    setState({
      isOpen: true,
      applicant: `Applicant full name`,
      actionIdAttr
    })
  }

  const items = Array(15).fill('').map((each, index) => ({
    id: index,
    name: 'Applicant full name',
    email: 'applicant@email.com',
    actions: [
      {
        key: 'exclusion',
        icon: () => <SvgIcon icon='x' />,
        onClick: hancleClick
      }
    ]
  }))
  items[2] = { ...items[2], active: true }
  return (
    <div style={{ padding: '10px 40px' }}>
      <ApplicantGrid
        items={items.map(each => (
          <ApplicantBadge {...each} />
        ))}
        visible={8}
        increment={2}
      />
    </div>
  )
}

storiesOf('UI Components/ListExclusionFormPopup', module).add('standalone', () => (
  <Body>
    <StoryListExclusionFormPopup />
  </Body>
))

storiesOf('UI Components/ListExclusionFormPopup/Use Cases', module)
  .add('stateful example composed with TwoColumnsLayout', () => (
    <State initialState={{ isOpen: false }}>
      {({ setState, state }) => (
        <Body>
          {state.isOpen && (
            <StoryListExclusionFormPopup
              applicant={state.applicant}
              actionIdAttr={state.actionIdAttr}
              marginTop={60}
              onCancel={() => setState({ isOpen: false })}
              onSubmit={() => setState({ isOpen: false })}
            />
          )}
          <StoryTwoColumnsLayout
            scrollableSidebar={!state.isOpen}
            sidebarWidth={500}
            sidebar={<ApplicantList setState={setState} />}
          />
        </Body>
      )}
    </State>
  ))

storiesOf('UI Components/ListExclusionFormPopup/Debug', module)
  .add('stateful example occupying the entire height of the screen', () => (
    <State initialState={{ isOpen: false }}>
      {({ setState, state }) => (
        <Body>
          {state.isOpen && (
            <StoryListExclusionFormPopup
              applicant={state.applicant}
              actionIdAttr={state.actionIdAttr}
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
  .add('missing props (does component explode?)', () => <ListExclusionFormPopup />)
