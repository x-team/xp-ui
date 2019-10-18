import React from 'react'
import faker from 'faker'
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

const applicants = Array(15).fill('').map((each, id) => {
  const email = faker.internet.email()
  const name = faker.random.number(10) >= 4
    ? `${faker.name.firstName()} ${faker.name.lastName()}`
    : email
  return {
    id,
    name,
    email
  }
})

const getApplicants = (hancleClick) => applicants.map(applicant => (
  <ApplicantBadge
    {...applicant}
    active={applicant.id === 2}
    actions={[
      {
        key: 'exclusion',
        icon: () => <SvgIcon icon='x' />,
        onClick: hancleClick(applicant.name)
      }
    ]}
  />
))

const ApplicantList = ({ setState }) => {
  const hancleClick = (applicant) => (actionIdAttr) => setState({
    isOpen: true,
    applicant,
    actionIdAttr
  })

  return (
    <div style={{ padding: '10px 40px' }}>
      <ApplicantGrid
        items={getApplicants(hancleClick)}
        visible={8}
        increment={2}
      />
    </div>
  )
}

storiesOf('UI Components|Applicant Lists/ListExclusionFormPopup', module)
  .add('basic usage', () => (
    <Body>
      <StoryListExclusionFormPopup />
    </Body>
  ))

storiesOf('UI Components|Applicant Lists/ListExclusionFormPopup/Use Cases', module)
  .add('composed in two columns layout', () => (
    <State initialState={{ isOpen: false }}>
      {({ setState, state }) => (
        <Body>
          {state.isOpen && (
            <StoryListExclusionFormPopup
              applicant={state.applicant}
              actionIdAttr={state.actionIdAttr}
              marginTop={70}
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

storiesOf('UI Components|Applicant Lists/ListExclusionFormPopup/Debug', module)
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
