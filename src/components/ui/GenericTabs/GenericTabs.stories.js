import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import GenericTabs from '.'
import State from '../../../utils/State'
import Button from '../Button'

const ExampleButton = ({ isActive, text, ...props }) => {
  return (
    <span
      {...props}
      style={{ padding: '0 10px 10px 0' }}
      className={`${props.className ? `${props.className}` : ''}${isActive ? ' active' : ''}`}
    >
      {`${text}${isActive ? ' - I\'m active' : ''}`}
    </span>
  )
}
const HeadWrapper = props => <div className='header'>{props.children}</div>
const ContentWrapper = props => <div className='content'>{props.children}</div>

storiesOf('Core Components|GenericTabs', module)
  .add('basic usage', () => (
    <GenericTabs.Container>
      <GenericTabs.Head tabKey='first'>
        <ExampleButton text='Tab 1' className='foo' />
      </GenericTabs.Head>
      <GenericTabs.Head tabKey='second'>
        <ExampleButton text='Tab 2' className='foo' />
      </GenericTabs.Head>
      <GenericTabs.Pane tabKey='first'>
        <div>Foo bar baz 1</div>
      </GenericTabs.Pane>
      <GenericTabs.Pane tabKey='second'>
        <div>Foo bar baz 2</div>
      </GenericTabs.Pane>
    </GenericTabs.Container>
  ))

storiesOf('Core Components|GenericTabs/Debug', module)
  .add('change Pane body', () => (
    <State initialState={{ value: 1 }}>
      {({ setState, state }) => state.value ? (
        <GenericTabs.Container>
          <GenericTabs.Head tabKey='first'>
            <ExampleButton text={`Tab ${state.value}`} className='foo' />
          </GenericTabs.Head>
          <GenericTabs.Pane tabKey='first'>
            <div>Foo bar baz {state.value}</div>
            <Button onClick={() => setState({ value: ++state.value })}>Increment</Button>
          </GenericTabs.Pane>
        </GenericTabs.Container>
      ) : null}
    </State>
  ))
  .add('update activeTab from prop', () => (
    <State initialState={{ selectedTab: 'first' }}>
      {({ setState, state }) => (
        <div>
          <Button onClick={() => setState({ selectedTab: state.selectedTab !== 'first' ? 'first' : 'second' })}>Switch Tabs</Button>
          <hr />
          <GenericTabs.Container
            defaultActiveKey={state.selectedTab}
            key={state.selectedTab}
          >
            <GenericTabs.Head tabKey='first'>
              <ExampleButton text='First' />
            </GenericTabs.Head>
            <GenericTabs.Head tabKey='second'>
              <ExampleButton text='Second' />
            </GenericTabs.Head>
            <GenericTabs.Pane tabKey='first'>
              <div>First pane</div>
            </GenericTabs.Pane>
            <GenericTabs.Pane tabKey='second'>
              <div>Second pane</div>
            </GenericTabs.Pane>
          </GenericTabs.Container>
        </div>
      )}
    </State>
  ), {
    notes: {
      markdown: `
To test this story, click on **Switch Tabs**, it should switch tabs as expected.

This showcase demonstrate that the selected tab is rendering correctly when *defaultActiveKey* prop is updated.
      `
    }
  })
  .add('missing props for Container (does component explode?)', () => (
    <GenericTabs.Container />
  ))
  .add('missing props for Head (does component explode?)', () => (
    <GenericTabs.Head />
  ))
  .add('missing props for Pane (does component explode?)', () => (
    <GenericTabs.Pane />
  ))
  .add('one tab', () => (
    <GenericTabs.Container>
      <GenericTabs.Head tabKey='first'>
        <ExampleButton text='Tab 1' className='foo' />
      </GenericTabs.Head>
      <GenericTabs.Pane tabKey='first'>
        <div>Foo bar baz 1</div>
      </GenericTabs.Pane>
    </GenericTabs.Container>
  ))
  .add('default second active', () => (
    <GenericTabs.Container defaultActiveKey='second'>
      <GenericTabs.Head tabKey='first'>
        <ExampleButton text='Tab 1' className='foo' />
      </GenericTabs.Head>
      <GenericTabs.Head tabKey='second'>
        <ExampleButton text='Tab 2' className='foo' />
      </GenericTabs.Head>
      <GenericTabs.Head tabKey='third'>
        <ExampleButton text='Tab 3' className='bar' />
      </GenericTabs.Head>
      <GenericTabs.Pane tabKey='first'>
        <div>Foo bar baz 1</div>
      </GenericTabs.Pane>
      <GenericTabs.Pane tabKey='second'>
        <div>Foo bar baz 2</div>
      </GenericTabs.Pane>
      <GenericTabs.Pane tabKey='third'>
        <div>Foo bar baz 3</div>
      </GenericTabs.Pane>
    </GenericTabs.Container>
  ))
  .add('width custom wrappers for head and content', () => (
    <GenericTabs.Container headWrapper={HeadWrapper} contentWrapper={ContentWrapper}>
      <GenericTabs.Head tabKey='first'>
        <ExampleButton text='Tab 1' className='foo' />
      </GenericTabs.Head>
      <GenericTabs.Head tabKey='second'>
        <ExampleButton text='Tab 2' className='foo' />
      </GenericTabs.Head>
      <GenericTabs.Head tabKey='third'>
        <ExampleButton text='Tab 3' className='bar' />
      </GenericTabs.Head>
      <GenericTabs.Pane tabKey='first'>
        <div>Foo bar baz 1</div>
      </GenericTabs.Pane>
      <GenericTabs.Pane tabKey='second'>
        <div>Foo bar baz 2</div>
      </GenericTabs.Pane>
      <GenericTabs.Pane tabKey='third'>
        <div>Foo bar baz 3</div>
      </GenericTabs.Pane>
    </GenericTabs.Container>
  ))
  .add('width onChange callback passed as prop', () => (
    <GenericTabs.Container onChange={action('onChange callback triggered')}>
      <GenericTabs.Head tabKey='first'>
        <ExampleButton text='Tab 1' />
      </GenericTabs.Head>
      <GenericTabs.Head tabKey='second'>
        <ExampleButton text='Tab 2' />
      </GenericTabs.Head>
      <GenericTabs.Head tabKey='third'>
        <ExampleButton text='Tab 3' />
      </GenericTabs.Head>
      <GenericTabs.Pane tabKey='first'>
        <div>Foo bar baz 1</div>
      </GenericTabs.Pane>
      <GenericTabs.Pane tabKey='second'>
        <div>Foo bar baz 2</div>
      </GenericTabs.Pane>
      <GenericTabs.Pane tabKey='third'>
        <div>Foo bar baz 3</div>
      </GenericTabs.Pane>
    </GenericTabs.Container>
  ))
