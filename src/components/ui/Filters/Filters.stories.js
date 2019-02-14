import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import State from '../../../utils/State'

import Filters from '.'
import Tab from '../Tab'
import Button from '../Button'
import InputField from '../../forms/InputField'
import SelectBox from '../SelectBox'

const InputFilterContainer = (props) => (
  <InputField {...props} />
)

const SelectBoxFilterContainer = (props) => (
  <SelectBox size='small' hasSearch={false} {...props} />
)

storiesOf('UI Components/Filters', module)
  .add('default display', () => (
    <Filters.Container>
      <Filters.Heading>Context Filters</Filters.Heading>
      <Filters.Label>Show</Filters.Label>
      <Tab.Container defaultActiveKey="list" headWrapper={Filters.TabHeads}>
        <Tab.Head tabKey="list">
          <Button color='silver' wide outlined smallRounded>List</Button>
        </Tab.Head>
        <Tab.Head tabKey="all">
          <Button color='silver' wide outlined smallRounded>All Applicants</Button>
        </Tab.Head>
        <Tab.Pane tabKey="list">
          <Filters.Filter label='List'>
            <SelectBoxFilterContainer placeholder='List' />
          </Filters.Filter>
          <Filters.Filter label='List Members'>
            <State initialState={{ cb: true }}>
              {({ setState, state }) => (
                <InputFilterContainer
                  type='checkbox'
                  label='Accepted'
                  checked={state.cb}
                  onChange={() => setState(prev => ({ cb: !prev.cb }))}
                />
              )}
            </State>
            <State initialState={{ cb: true }}>
              {({ setState, state }) => (
                <InputFilterContainer
                  type='checkbox'
                  label='Excluded'
                  checked={state.cb}
                  onChange={() => setState(prev => ({ cb: !prev.cb }))}
                />
              )}
            </State>
          </Filters.Filter>
        </Tab.Pane>
        <Tab.Pane tabKey="all">
          <Filters.Filter label='Accept / Exclude To'>
            <SelectBoxFilterContainer placeholder='List' />
          </Filters.Filter>
        </Tab.Pane>
      </Tab.Container>
      <Filters.Heading>Search Filters</Filters.Heading>
      <Filters.Filter label='Status'>
        <SelectBoxFilterContainer placeholder='Status' />
      </Filters.Filter>
      <Filters.Filter label='Available Before'>
        <InputFilterContainer type='date' />
      </Filters.Filter>
      <Filters.Filter label='Timezone'>
        <SelectBoxFilterContainer placeholder='Timezone' />
      </Filters.Filter>
      <Filters.Filter label='Max Rate'>
        <InputFilterContainer type='number' />
      </Filters.Filter>
    </Filters.Container>
  ))
  .add('missing props (does component explode?)', () => (
    <Filters.Container />
  ))
