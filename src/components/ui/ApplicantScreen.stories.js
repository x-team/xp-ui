// @flow
/* global React$Node */

import React from 'react'
import { storiesOf } from '@storybook/react'
import faker from 'faker'
import { object } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import ApplicantScreen from './ApplicantScreen'

const Body = ({ children }) => (
  <div style={{ height: '100vh' }}>
    <style dangerouslySetInnerHTML={{ __html: `
      html, body { margin: 0; height: 100%; }
    ` }} />
    {children}
  </div>
)

const HeaderLink = ({ children, ...props }: { children: React$Node }) => (
  <a onClick={action('This should be react-router/gasby Link')} {...props}>
    {children}
  </a>
)

const links = [
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

storiesOf('Screens and Layouts|ApplicantScreen', module)
  .add('basic usage', () => (
    <Body>
      <ApplicantScreen>
        {faker.lorem.paragraphs(50)}
      </ApplicantScreen>
    </Body>
  ))

storiesOf('Screens and Layouts|ApplicantScreen/States', module)
  .add('with notification', () => (
    <Body>
      <ApplicantScreen
        notification={
          <span>You've successfully applied for this position. <b>Check your email for next steps</b></span>
        }
      >
        {faker.lorem.paragraphs(50)}
      </ApplicantScreen>
    </Body>
  ))
  .add('with menu links', () => (
    <Body>
      <ApplicantScreen menuLinks={object('Link', links)} appLink={HeaderLink}>
        {faker.lorem.paragraphs(50)}
      </ApplicantScreen>
    </Body>
  ))

storiesOf('Screens and Layouts|ApplicantScreen/Debug', module)
  .add('with narrower wrapper', () => (
    <Body>
      <ApplicantScreen wrapper='narrower'>
        {faker.lorem.paragraphs(50)}
      </ApplicantScreen>
    </Body>
  ))
  .add('with wider wrapper', () => (
    <Body>
      <ApplicantScreen wrapper='wider'>
        {faker.lorem.paragraphs(50)}
      </ApplicantScreen>
    </Body>
  ))
  .add('without wrapper', () => (
    <Body>
      <ApplicantScreen noWrapper>
        {faker.lorem.paragraphs(50)}
      </ApplicantScreen>
    </Body>
  ))
  .add('missing props', () => (
    <ApplicantScreen />
  ))
