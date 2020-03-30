// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import faker from 'faker'
import { object } from '@storybook/addon-knobs'

import ApplicantScreen from './ApplicantScreen'
import { HeaderLink, headerBarLinks } from './HeaderBar.stories'

const Body = ({ children }) => (
  <div style={{ height: '100vh' }}>
    <style dangerouslySetInnerHTML={{ __html: `
      html, body { margin: 0; height: 100%; }
    ` }} />
    {children}
  </div>
)

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
          <span>You've successfully applied for this position. <b>We will reach out soon via email to talk about next steps.</b></span>
        }
      >
        {faker.lorem.paragraphs(50)}
      </ApplicantScreen>
    </Body>
  ))
  .add('with menu links', () => (
    <Body>
      <ApplicantScreen menuLinks={object('Link', headerBarLinks)} appLink={HeaderLink}>
        {faker.lorem.paragraphs(50)}
      </ApplicantScreen>
    </Body>
  ))
  .add('with menu links and notification', () => (
    <Body>
      <ApplicantScreen
        menuLinks={object('Link', headerBarLinks)}
        appLink={HeaderLink}
        notification={
          <span>You've successfully applied for this position. <b>We will reach out soon via email to talk about next steps.</b></span>
        }
      >
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
