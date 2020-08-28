// @flow
/* global React$Node */

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { object } from '@storybook/addon-knobs'

import HeaderBar from './HeaderBar'

const Body = ({ children }) => (
  <div style={{ widht: '100%', height: '100vh' }}>
    <style dangerouslySetInnerHTML={{ __html: `
      html, body { margin: 0; height: 100%; }
    ` }} />
    {children}
  </div>
)

export const HeaderLink = ({ children, ...props }: { children: React$Node }) => (
  <a onClick={action('This should be react-router/gasby Link')} {...props}>
    {children}
  </a>
)

export const ProfileLink = ({ children, ...props }: { children: React$Node }) => (
  <a onClick={action('This should be react-router/gasby Link')} {...props}>
    {children}
  </a>
)

export const headerBarLinks = [
  {
    label: 'Browse Jobs',
    to: '/jobs'
  },
  {
    label: 'My Applications',
    to: '/jobs/my-applications'
  },
  {
    label: 'Blog',
    href: 'https://x-team.com/blog/'
  },
  {
    label: 'Unleash+',
    href: 'https://x-team.com/unleash/'
  }
]

storiesOf('UI Components|HeaderBar', module)
  .add('basic usage', () => (
    <Body>
      <HeaderBar />
    </Body>
  ))

storiesOf('UI Components|HeaderBar/Use Cases', module)
  .add('with links', () => (
    <Body>
      <HeaderBar
        links={object('Link', headerBarLinks)}
        appLink={HeaderLink}
        profileLink={ProfileLink}
      />
    </Body>
  ))

storiesOf('UI Components|HeaderBar/Debug', module)
  .add('missing props', () => (
    <HeaderBar />
  ))
