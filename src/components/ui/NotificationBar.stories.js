// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, radios } from '@storybook/addon-knobs'

import NotificationBar from './NotificationBar'
import SvgIcon from './SvgIcon'
import ApplicationSuccessNotification from './ApplicationSuccessNotification'

storiesOf('UI Components|NotificationBar', module)
  .add('default', () => {
    const typeOptions = {
      Success: 'success',
      Warning: 'warning',
      Error: 'error'
    }

    const alignOptions = {
      Center: 'center',
      Default: 'default'
    }

    return (
      <NotificationBar
        type={radios('Type', typeOptions, 'success')}
        align={radios('Align', alignOptions, 'center')}
        display={boolean('Display', true)}
      >
        <span>Hello this is a notification</span>
      </NotificationBar>
    )
  })

storiesOf('UI Components|NotificationBar/Use Cases', module)
  .add('XP list error notification', () => {
    const wrapperStyles = {
      marginLeft: '10px'
    }

    const spanStyles = {
      color: 'white',
      marginLeft: '10px',
      fontFamily: '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif'
    }

    const ListAddErrorNotification = () => (
      <NotificationBar type='error' align='default' display>
        <div style={wrapperStyles}>
          <SvgIcon icon='x' color='inverted' />
          <span style={spanStyles}>Error adding new list. Please try again.</span>
        </div>
      </NotificationBar>
    )

    return (<ListAddErrorNotification />)
  })
  .add('Generic connection issue notification', () => {
    const wrapperStyles = {
      marginLeft: '10px'
    }

    const spanStyles = {
      color: 'white',
      marginLeft: '10px',
      fontFamily: '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif'
    }

    const ConnectionWarningNotification = () => (
      <NotificationBar type='warning' align='center' display>
        <div style={wrapperStyles}>
          <SvgIcon icon='time' color='inverted' />
          <span style={spanStyles}>Internet connectivity issues detected. Waiting for stability...</span>
        </div>
      </NotificationBar>
    )

    return (<ConnectionWarningNotification />)
  })
  .add('Applicant screen\'s application success notification', () => (
    <ApplicationSuccessNotification display />
  ))

storiesOf('UI Components|NotificationBar/States', module)
  .add('open', () => (
    <NotificationBar
      type='success'
      display
    >
      <span>Hello this is a notification</span>
    </NotificationBar>
  ))
  .add('success', () => (
    <NotificationBar
      type='success'
      display
    >
      <span>Hello this is a notification</span>
    </NotificationBar>
  ))
  .add('error', () => (
    <NotificationBar
      type='error'
      display
    >
      <span>Hello this is a notification</span>
    </NotificationBar>
  ))
  .add('warning', () => (
    <NotificationBar
      type='warning'
      display
    >
      <span>Hello this is a notification</span>
    </NotificationBar>
  ))
  .add('closed', () => (
    <NotificationBar
      type='success'
    >
      <span>Hello this is a notification</span>
    </NotificationBar>
  ))
  .add('align center', () => (
    <NotificationBar
      type='success'
      align='center'
    >
      <span>Hello this is a notification</span>
    </NotificationBar>
  ))

storiesOf('UI Components|NotificationBar/Debug', module)
  .add('static closed', () => (
    <NotificationBar
      type='success'
      isStatic
    >
      <span>Hello this is a notification</span>
    </NotificationBar>
  ))
  .add('static open', () => (
    <NotificationBar
      type='success'
      display
      isStatic
    >
      <span>Hello this is a notification</span>
    </NotificationBar>
  ))
  .add('missing props', () => (
    <NotificationBar />
  ))
