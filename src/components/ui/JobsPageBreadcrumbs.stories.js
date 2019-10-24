// @flow
/* global React$Node */

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import JobsPageBreadcrumbs from './JobsPageBreadcrumbs'

export const JobsPageBreadcrumbsLink = ({ children, ...props }: { children: React$Node }) => (
  <a onClick={action('This should be react-router/gasby Link')} {...props}>
    {children}
  </a>
)

storiesOf('UI Components|JobsPageBreadcrumbs', module)
  .add('default', () => (
    <JobsPageBreadcrumbs
      link={JobsPageBreadcrumbsLink}
    />
  ))

storiesOf('UI Components|JobsPageBreadcrumbs/Debug', module)
  .add('custom label', () => (
    <JobsPageBreadcrumbs
      label='Back to previous page'
      link={JobsPageBreadcrumbsLink}
    />
  ))
  .add('missing props (does component explode?)', () => (
    <JobsPageBreadcrumbs />
  ))
