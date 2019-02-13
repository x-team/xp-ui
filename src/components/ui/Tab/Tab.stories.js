import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Tab from './'

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

storiesOf('UI Components/Tab', module)
  .add('basic usage', () => (
    <Tab.Container>
      <Tab.Head tabKey='first'>
        <ExampleButton text='Tab 1' className='foo' />
      </Tab.Head>
      <Tab.Head tabKey='second'>
        <ExampleButton text='Tab 2' className='foo' />
      </Tab.Head>
      <Tab.Pane tabKey='first'>
        <div>Foo bar baz 1</div>
      </Tab.Pane>
      <Tab.Pane tabKey='second'>
        <div>Foo bar baz 2</div>
      </Tab.Pane>
    </Tab.Container>
  ))
  .add('one tab', () => (
    <Tab.Container>
      <Tab.Head tabKey='first'>
        <ExampleButton text='Tab 1' className='foo' />
      </Tab.Head>
      <Tab.Pane tabKey='first'>
        <div>Foo bar baz 1</div>
      </Tab.Pane>
    </Tab.Container>
  ))
  .add('default second active', () => (
    <Tab.Container defaultActiveKey='second'>
      <Tab.Head tabKey='first'>
        <ExampleButton text='Tab 1' className='foo' />
      </Tab.Head>
      <Tab.Head tabKey='second'>
        <ExampleButton text='Tab 2' className='foo' />
      </Tab.Head>
      <Tab.Head tabKey='third'>
        <ExampleButton text='Tab 3' className='bar' />
      </Tab.Head>
      <Tab.Pane tabKey='first'>
        <div>Foo bar baz 1</div>
      </Tab.Pane>
      <Tab.Pane tabKey='second'>
        <div>Foo bar baz 2</div>
      </Tab.Pane>
      <Tab.Pane tabKey='third'>
        <div>Foo bar baz 3</div>
      </Tab.Pane>
    </Tab.Container>
  ))
  .add('width custom wrappers for head and content', () => (
    <Tab.Container headWrapper={HeadWrapper} contentWrapper={ContentWrapper}>
      <Tab.Head tabKey='first'>
        <ExampleButton text='Tab 1' className='foo' />
      </Tab.Head>
      <Tab.Head tabKey='second'>
        <ExampleButton text='Tab 2' className='foo' />
      </Tab.Head>
      <Tab.Head tabKey='third'>
        <ExampleButton text='Tab 3' className='bar' />
      </Tab.Head>
      <Tab.Pane tabKey='first'>
        <div>Foo bar baz 1</div>
      </Tab.Pane>
      <Tab.Pane tabKey='second'>
        <div>Foo bar baz 2</div>
      </Tab.Pane>
      <Tab.Pane tabKey='third'>
        <div>Foo bar baz 3</div>
      </Tab.Pane>
    </Tab.Container>
  ))
  .add('width onChange callback passed as prop', () => (
    <Tab.Container onChange={action('onChange callback triggered')}>
      <Tab.Head tabKey='first'>
        <ExampleButton text='Tab 1' />
      </Tab.Head>
      <Tab.Head tabKey='second'>
        <ExampleButton text='Tab 2' />
      </Tab.Head>
      <Tab.Head tabKey='third'>
        <ExampleButton text='Tab 3' />
      </Tab.Head>
      <Tab.Pane tabKey='first'>
        <div>Foo bar baz 1</div>
      </Tab.Pane>
      <Tab.Pane tabKey='second'>
        <div>Foo bar baz 2</div>
      </Tab.Pane>
      <Tab.Pane tabKey='third'>
        <div>Foo bar baz 3</div>
      </Tab.Pane>
    </Tab.Container>
  ))
  .add('missing props for Container (does component explose?)', () => (
    <Tab.Container></Tab.Container>
  ))
  .add('missing props for Head (does component explose?)', () => (
    <Tab.Head></Tab.Head>
  ))

  .add('missing props for Pane (does component explose?)', () => (
    <Tab.Pane></Tab.Pane>
  ))
