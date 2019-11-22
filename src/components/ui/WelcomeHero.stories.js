// @flow

import React from 'react'
import faker from 'faker'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import WelcomeHero from './WelcomeHero'

const validVideoUrl = 'https://www.youtube.com/embed/R6NUFRNEai4'

storiesOf('UI Components|WelcomeHero', module)
  .add('basic usage', () => (
    <WelcomeHero
      heading='Welcome!'
      videoUrl={validVideoUrl}
      onDismiss={action('Handle dismiss')}
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
    >
      {faker.lorem.paragraphs(5)}
    </WelcomeHero>
  ))
  .add('short content', () => (
    <WelcomeHero
      heading='Yo!'
      videoUrl={validVideoUrl}
      onDismiss={action('Handle dismiss')}
    >
      Hey...
    </WelcomeHero>
  ))
  .add('invalid video URL', () => (
    <WelcomeHero
      heading={faker.lorem.words(2)}
      videoUrl='http://this.is.not.a.valid.video.url'
      onDismiss={action('Handle dismiss')}
    >
      {faker.lorem.sentences()}
    </WelcomeHero>
  ))
  .add('invalid video ID', () => (
    <WelcomeHero
      heading={faker.lorem.words(2)}
      videoUrl='https://www.youtube.com/embed/INVALIDVIDID'
      onDismiss={action('Handle dismiss')}
    >
      {faker.lorem.sentences()}
    </WelcomeHero>
  ))
  .add('missing heading', () => (
    <WelcomeHero
      videoUrl={validVideoUrl}
      onDismiss={action('Handle dismiss')}
    >
      {faker.lorem.sentences()}
    </WelcomeHero>
  ))
  .add('missing content', () => (
    <WelcomeHero
      heading={faker.lorem.words(2)}
      videoUrl='https://www.youtube.com/embed/INVALIDVIDID'
      onDismiss={action('Handle dismiss')}
    />
  ))
  .add('missing onDismiss', () => (
    <WelcomeHero
      heading={faker.lorem.words(2)}
      videoUrl={validVideoUrl}
    >
      {faker.lorem.sentences()}
    </WelcomeHero>
  ))
  .add('missing props', () => (
    <WelcomeHero />
  ))
