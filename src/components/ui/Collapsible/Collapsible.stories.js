import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from '../Button'

import Collapsable from './'

const exampleText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const ExampleHeader = ({ isCollapsed, text, ...props }) => (
  <span
    {...props}
    className={`${isCollapsed ? 'isCollapsed' : ''}`}
  >
    {text}
  </span>
)

const ExampleHeaderButton = ({ isCollapsed, text, ...props }) => (
  <Button
    {...props}
    color={`${isCollapsed ? 'gray' : 'normal'}`}
  >
    {text}
  </Button>
)

const HeaderWrapper = props => <div style={{ backgroundColor: 'orange' }}>{props.children}</div>
const BodyWrapper = props => <div style={{ backgroundColor: 'red' }}>{props.children}</div>

storiesOf('UI Components/Collapsible', module)
  .add('basic usage', () => (
    <Collapsable.Container>
      <Collapsable.Header>
        <ExampleHeader text='Collapsed Header' />
      </Collapsable.Header>
      <Collapsable.Body>
        <p>{exampleText}</p>
      </Collapsable.Body>
    </Collapsable.Container>
  ))
  .add('with initial collapsed', () => (
    <Collapsable.Container initialCollapsed>
      <Collapsable.Header>
        <ExampleHeader text='Collapsed Header' />
      </Collapsable.Header>
      <Collapsable.Body>
        <p>{exampleText}</p>
      </Collapsable.Body>
    </Collapsable.Container>
  ))
  .add('with onChange event', () => (
    <Collapsable.Container onChange={action('onChange collapsed')}>
      <Collapsable.Header>
        <ExampleHeader text='Collapsed Header' />
      </Collapsable.Header>
      <Collapsable.Body>
        <p>{exampleText}</p>
      </Collapsable.Body>
    </Collapsable.Container>
  ))
  .add('with other UI components', () => (
    <Collapsable.Container>
      <Collapsable.Header>
        <ExampleHeaderButton text='Collapsed button' />
      </Collapsable.Header>
      <Collapsable.Body>
        <p>{exampleText}</p>
        <Button>Accept</Button>
      </Collapsable.Body>
    </Collapsable.Container>
  ))
  .add('with elements that not are child of Header or Body (These components should not appear)', () => (
    <Collapsable.Container>
      <Collapsable.Header>
        <ExampleHeader text='Collapsed Header' />
      </Collapsable.Header>
      <Button>Button outside the header</Button>
      <Collapsable.Body>
        <p>{exampleText}</p>
      </Collapsable.Body>
      <Button>Button outside the body content</Button>
    </Collapsable.Container>
  ))
  .add('width custom wrappers for header and body', () => (
    <Collapsable.Container headerWrapper={HeaderWrapper} bodyWrapper={BodyWrapper}>
      <Collapsable.Header>
        <p>test</p>
      </Collapsable.Header>
      <Collapsable.Body>
        <p>{exampleText}</p>
      </Collapsable.Body>
    </Collapsable.Container>
  ))
  .add('missing props and child (does component explode?)', () => (
    <div>
      <Collapsable.Container />
      <Collapsable.Header />
      <Collapsable.Body />
    </div>
  ))
