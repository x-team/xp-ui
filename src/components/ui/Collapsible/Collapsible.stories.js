import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from '../Button'

import Collapsible from './'

const exampleText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const ExampleHeader = ({ isExpanded, text, ...props }) => (
  <span
    {...props}
    className={`${isExpanded ? 'isExpanded' : ''}`}
  >
    {text}
  </span>
)

const ExampleHeaderButton = ({ isExpanded, text, ...props }) => (
  <Button
    {...props}
    color={`${isExpanded ? 'gray' : 'normal'}`}
  >
    {text}
  </Button>
)

const HeaderWrapper = props => <div style={{ backgroundColor: 'orange' }}>{props.children}</div>
const BodyWrapper = props => <div style={{ backgroundColor: 'red' }}>{props.children}</div>

storiesOf('UI Components/Collapsible', module)
  .add('basic usage', () => (
    <Collapsible.Container>
      <Collapsible.Header>
        <ExampleHeader text='Collapsed Header' />
      </Collapsible.Header>
      <Collapsible.Body>
        <p>{exampleText}</p>
      </Collapsible.Body>
    </Collapsible.Container>
  ))
  .add('with initial expanded', () => (
    <Collapsible.Container initialCollapsed>
      <Collapsible.Header>
        <ExampleHeader text='Collapsed Header' />
      </Collapsible.Header>
      <Collapsible.Body>
        <p>{exampleText}</p>
      </Collapsible.Body>
    </Collapsible.Container>
  ))
  .add('with onChange event', () => (
    <Collapsible.Container onChange={action('onChange triggered')}>
      <Collapsible.Header>
        <ExampleHeader text='Collapsed Header' />
      </Collapsible.Header>
      <Collapsible.Body>
        <p>{exampleText}</p>
      </Collapsible.Body>
    </Collapsible.Container>
  ))
  .add('with other UI components', () => (
    <Collapsible.Container>
      <Collapsible.Header>
        <ExampleHeaderButton text='Collapsed button' />
      </Collapsible.Header>
      <Collapsible.Body>
        <p>{exampleText}</p>
        <Button>Accept</Button>
      </Collapsible.Body>
    </Collapsible.Container>
  ))
  .add('with elements that not are child of Header or Body (These components should not appear)', () => (
    <Collapsible.Container>
      <Collapsible.Header>
        <ExampleHeader text='Collapsed Header' />
      </Collapsible.Header>
      <Button>Button outside the header</Button>
      <Collapsible.Body>
        <p>{exampleText}</p>
      </Collapsible.Body>
      <Button>Button outside the body content</Button>
    </Collapsible.Container>
  ))
  .add('with custom wrappers for header and body', () => (
    <Collapsible.Container headerWrapper={HeaderWrapper} bodyWrapper={BodyWrapper}>
      <Collapsible.Header>
        <ExampleHeader text='Collapsed Header' />
      </Collapsible.Header>
      <Collapsible.Body>
        <p>{exampleText}</p>
      </Collapsible.Body>
    </Collapsible.Container>
  ))
  .add('with HTML tag for header', () => (
    <Collapsible.Container>
      <Collapsible.Header>
        <h1>H1 header</h1>
      </Collapsible.Header>
      <Collapsible.Body>
        <p>{exampleText}</p>
      </Collapsible.Body>
    </Collapsible.Container>
  ))
  .add('with several HTML tags for header', () => (
    <Collapsible.Container>
      <Collapsible.Header>
        <div>
          <h1>H1 header</h1>
          <p>{exampleText}</p>
          <hr />
        </div>
      </Collapsible.Header>
      <Collapsible.Body>
        <p>{exampleText}</p>
      </Collapsible.Body>
    </Collapsible.Container>
  ))
  .add('missing props and child (does component explode?)', () => (
    <div>
      <Collapsible.Container />
      <Collapsible.Header />
      <Collapsible.Body />
    </div>
  ))
