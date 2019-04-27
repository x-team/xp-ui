import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Tabs from '.'
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

storiesOf('UI Components/Tabs', module)
  .add('basic usage', () => (
    <Tabs.Container>
      <Tabs.Head tabKey='first'>
        <ExampleButton text='Tab 1' className='foo' />
      </Tabs.Head>
      <Tabs.Head tabKey='second'>
        <ExampleButton text='Tab 2' className='foo' />
      </Tabs.Head>
      <Tabs.Pane tabKey='first'>
        <div>Foo bar baz 1</div>
      </Tabs.Pane>
      <Tabs.Pane tabKey='second'>
        <div>Foo bar baz 2</div>
      </Tabs.Pane>
    </Tabs.Container>
  ))
  .add('one tab', () => (
    <Tabs.Container>
      <Tabs.Head tabKey='first'>
        <ExampleButton text='Tab 1' className='foo' />
      </Tabs.Head>
      <Tabs.Pane tabKey='first'>
        <div>Foo bar baz 1</div>
      </Tabs.Pane>
    </Tabs.Container>
  ))
  .add('default second active', () => (
    <Tabs.Container defaultActiveKey='second'>
      <Tabs.Head tabKey='first'>
        <ExampleButton text='Tab 1' className='foo' />
      </Tabs.Head>
      <Tabs.Head tabKey='second'>
        <ExampleButton text='Tab 2' className='foo' />
      </Tabs.Head>
      <Tabs.Head tabKey='third'>
        <ExampleButton text='Tab 3' className='bar' />
      </Tabs.Head>
      <Tabs.Pane tabKey='first'>
        <div>Foo bar baz 1</div>
      </Tabs.Pane>
      <Tabs.Pane tabKey='second'>
        <div>Foo bar baz 2</div>
      </Tabs.Pane>
      <Tabs.Pane tabKey='third'>
        <div>Foo bar baz 3</div>
      </Tabs.Pane>
    </Tabs.Container>
  ))
  .add('width custom wrappers for head and content', () => (
    <Tabs.Container headWrapper={HeadWrapper} contentWrapper={ContentWrapper}>
      <Tabs.Head tabKey='first'>
        <ExampleButton text='Tab 1' className='foo' />
      </Tabs.Head>
      <Tabs.Head tabKey='second'>
        <ExampleButton text='Tab 2' className='foo' />
      </Tabs.Head>
      <Tabs.Head tabKey='third'>
        <ExampleButton text='Tab 3' className='bar' />
      </Tabs.Head>
      <Tabs.Pane tabKey='first'>
        <div>Foo bar baz 1</div>
      </Tabs.Pane>
      <Tabs.Pane tabKey='second'>
        <div>Foo bar baz 2</div>
      </Tabs.Pane>
      <Tabs.Pane tabKey='third'>
        <div>Foo bar baz 3</div>
      </Tabs.Pane>
    </Tabs.Container>
  ))
  .add('width onChange callback passed as prop', () => (
    <Tabs.Container onChange={action('onChange callback triggered')}>
      <Tabs.Head tabKey='first'>
        <ExampleButton text='Tab 1' />
      </Tabs.Head>
      <Tabs.Head tabKey='second'>
        <ExampleButton text='Tab 2' />
      </Tabs.Head>
      <Tabs.Head tabKey='third'>
        <ExampleButton text='Tab 3' />
      </Tabs.Head>
      <Tabs.Pane tabKey='first'>
        <div>Foo bar baz 1</div>
      </Tabs.Pane>
      <Tabs.Pane tabKey='second'>
        <div>Foo bar baz 2</div>
      </Tabs.Pane>
      <Tabs.Pane tabKey='third'>
        <div>Foo bar baz 3</div>
      </Tabs.Pane>
    </Tabs.Container>
  ))

storiesOf('UI Components/Tabs/Debug', module)
  .add('change Pane body', () => (
    <State initialState={{ value: 1 }}>
      {({ setState, state }) => state.value ? (
        <Tabs.Container>
          <Tabs.Head tabKey='first'>
            <ExampleButton text={`Tab ${state.value}`} className='foo' />
          </Tabs.Head>
          <Tabs.Pane tabKey='first'>
            <div>Foo bar baz {state.value}</div>
            <Button onClick={() => setState({ value: ++state.value })}>Increment</Button>
          </Tabs.Pane>
        </Tabs.Container>
      ) : null}
    </State>
  ))
  .add('update activeTab from prop', () => (
    <State initialState={{ selectedTab: 'first' }}>
      {({ setState, state }) => (
        <div>
          <Button onClick={() => setState({ selectedTab: state.selectedTab !== 'first' ? 'first' : 'second' })}>Switch Tabs</Button>
          <hr />
          <Tabs.Container
            defaultActiveKey={state.selectedTab}
            key={state.selectedTab}
          >
            <Tabs.Head tabKey='first'>
              <ExampleButton text='First' />
            </Tabs.Head>
            <Tabs.Head tabKey='second'>
              <ExampleButton text='Second' />
            </Tabs.Head>
            <Tabs.Pane tabKey='first'>
              <div>First pane</div>
            </Tabs.Pane>
            <Tabs.Pane tabKey='second'>
              <div>Second pane</div>
            </Tabs.Pane>
          </Tabs.Container>
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
    <Tabs.Container />
  ))
  .add('missing props for Head (does component explode?)', () => (
    <Tabs.Head />
  ))
  .add('missing props for Pane (does component explode?)', () => (
    <Tabs.Pane />
  ))
