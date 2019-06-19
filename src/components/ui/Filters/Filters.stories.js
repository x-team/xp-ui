import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import State from '../../../utils/State'

import Filters from '.'
import GenericCollapsible from '../GenericCollapsible'
import GenericTabs from '../GenericTabs'
import InputField from '../../forms/InputField'
import SelectBox from '../SelectBox'
import ApplicantGrid from '../ApplicantGrid'
import { getApplicantBadges } from '../ApplicantGrid.stories'

export const InputFilterContainer = props => (
  <InputField {...props} />
)

export const SelectBoxFilterContainer = props => (
  <SelectBox size='small' hasSearch={false} {...props} />
)

const Sandbox = props => (
  <div style={{
    width: '400px',
    border: '1px dashed silver'
  }}>
    {props.children}
  </div>
)

const Body = ({ children }) => (
  <div style={{ height: '100vh' }}>
    <style dangerouslySetInnerHTML={{ __html: `
      html, body { margin: 0; height: 100%; }
    ` }} />
    {children}
  </div>
)

const applicantBadges = getApplicantBadges()

export const StoryFilters = () => (
  <Filters.Container>

    <GenericCollapsible.Container initialExpanded>
      <GenericCollapsible.Header>
        <Filters.Heading>Context Filters</Filters.Heading>
      </GenericCollapsible.Header>
      <GenericCollapsible.Body>
        <Filters.Group>
          <Filters.Label>Show</Filters.Label>
          <GenericTabs.Container defaultActiveKey='list' headWrapper={Filters.TabHeads}>
            <GenericTabs.Head tabKey='list'>
              <Filters.TabButton text='list' />
            </GenericTabs.Head>
            <GenericTabs.Head tabKey='all'>
              <Filters.TabButton text='All Applicants' />
            </GenericTabs.Head>
            <GenericTabs.Pane tabKey='list'>
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
                <br />
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
            </GenericTabs.Pane>
            <GenericTabs.Pane tabKey='all'>
              <Filters.Filter label='Accept / Exclude To'>
                <SelectBoxFilterContainer placeholder='List' />
              </Filters.Filter>
            </GenericTabs.Pane>
          </GenericTabs.Container>
        </Filters.Group>
      </GenericCollapsible.Body>
    </GenericCollapsible.Container>

    <GenericCollapsible.Container initialExpanded>
      <GenericCollapsible.Header>
        <Filters.Heading>Search Filters</Filters.Heading>
      </GenericCollapsible.Header>
      <GenericCollapsible.Body>
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
          <Filters.Filter label='Max Rate'>
            <InputFilterContainer type='number' />
          </Filters.Filter>
        </Filters.Group>
      </GenericCollapsible.Body>
    </GenericCollapsible.Container>

  </Filters.Container>
)

export const StoryFiltersWithAccordion = () => (
  <State initialState={{ expanded: 'filters' }}>
    {({ setState, state }) => (
      <Filters.Container isAccordion>

        <GenericCollapsible.Container
          isAccordion
          initialExpanded={state.expanded === 'filters'}
          onChange={() => setState(prev => ({ expanded: 'filters' }))}
        >
          <GenericCollapsible.Header>
            <Filters.Heading>Filters</Filters.Heading>
          </GenericCollapsible.Header>
          <GenericCollapsible.Body>
            <Filters.SubHeading>Context Filters</Filters.SubHeading>
            <Filters.Group>
              <Filters.Label>Show</Filters.Label>
              <GenericTabs.Container defaultActiveKey='list' headWrapper={Filters.TabHeads}>
                <GenericTabs.Head tabKey='list'>
                  <Filters.TabButton text='list' />
                </GenericTabs.Head>
                <GenericTabs.Head tabKey='all'>
                  <Filters.TabButton text='All Applicants' />
                </GenericTabs.Head>
                <GenericTabs.Pane tabKey='list'>
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
                    <br />
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
                </GenericTabs.Pane>
                <GenericTabs.Pane tabKey='all'>
                  <Filters.Filter label='Accept / Exclude To'>
                    <SelectBoxFilterContainer placeholder='List' />
                  </Filters.Filter>
                </GenericTabs.Pane>
              </GenericTabs.Container>
            </Filters.Group>

            <Filters.SubHeading>Search Filters</Filters.SubHeading>
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
              <Filters.Filter label='Max Rate'>
                <InputFilterContainer type='number' />
              </Filters.Filter>
            </Filters.Group>

          </GenericCollapsible.Body>
        </GenericCollapsible.Container>

        <GenericCollapsible.Container
          isAccordion
          initialExpanded={state.expanded === 'results'}
          onChange={() => setState(prev => ({ expanded: 'results' }))}
        >
          <GenericCollapsible.Header>
            <Filters.Heading>Results</Filters.Heading>
          </GenericCollapsible.Header>
          <GenericCollapsible.Body>
            <ApplicantGrid
              items={applicantBadges}
              visible={10}
              increment={2}
            />
          </GenericCollapsible.Body>
        </GenericCollapsible.Container>

      </Filters.Container>
    )}
  </State>
)

storiesOf('UI Components/Filters', module)
  .add('example of complete composition', () => (
    <Body>
      <StoryFilters />
    </Body>
  ))
  .add('example of complete composition with accordion effect', () => (
    <Body>
      <StoryFiltersWithAccordion />
    </Body>
  ))

storiesOf('UI Components/Filters/Debug', module)
  .add('standalone Filter', () => (
    <Sandbox>
      <Filters.Filter
        label={text('Label', 'Standalone Filter')}
      >
        <input type='text' placeholder='this is a regular HTML input' style={{ width: '100%' }} />
      </Filters.Filter>
    </Sandbox>
  ), {
    notes: {
      markdown: `
In this sotry the \`<Filter>\` component is wrapped with a \`<Sandbox>\` component with maximum width and dashed border in order to expose it's area.

Check **KNOBS** to debug with different props.
      `
    }
  })
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
  .add('missing props for SubHeading (does components explode?)', () => (
    <Filters.SubHeading />
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
