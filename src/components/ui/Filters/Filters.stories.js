import React from 'react'
import { storiesOf } from '@storybook/react'

import State from '../../../utils/State'

import Filters from '.'
import Collapsible from '../Collapsible'
import Tab from '../Tab'
import InputField from '../../forms/InputField'
import SelectBox from '../SelectBox'

const InputFilterContainer = props => (
  <InputField {...props} />
)

const SelectBoxFilterContainer = props => (
  <SelectBox size='small' hasSearch={false} {...props} />
)

storiesOf('UI Components/Filters', module)
  .add('default display', () => (
    <Filters.Container>

      <Collapsible.Container initialExpanded>
        <Collapsible.Header>
          <Filters.Heading>Context Filters</Filters.Heading>
        </Collapsible.Header>
        <Collapsible.Body>
          <Filters.Group>
            <Filters.Label>Show</Filters.Label>
            <Tab.Container defaultActiveKey='list' headWrapper={Filters.TabHeads}>
              <Tab.Head tabKey='list'>
                <Filters.TabButton text='list' />
              </Tab.Head>
              <Tab.Head tabKey='all'>
                <Filters.TabButton text='All Applicants' />
              </Tab.Head>
              <Tab.Pane tabKey='list'>
                <Filters.Filter label='List'>
                  <SelectBoxFilterContainer placeholder='List' />
                </Filters.Filter>
                <Filters.Filter label='List Members' collapsible>
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
                  <br/>
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
              <Tab.Pane tabKey='all'>
                <Filters.Filter label='Accept / Exclude To'>
                  <SelectBoxFilterContainer placeholder='List' />
                </Filters.Filter>
              </Tab.Pane>
            </Tab.Container>
          </Filters.Group>
        </Collapsible.Body>
      </Collapsible.Container>

      <Collapsible.Container initialExpanded>
        <Collapsible.Header>
          <Filters.Heading>Search Filters</Filters.Heading>
        </Collapsible.Header>
        <Collapsible.Body>
          <Filters.Group>
            <Filters.Filter label='Status'>
              <SelectBoxFilterContainer placeholder='Status' />
            </Filters.Filter>
            <Filters.Filter label='Available Before'>
              <InputFilterContainer type='date' />
            </Filters.Filter>
            <Filters.Filter label='Timezone'>
              <SelectBoxFilterContainer placeholder='Timezone' />
            </Filters.Filter>
            <Filters.Filter label='Max Rate' collapsible>
              <InputFilterContainer type='number' />
            </Filters.Filter>
          </Filters.Group>
        </Collapsible.Body>
      </Collapsible.Container>

    </Filters.Container>
  ))
  .add('missing props for Container (does components explode?)', () => (
    <Filters.Container />
  ))
  .add('missing props for Filter (does components explode?)', () => (
    <Filters.Filter />
  ))
  .add('missing props for Group (does components explode?)', () => (
    <Filters.Group />
  ))
  .add('missing props for Heading (does components explode?)', () => (
    <Filters.Heading />
  ))
  .add('missing props for Label (does components explode?)', () => (
    <Filters.Label />
  ))
  .add('missing props for TabButton (does components explode?)', () => (
    <Filters.TabButton />
  ))
  .add('missing props for TabHeads (does components explode?)', () => (
    <Filters.TabHeads />
  ))
