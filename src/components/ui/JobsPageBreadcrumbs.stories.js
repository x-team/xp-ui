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

storiesOf('UI Components|Jobs/Breadcrumbs', module)
  .add('default', () => (
    <JobsPageBreadcrumbs
      link={JobsPageBreadcrumbsLink}
    />
  ))

storiesOf('UI Components|Jobs/Breadcrumbs/Debug', module)
  .add('custom label', () => (
    <JobsPageBreadcrumbs
      label='Back to previous page'
      link={JobsPageBreadcrumbsLink}
    />
  ))
  .add('missing props (does component explode?)', () => (
    <JobsPageBreadcrumbs />
  ))
