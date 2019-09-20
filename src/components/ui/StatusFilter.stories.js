import React from 'react'
import { storiesOf } from '@storybook/react'
import State from '../../utils/State'

import StatusFilter from './StatusFilter'

export const StoryStatusFilter = (props) => (
  <State initialState={{ ...props.checked }}>
    {({ setState, state }) => (
      <StatusFilter
        handleCheck={(name: string) => {
          setState({
            accepted: name !== 'excluded',
            excluded: name === 'excluded'
          })
        }}
        checked={{
          accepted: state.accepted,
          excluded: state.excluded
        }}
        disabled={props.disabled}
      />
    )}
  </State>
)

storiesOf('UI Components/StatusFilter', module)
  .add('default', () => (
    <StoryStatusFilter
      checked={{ accepted: true, excluded: false }}
      disabled={false}
    />
  ))
  .add('disabled', () => (
    <StatusFilter disabled />
  ))

storiesOf('UI Components/StatusFilter/Debug', module)
  .add('missing props (does component explode?)', () => (
    <StatusFilter />
  ))
