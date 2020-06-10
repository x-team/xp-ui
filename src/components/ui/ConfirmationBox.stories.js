// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import faker from 'faker'

import ConfirmationBox from './ConfirmationBox'
import Modal from './Modal'

import State from '../../utils/State'

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
      actionLabel={'WIthdraw my application'}
      dismissAction={action('Dismiss action')}
    />
  ))

storiesOf('Core Components|ConfirmationBox/States', module)
  .add('disabled', () => (
    <ConfirmationBox
      title={text('Title', 'Are you sure?')}
      content={'This will cancel your application and you will no longer be considered for this role.'}
      action={action('CTA Action')}
      actionLabel={'Confirming action...'}
      disabled
    />
  ))

storiesOf('Core Components|ConfirmationBox/Use Cases', module)
  .add('with Modal', () => (
    <Body>
      <State initialState={{ isOpen: true }}>
        { ({ setState, state }) => {
          const closeModal = () => setState({ isOpen: false })
          return state.isOpen ? (
            <Modal
              onClose={closeModal}
            >
              <ConfirmationBox
                title={'Are you sure?'}
                content={'This will cancel your application and you will no longer be considered for this role.'}
                action={action('CTA Action: Withdraw application')}
                actionLabel={'Withdraw application'}
                dismissAction={closeModal}
              />
            </Modal>
          ) : null
        }}
      </State>
    </Body>
  ))

storiesOf('Core Components|ConfirmationBox/Debug', module)
  .add('with Modal and random data', () => (
    <Body>
      <State initialState={{ isOpen: true }}>
        { ({ setState, state }) => {
          const closeModal = () => setState({ isOpen: false })
          return state.isOpen ? (
            <Modal
              onClose={closeModal}
              theme='white'
            >
              <ConfirmationBox
                title={text('Title', faker.lorem.sentence())}
                content={text('Content', faker.lorem.paragraph())}
                action={action('CTA Action: Withdraw application')}
                actionLabel={'Withdraw application'}
                dismissAction={closeModal}
              />
            </Modal>
          ) : null
        }}
      </State>
    </Body>
  ))
  .add('without title', () => (
    <ConfirmationBox
      content={text('Content', faker.lorem.paragraph())}
      action={action('CTA Action: Withdraw application')}
      actionLabel={text('Action', faker.lorem.words())}
      dismissAction={action('Dismiss action')}
    />
  ))
  .add('random data', () => (
    <ConfirmationBox
      title={text('Title', faker.lorem.sentence())}
      content={text('Content', faker.lorem.paragraph())}
      action={action('CTA Action: Withdraw application')}
      actionLabel={text('Action', faker.lorem.words())}
      dismissAction={action('Dismiss action')}
    />
  ))
  .add('random data and action button only', () => (
    <ConfirmationBox
      title={text('Title', faker.lorem.sentence())}
      content={text('Content', faker.lorem.paragraph())}
      action={action('CTA Action: Withdraw application')}
      actionLabel={text('Action', faker.lorem.words())}
    />
  ))
  .add('random data and dismiss button only', () => (
    <ConfirmationBox
      title={text('Title', faker.lorem.sentence())}
      content={text('Content', faker.lorem.paragraph())}
      dismissAction={action('Dismiss action')}
    />
  ))
  .add('missing props', () => (
    <ConfirmationBox />
  ))
