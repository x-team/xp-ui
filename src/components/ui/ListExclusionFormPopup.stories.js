import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { number, text, array } from '@storybook/addon-knobs';
import State from '../../utils/State';

import ListExclusionFormPopup from './ListExclusionFormPopup';
import ApplicantGrid from './ApplicantGrid'
import ApplicantBadge from './ApplicantBadge'
import { StoryTwoColumnsLayout } from './TwoColumnsLayout.stories';
import SvgIcon from './SvgIcon'

const StoryListExclusionFormPopup = props => (
  <ListExclusionFormPopup
    applicant={text('Applicant', props.applicant || 'Lorem Ipsum')}
    reasons={array('Reasons', props.reasons || ['Not available', 'Not qualified', 'Rate too high', 'Other'])}
    positioning={
      props.positioning || {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }
    }
    marginTop={number('Margin Top', props.marginTop || 10)}
    marginBottom={number('Margin Bottom', props.marginBottom || 10)}
    marginRight={number('Margin Right', props.marginRight || 10)}
    marginLeft={number('Margin Left', props.marginLeft || 10)}
    maxHeight={number('Popup Max Height', props.maxHeight || 400)}
    onCancel={props.onCancel || action('Cancelling form')}
    onSubmit={props.onSubmit || action('Submitting form')}
  />
);

const Body = ({ children }) => (
  <div style={{ height: '100vh', position: 'relative' }}>
    <style
      dangerouslySetInnerHTML={{
        __html: `
      html, body { margin: 0; height: 100%; overflow: hidden; }
    `,
      }}
    />
    {children}
  </div>
);

const ScrollableContainer = ({ scrollable = true, children }) => (
  <div
    style={{
      height: '100%',
      overflow: scrollable ? 'auto' : 'hidden',
    }}
  >
    {children}
  </div>
);

const ApplicantList = ({ setState }) => {
  const info = [
    {
      label: 'Avail. date:',
      value: 'DD/MM/YYYY',
      tip: 'Avail. date tooltip copy',
    },
    {
      label: 'Timezone:',
      value: 'UTC+00',
    },
    {
      label: 'Rate:',
      value: '$100',
    },
  ];

  const tags = ['JavaScript', 'ES2015', 'Node', 'Express', 'React', 'Redux', 'Webpack'];

  let i = 1;
  const items = Array(10).fill(
    <ApplicantBadge
      id={i++}
      onClick={action('Applicant selected')}
      name="Applicant full name"
      email="applicant@email.com"
      info={info}
      tags={tags}
      actions={[
        {
          key: 'exclusion',
          icon: () => <SvgIcon icon='x' />,
          onClick: positioning => setState({
            isOpen: true,
            applicant: `Applicant full name`,
            positioning: positioning
          })
        }
      ]}
    />
  );
  items[1] = (
    <ApplicantBadge
      active
      id={999}
      onClick={action('Applicant selected')}
      name="Applicant full name"
      email="applicant@email.com"
      info={info}
      tags={tags}
      actions={[
        {
          key: 'approval',
          icon: () => <SvgIcon icon='check' />,
          render: () => <form>A custom list of inputs with a submit button and a checkmark icon</form>
        },
        {
          key: 'exclusion',
          icon: () => <SvgIcon icon='x' />,
          render: () => <form>Another custom list of inputs with a submit button and an X icon</form>
        }
      ]}
    />
  );
  return <ApplicantGrid items={items} visible={3} increment={2} />;
};

storiesOf('UI Components/ListExclusionFormPopup', module).add('standalone', () => (
  <Body>
    <StoryListExclusionFormPopup />
  </Body>
));

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
          <StoryTwoColumnsLayout scrollableSidebar={!state.isOpen} sidebar={<ApplicantList setState={setState} />} />
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
            <ApplicantList setState={setState} />
          </ScrollableContainer>
        </Body>
      )}
    </State>
  ))
  .add('missing props (does component explode?)', () => <ListExclusionFormPopup />);
