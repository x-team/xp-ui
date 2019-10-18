import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import State from '../../utils/State'

import HeadingWithQuickSearch from './HeadingWithQuickSearch'

const Heading = ({ children }) => (
  <div style={{ height: '58px', width: '400px', border: '1px solid rgb(233, 237, 238)', backgroundColor: 'rgb(249, 250, 251)' }}>
    { children }
  </div>
)

storiesOf('UI Components|HeadingWithQuickSearch', module)
  .add('basic usage', () => (
    <Heading>
      <HeadingWithQuickSearch
        text='Filters'
        leftIcon='filters'
        onQuickSearchSubmit={action('quickSearchSubmit')}
        headingAction={action('headingAction')}
      />
    </Heading>
  ))

storiesOf('UI Components|HeadingWithQuickSearch/Debug', module)
  .add('with action handler', () => (
    <Heading>
      <HeadingWithQuickSearch
        text='Click this arrow'
        leftIcon='arrowleft'
        headingAction={action('headingAction')}
      />
    </Heading>
  ))
  .add('fully-controlled', () => (
    <State initialState={{ isOpen: false, value: '' }}>
      {({ setState, state }) => (
        <Heading>
          <HeadingWithQuickSearch
            text='Filters'
            leftIcon='filters'
            isQuickSearching={state.isOpen}
            quickSearchValue={state.value}
            onToggleQuickSearch={(isOpen) => setState({ isOpen })}
            onQuickSearchChangeValue={(value) => setState({ value })}
            headingAction={action('headingAction')}
          />
        </Heading>
      )}
    </State>
  ))
  .add('without wrapper', () => (
    <HeadingWithQuickSearch
      text='Click this arrow'
      leftIcon='arrowleft'
    />
  ))
  .add('missing props (does component explode?)', () => (
    <HeadingWithQuickSearch />
  ))
