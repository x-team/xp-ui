// @flow
/* global React$Node */

import React from 'react'
import faker from 'faker'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import WelcomeHero from './WelcomeHero'

export const validVideoUrl = 'https://www.youtube.com/embed/R6NUFRNEai4'

const ProfileLink = ({ children, ...props }: { children: React$Node }) => (
  <a onClick={action('This should be react-router/gatsby Link')} {...props}>
    {children}
  </a>
)

storiesOf('UI Components|WelcomeHero', module)
  .add('basic usage', () => (
    <WelcomeHero
      heading='Welcome!'
      videoUrl={validVideoUrl}
      onDismiss={action('Handle dismiss')}
      profileLink={ProfileLink}
    >
      Watch X-Team's CEO explain how X-Team makes working from anywhere the most energizing and rewarding experience imaginable.
    </WelcomeHero>
  ))

storiesOf('UI Components|WelcomeHero/Debug', module)
  .add('long content', () => (
    <WelcomeHero
      heading={faker.lorem.sentence()}
      videoUrl={validVideoUrl}
      onDismiss={action('Handle dismiss')}
      profileLink={ProfileLink}
    >
      {faker.lorem.paragraphs(5)}
    </WelcomeHero>
  ))
  .add('short content', () => (
    <WelcomeHero
      heading='Yo!'
      videoUrl={validVideoUrl}
      onDismiss={action('Handle dismiss')}
      profileLink={ProfileLink}
    >
      Hey...
    </WelcomeHero>
  ))
  .add('invalid video URL', () => (
    <WelcomeHero
      heading={faker.lorem.words(2)}
      videoUrl='http://this.is.not.a.valid.video.url'
      onDismiss={action('Handle dismiss')}
      profileLink={ProfileLink}
    >
      {faker.lorem.sentences()}
    </WelcomeHero>
  ))
  .add('invalid video ID', () => (
    <WelcomeHero
      heading={faker.lorem.words(2)}
      videoUrl='https://www.youtube.com/embed/INVALIDVIDID'
      onDismiss={action('Handle dismiss')}
      profileLink={ProfileLink}
    >
      {faker.lorem.sentences()}
    </WelcomeHero>
  ))
  .add('missing heading', () => (
    <WelcomeHero
      videoUrl={validVideoUrl}
      onDismiss={action('Handle dismiss')}
      profileLink={ProfileLink}
    >
      {faker.lorem.sentences()}
    </WelcomeHero>
  ))
  .add('missing content', () => (
    <WelcomeHero
      heading={faker.lorem.words(2)}
      videoUrl='https://www.youtube.com/embed/INVALIDVIDID'
      onDismiss={action('Handle dismiss')}
      profileLink={ProfileLink}
    />
  ))
  .add('missing onDismiss', () => (
    <WelcomeHero
      heading={faker.lorem.words(2)}
      videoUrl={validVideoUrl}
      profileLink={ProfileLink}
    >
      {faker.lorem.sentences()}
    </WelcomeHero>
  ))
  .add('missing profile link', () => (
    <WelcomeHero
      heading={faker.lorem.words(2)}
      videoUrl={validVideoUrl}
      onDismiss={action('Handle dismiss')}
    >
      {faker.lorem.sentences()}
    </WelcomeHero>
  ))
  .add('missing props', () => (
    <WelcomeHero />
  ))
