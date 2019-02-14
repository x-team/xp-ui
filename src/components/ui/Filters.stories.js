import React from 'react'
import { storiesOf } from '@storybook/react'

import Filters from './Filters'
import Button from './Button'
import SelectBox from './SelectBox'

const FilterInputContainer = () => (
  <SelectBox size='small' />
)

storiesOf('UI Components/Filters', module)
  .add('default', () => (
    <Filters>
      <Filters.Heading>Context Filters</Filters.Heading>
      <Filters.Label>Show</Filters.Label>
      <Filters.TabHeads>
        <Button color='silver' outlined smallRounded>List</Button>
        <Button color='silver' outlined smallRounded>All Applicants</Button>
      </Filters.TabHeads>
      <Filters.Filter label='List'>
        <FilterInputContainer />
      </Filters.Filter>
      <Filters.Filter label='List Members'>
        <FilterInputContainer />
      </Filters.Filter>
      <Filters.Filter label='Accept / Exclude To'>
        <FilterInputContainer />
      </Filters.Filter>
      <Filters.Heading>Search Filters</Filters.Heading>
      <Filters.Filter label='Status'>
        <FilterInputContainer />
      </Filters.Filter>
      <Filters.Filter label='Available Before'>
        <FilterInputContainer />
      </Filters.Filter>
      <Filters.Filter label='Timezone'>
        <FilterInputContainer />
      </Filters.Filter>
      <Filters.Filter label='Max Rate'>
        <FilterInputContainer />
      </Filters.Filter>
    </Filters>
  ))
  .add('missing props (does component explode?)', () => (
    <Filters />
  ))


/*
<Filters>
  <Collapsible>
    <Collapsible.Header>
      <Filters.Heading>Context Filters</Filters.Heading>
    </Collapsible.Header>
    <Collapsible.Body>
      <Filters.Label>Show</Filters.Label>
      <Tab.Container defaultActiveKey="list">
        <Tab.Head tabKey="list">
          <Button>List</Button>
        </Tab.Head>
        <Tab.Head tabKey="all">
          <Button>All Applicants</Button>
        </Tab.Head>
        <Tab.Content>
          <Tab.Pane tabKey="list">
            <Filters.Filter label='List' input={FilterInputContainer} />
            <Filters.Filter label='List Members' input={FilterInputContainer} />
          </Tab.Pane>
          <Tab.Pane tabKey="all">
            <Filters.Filter label='Accept / Exclude To' input={FilterInputContainer} />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Collapsible.Body>
  </Collapsible>

  <Collapsible>
    <Collapsible.Header>
      <Filters.Heading>Search Filters</Filters.Heading>
    </Collapsible.Header>
    <Collapsible.Body>
      <Filters.Filter label='Status' input={FilterInputContainer} />
      <Filters.Filter label='Available Before' input={FilterInputContainer} />
      <Filters.Filter label='Timezone' input={FilterInputContainer} />
      <Filters.Filter label='Max Rate' input={FilterInputContainer} />
    </Collapsible.Body>
  </Collapsible>
</Filters>
*/
