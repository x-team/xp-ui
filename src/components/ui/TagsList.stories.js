// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import faker from 'faker'

import TagsList from './TagsList'

const tagsList = faker.random.words(faker.random.number(10)).split(' ').join(',')

storiesOf('Core Components|TagsList', module)
  .add('basic usage', () => (
    <TagsList
      skills={text('Skills', tagsList)}
    />
  ))
