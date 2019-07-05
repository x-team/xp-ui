import React from 'react'
import { storiesOf } from '@storybook/react'

import GenericCollapsible from './GenericCollapsible'
import GenericCollapsibleAccordion from './GenericCollapsibleAccordion'
import Button from './Button'
import State from '../../utils/State'

const exampleText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const ExampleHeader = ({ isExpanded, text, ...props }) => (
  <span
    {...props}
    className={`${isExpanded ? 'isExpanded' : ''}`}
  >
    {text}
  </span>
)

storiesOf('UI Components/GenericCollapsibleAccordion', module)
  .add('basic usage', () => (
    <GenericCollapsibleAccordion>
      <GenericCollapsible.Container>
        <GenericCollapsible.Header>
          <ExampleHeader text='Collapsed Header 1' />
        </GenericCollapsible.Header>
        <GenericCollapsible.Body>
          <p>{exampleText}</p>
        </GenericCollapsible.Body>
      </GenericCollapsible.Container>

      <GenericCollapsible.Container>
        <GenericCollapsible.Header>
          <ExampleHeader text='Collapsed Header 2' />
        </GenericCollapsible.Header>
        <GenericCollapsible.Body>
          <p>{exampleText}</p>
        </GenericCollapsible.Body>
      </GenericCollapsible.Container>

      <GenericCollapsible.Container>
        <GenericCollapsible.Header>
          <ExampleHeader text='Collapsed Header 3' />
        </GenericCollapsible.Header>
        <GenericCollapsible.Body>
          <p>{exampleText}</p>
        </GenericCollapsible.Body>
      </GenericCollapsible.Container>
    </GenericCollapsibleAccordion>
  )).add('usage with alternate default index', () => (
    <GenericCollapsibleAccordion defaultActiveIndex={2}>
      <GenericCollapsible.Container>
        <GenericCollapsible.Header>
          <ExampleHeader text='Collapsed Header 1' />
        </GenericCollapsible.Header>
        <GenericCollapsible.Body>
          <p>{exampleText}</p>
        </GenericCollapsible.Body>
      </GenericCollapsible.Container>

      <GenericCollapsible.Container>
        <GenericCollapsible.Header>
          <ExampleHeader text='Collapsed Header 2' />
        </GenericCollapsible.Header>
        <GenericCollapsible.Body>
          <p>{exampleText}</p>
        </GenericCollapsible.Body>
      </GenericCollapsible.Container>

      <GenericCollapsible.Container>
        <GenericCollapsible.Header>
          <ExampleHeader text='Collapsed Header 3' />
        </GenericCollapsible.Header>
        <GenericCollapsible.Body>
          <p>{exampleText}</p>
        </GenericCollapsible.Body>
      </GenericCollapsible.Container>
    </GenericCollapsibleAccordion>
  )).add('usage with controlled prop', () => (
    <State initialState={{ current: 0 }}>
      {({ setState, state }) => (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <GenericCollapsibleAccordion
            controlled
            activeIndex={state.current}
            onChange={(index) => setState({ current: index })}
          >
            <GenericCollapsible.Container>
              <GenericCollapsible.Header>
                <ExampleHeader text='Collapsed Header 1' />
              </GenericCollapsible.Header>
              <GenericCollapsible.Body>
                <p>{exampleText}</p>
              </GenericCollapsible.Body>
            </GenericCollapsible.Container>

            <GenericCollapsible.Container>
              <GenericCollapsible.Header>
                <ExampleHeader text='Collapsed Header 2' />
              </GenericCollapsible.Header>
              <GenericCollapsible.Body>
                <p>{exampleText}</p>
              </GenericCollapsible.Body>
            </GenericCollapsible.Container>

            <GenericCollapsible.Container>
              <GenericCollapsible.Header>
                <ExampleHeader text='Collapsed Header 3' />
              </GenericCollapsible.Header>
              <GenericCollapsible.Body>
                <p>{exampleText}</p>
              </GenericCollapsible.Body>
            </GenericCollapsible.Container>
          </GenericCollapsibleAccordion>
        </div>
      )}
    </State>
  ))

storiesOf('UI Components/GenericCollapsibleAccordion/Debug', module)
  .add('without defaultActiveIndex', () => (
    <GenericCollapsibleAccordion>
      <GenericCollapsible.Container>
        <GenericCollapsible.Header>
          <ExampleHeader text={'Collapsed Header (click to toggle content visibility)'} />
        </GenericCollapsible.Header>
        <GenericCollapsible.Body>
          <p>{exampleText}</p>
        </GenericCollapsible.Body>
      </GenericCollapsible.Container>
      <GenericCollapsible.Container>
        <GenericCollapsible.Header>
          <ExampleHeader text={'Collapsed Header (click to toggle content visibility)'} />
        </GenericCollapsible.Header>
        <GenericCollapsible.Body>
          <p>{exampleText}</p>
        </GenericCollapsible.Body>
      </GenericCollapsible.Container>
    </GenericCollapsibleAccordion>
  ))
  .add('with valid defaultActiveIndex', () => (
    <GenericCollapsibleAccordion defaultActiveIndex={1}>
      <GenericCollapsible.Container>
        <GenericCollapsible.Header>
          <ExampleHeader text={'Collapsed Header (click to toggle content visibility)'} />
        </GenericCollapsible.Header>
        <GenericCollapsible.Body>
          <p>{exampleText}</p>
        </GenericCollapsible.Body>
      </GenericCollapsible.Container>
      <GenericCollapsible.Container>
        <GenericCollapsible.Header>
          <ExampleHeader text={'Collapsed Header (click to toggle content visibility)'} />
        </GenericCollapsible.Header>
        <GenericCollapsible.Body>
          <p>{exampleText}</p>
        </GenericCollapsible.Body>
      </GenericCollapsible.Container>
    </GenericCollapsibleAccordion>
  ))
  .add('with out of bounds defaultActiveIndex (should default to 0)', () => (
    <GenericCollapsibleAccordion defaultActiveIndex={2}>
      <GenericCollapsible.Container>
        <GenericCollapsible.Header>
          <ExampleHeader text='Collapsed Header (click to toggle content visibility)' />
        </GenericCollapsible.Header>
        <GenericCollapsible.Body>
          <p>{exampleText}</p>
        </GenericCollapsible.Body>
      </GenericCollapsible.Container>
      <GenericCollapsible.Container>
        <GenericCollapsible.Header>
          <ExampleHeader text={'Collapsed Header (click to toggle content visibility)'} />
        </GenericCollapsible.Header>
        <GenericCollapsible.Body>
          <p>{exampleText}</p>
        </GenericCollapsible.Body>
      </GenericCollapsible.Container>
    </GenericCollapsibleAccordion>
  ))
  .add('with children that are not GenericCollapsible Containers', () => (
    <GenericCollapsibleAccordion>
      <GenericCollapsible.Container>
        <GenericCollapsible.Header>
          <ExampleHeader text='Collapsed Header' />
        </GenericCollapsible.Header>
        <Button>Button outside the header</Button>
        <GenericCollapsible.Body>
          <p>{exampleText}</p>
        </GenericCollapsible.Body>
      </GenericCollapsible.Container>
      <GenericCollapsible.Container>
        <GenericCollapsible.Header>
          <ExampleHeader text='Collapsed Header' />
        </GenericCollapsible.Header>
        <Button>Button outside the header</Button>
        <GenericCollapsible.Body>
          <p>{exampleText}</p>
        </GenericCollapsible.Body>
      </GenericCollapsible.Container>
      <Button>Button outside the body content</Button>
    </GenericCollapsibleAccordion>
  ))
