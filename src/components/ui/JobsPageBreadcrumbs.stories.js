// @flow
/* global React$Node */

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import JobsPageBreadcrumbs from './JobsPageBreadcrumbs'

export const JobsPageBreadcrumbsLink = ({ children }: { children: React$Node }) => (
  <a onClick={action('This should be react-router/gasby Link')}>
    {children}
  </a>
)

storiesOf('UI Components/XP-Registration/JobsPageBreadcrumbs', module)
  .add('default', () => (
    <JobsPageBreadcrumbs
      label='Browse all jobs'
      link={JobsPageBreadcrumbsLink}
    />
  ))

storiesOf('UI Components/XP-Registration/JobsPageBreadcrumbs/Debug', module)
  .add('missing props (does component explode?)', () => (
    <JobsPageBreadcrumbs />
  ))
