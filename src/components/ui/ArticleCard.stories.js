// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import ArticleCard from './ArticleCard'

storiesOf('UI Components|ArticleCard', module)
  .add('basic usage', () => (
    <ArticleCard
      poster='https://picsum.photos/341/191'
      category='X-OUTPOST'
      title='X-OUTPOST: AUSTRIA (SKIING)'
      excerpt='This December, X-Teamers spent eight days skiing in Austria, in perfect weather conditions. Read on to find out why Solden is a great skiing destination.'
      url='https://x-team.com/blog'
    />
  ))

storiesOf('UI Components|ArticleCard/Debug', module)
  .add('missing poster', () => (
    <ArticleCard
      category='X-OUTPOST'
      title='X-OUTPOST: AUSTRIA (SKIING)'
      excerpt='This December, X-Teamers spent eight days skiing in Austria, in perfect weather conditions. Read on to find out why Solden is a great skiing destination.'
      url='https://x-team.com/blog'
    />
  ))
  .add('missing category', () => (
    <ArticleCard
      poster='https://picsum.photos/341/191'
      title='X-OUTPOST: AUSTRIA (SKIING)'
      excerpt='This December, X-Teamers spent eight days skiing in Austria, in perfect weather conditions. Read on to find out why Solden is a great skiing destination.'
      url='https://x-team.com/blog'
    />
  ))
  .add('missing title', () => (
    <ArticleCard
      poster='https://picsum.photos/341/191'
      category='X-OUTPOST'
      excerpt='This December, X-Teamers spent eight days skiing in Austria, in perfect weather conditions. Read on to find out why Solden is a great skiing destination.'
      url='https://x-team.com/blog'
    />
  ))
  .add('missing excerpt', () => (
    <ArticleCard
      poster='https://picsum.photos/341/191'
      category='X-OUTPOST'
      title='X-OUTPOST: AUSTRIA (SKIING)'
      url='https://x-team.com/blog'
    />
  ))
  .add('missing url', () => (
    <ArticleCard
      poster='https://picsum.photos/341/191'
      category='X-OUTPOST'
      title='X-OUTPOST: AUSTRIA (SKIING)'
      excerpt='This December, X-Teamers spent eight days skiing in Austria, in perfect weather conditions. Read on to find out why Solden is a great skiing destination.'
    />
  ))
  .add('missing props', () => (
    <ArticleCard />
  ))
