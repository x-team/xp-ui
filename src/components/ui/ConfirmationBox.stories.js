// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import faker from 'faker'

import ConfirmationBox from './ConfirmationBox'
import Modal from './Modal'

const Body = ({ children }) => (
  <div style={{ minHeight: '100vh', overflow: 'hidden' }}>
    <style dangerouslySetInnerHTML={{ __html: `
      body { margin: 0; }
    ` }} />
    {children}
  </div>
)

storiesOf('Core Components|ConfirmationBox', module)
  .add('basic usage', () => (
    <ConfirmationBox
      title={text('Title', 'Are you sure?')}
      content={'This will cancel your application and you will no longer be considered for this role.'}
      action={action('CTA Action')}
      actionLabel={'WITHDRAW MY APPLICATION'}
      dismissAction={action('Dismiss action')}
    />
  ))

const closeAction = () => null

storiesOf('Core Components|ConfirmationBox/Use Cases', module)
  .add('with Modal', () => (
    <Body>
      <Modal
        onClose={closeAction}
      >
        <ConfirmationBox
          title={'Are you sure?'}
          content={'This will cancel your application and you will no longer be considered for this role.'}
          action={action('CTA Action: WIDTHDRAW APPLICATION')}
          actionLabel={'WIDTHDRAW APPLICATION'}
          dismissAction={action('Dismiss action')}
        />
      </Modal>
    </Body>
  ))
  .add('with Modal and random data', () => (
    <Body>
      <Modal
        onClose={closeAction}
      >
        <ConfirmationBox
          title={text('Title', faker.lorem.sentence())}
          content={text('Content', faker.lorem.paragraph())}
          action={action('CTA Action: WIDTHDRAW APPLICATION')}
          actionLabel={'WIDTHDRAW APPLICATION'}
          dismissAction={action('Dismiss action')}
        />
      </Modal>
    </Body>
  ))

storiesOf('Core Components|ConfirmationBox/Debug', module)
  .add('difficult data', () => (
    <ConfirmationBox
      title={text('Title', faker.lorem.sentence())}
      content={text('Title', faker.lorem.paragraph())}
      action={action('CTA Action: WIDTHDRAW APPLICATION')}
      actionLabel={'WIDTHDRAW APPLICATION'}
      dismissAction={action('Dismiss action')}
    />
  ))
  .add('missing props (does component explode?)', () => (
    <ConfirmationBox />
  ))
