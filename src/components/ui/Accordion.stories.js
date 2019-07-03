import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import GenericCollapsible from './GenericCollapsible'
import Accordion from './Accordion'

const exampleText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const ExampleHeader = ({ isExpanded, text, ...props }) => (
  <span
    {...props}
    className={`${isExpanded ? 'isExpanded' : ''}`}
  >
    {text}
  </span>
)

storiesOf('UI Components/Accordion', module)
  .add('basic usage with accordion effect', () => (
    <Accordion>
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
    </Accordion>
  ))

storiesOf('UI Components/Accordion/Debug', module)
  // leaving those here for now as examples for when I write the debug cases tomorrow :)
  //
  // .add('with initial expanded', () => (
  //   <GenericCollapsible.Container initialExpanded>
  //     <GenericCollapsible.Header>
  //       <ExampleHeader text='Collapsed Header (click to toggle content visibility)' />
  //     </GenericCollapsible.Header>
  //     <GenericCollapsible.Body>
  //       <p>{exampleText}</p>
  //     </GenericCollapsible.Body>
  //   </GenericCollapsible.Container>
  // ))
  // .add('with onChange event', () => (
  //   <GenericCollapsible.Container onChange={action('onChange triggered')}>
  //     <GenericCollapsible.Header>
  //       <ExampleHeader text='Collapsed Header (click to toggle content visibility)' />
  //     </GenericCollapsible.Header>
  //     <GenericCollapsible.Body>
  //       <p>{exampleText}</p>
  //     </GenericCollapsible.Body>
  //   </GenericCollapsible.Container>
  // ))
  // .add('with other UI components', () => (
  //   <GenericCollapsible.Container>
  //     <GenericCollapsible.Header>
  //       <ExampleHeaderButton text='Collapsed button' />
  //     </GenericCollapsible.Header>
  //     <GenericCollapsible.Body>
  //       <p>{exampleText}</p>
  //       <Button>Accept</Button>
  //     </GenericCollapsible.Body>
  //   </GenericCollapsible.Container>
  // ))
  // .add('with elements that not are child of Header or Body (these components should not appear)', () => (
  //   <GenericCollapsible.Container>
  //     <GenericCollapsible.Header>
  //       <ExampleHeader text='Collapsed Header' />
  //     </GenericCollapsible.Header>
  //     <Button>Button outside the header</Button>
  //     <GenericCollapsible.Body>
  //       <p>{exampleText}</p>
  //     </GenericCollapsible.Body>
  //     <Button>Button outside the body content</Button>
  //   </GenericCollapsible.Container>
  // ))
  // .add('with custom wrappers for header and body', () => (
  //   <GenericCollapsible.Container headerWrapper={HeaderWrapper} bodyWrapper={BodyWrapper}>
  //     <GenericCollapsible.Header>
  //       <ExampleHeader text='Collapsed Header' />
  //     </GenericCollapsible.Header>
  //     <GenericCollapsible.Body>
  //       <p>{exampleText}</p>
  //     </GenericCollapsible.Body>
  //   </GenericCollapsible.Container>
  // ))
  // .add('with HTML tag for header', () => (
  //   <GenericCollapsible.Container>
  //     <GenericCollapsible.Header>
  //       <h1>H1 header</h1>
  //     </GenericCollapsible.Header>
  //     <GenericCollapsible.Body>
  //       <p>{exampleText}</p>
  //     </GenericCollapsible.Body>
  //   </GenericCollapsible.Container>
  // ))
  // .add('with several HTML tags for header', () => (
  //   <GenericCollapsible.Container>
  //     <GenericCollapsible.Header>
  //       <div>
  //         <h1>H1 header</h1>
  //         <p>{exampleText}</p>
  //         <hr />
  //       </div>
  //     </GenericCollapsible.Header>
  //     <GenericCollapsible.Body>
  //       <p>{exampleText}</p>
  //     </GenericCollapsible.Body>
  //   </GenericCollapsible.Container>
  // ))
  // .add('with nested GenericCollapsibles', () => (
  //   <GenericCollapsible.Container>
  //     <GenericCollapsible.Header>
  //       <h1>First Level</h1>
  //     </GenericCollapsible.Header>
  //     <GenericCollapsible.Body>
  //       <GenericCollapsible.Container>
  //         <GenericCollapsible.Header>
  //           <h2>Second Level</h2>
  //         </GenericCollapsible.Header>
  //         <GenericCollapsible.Body>
  //           <p>{exampleText}</p>
  //         </GenericCollapsible.Body>
  //       </GenericCollapsible.Container>
  //     </GenericCollapsible.Body>
  //   </GenericCollapsible.Container>
  // ))
  // .add('missing props for Container (does component explode?)', () => (
  //   <GenericCollapsible.Container />
  // ))
  // .add('missing props for Header (does component explode?)', () => (
  //   <GenericCollapsible.Header />
  // ))
  // .add('missing props for Body (does component explode?)', () => (
  //   <GenericCollapsible.Body />
  // ))
