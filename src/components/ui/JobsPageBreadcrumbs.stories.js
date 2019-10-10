// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import JobsPageBreadcrumbs from './JobsPageBreadcrumbs'

const Link = ({ children }) => (
  <a onClick={action('This should be react-router/gasby Link')}>
    {children}
  </a>
)

storiesOf('UI Components/XP-Registration/JobsPageBreadcrumbs', module)
  .add('default', () => (
    <JobsPageBreadcrumbs
      label='Browse all jobs'
      link={Link}
    />
  ))

storiesOf('UI Components/XP-Registration/JobsPageBreadcrumbs/Debug', module)
  .add('missing props (does component explode?)', () => (
    <JobsPageBreadcrumbs />
  ))
