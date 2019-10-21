// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import JobsPageLayout from './JobsPageLayout'
import ApplicantScreen from './ApplicantScreen'
import JobsGrid from './JobsGrid'
import { jobCards } from './JobsGrid.stories'
import JobsPageBreadcrumbs from './JobsPageBreadcrumbs'
import { JobsPageBreadcrumbsLink } from './JobsPageBreadcrumbs.stories'

const Body = ({ children }) => (
  <div style={{ height: '100vh' }}>
    <style dangerouslySetInnerHTML={{ __html: `
      html, body { margin: 0; height: 100%; }
    ` }} />
    {children}
  </div>
)

const SampleHero = () => (
  <div style={{ border: '2px dashed purple' }}>Sample Hero component</div>
)

const SampleHeading = () => (
  <div style={{ border: '2px dashed orange' }}>Sample Heading component</div>
)

const SampleContent = () => (
  <div style={{ border: '2px dashed blue' }}>Sample Content component</div>
)

const SampleSidebar = () => (
  <div style={{ border: '2px dashed green' }}>Sample Sidebar component</div>
)

storiesOf('Screens and Layouts|JobsPageLayout', module)
  .add('basic usage (full composition)', () => (
    <Body>
      <ApplicantScreen contentWrapper={false}>
        <JobsPageLayout
          hero={<SampleHero />}
          heading='Jobs'
          content={<JobsGrid jobCards={jobCards} />}
          sidebar={<SampleSidebar />}
        />
      </ApplicantScreen>
    </Body>
  ))

storiesOf('Screens and Layouts|JobsPageLayout/Debug', module)
  .add('breadcrumbs heading', () => (
    <Body>
      <ApplicantScreen contentWrapper={false}>
        <JobsPageLayout
          hero={<SampleHero />}
          heading={
            <JobsPageBreadcrumbs
              label='Browse all jobs'
              link={JobsPageBreadcrumbsLink}
            />
          }
          content={<JobsGrid jobCards={jobCards} />}
          sidebar={<SampleSidebar />}
        />
      </ApplicantScreen>
    </Body>
  ))
  .add('loading content', () => (
    <Body>
      <ApplicantScreen contentWrapper={false}>
        <JobsPageLayout
          hero={<SampleHero />}
          heading='Jobs'
          isLoading
          sidebar={<SampleSidebar />}
        />
      </ApplicantScreen>
    </Body>
  ))
  .add('error content', () => (
    <Body>
      <ApplicantScreen contentWrapper={false}>
        <JobsPageLayout
          hero={<SampleHero />}
          heading='Jobs'
          error='An error has occurred.'
          sidebar={<SampleSidebar />}
        />
      </ApplicantScreen>
    </Body>
  ))
  .add('using debug components', () => (
    <Body>
      <JobsPageLayout
        hero={<SampleHero />}
        heading={<SampleHeading />}
        content={<SampleContent />}
        sidebar={<SampleSidebar />}
      />
    </Body>
  ))
  .add('using debug components (without hero)', () => (
    <Body>
      <JobsPageLayout
        heading={<SampleHeading />}
        content={<SampleContent />}
        sidebar={<SampleSidebar />}
      />
    </Body>
  ))
  .add('using debug components (without heading)', () => (
    <Body>
      <JobsPageLayout
        hero={<SampleHero />}
        content={<SampleContent />}
        sidebar={<SampleSidebar />}
      />
    </Body>
  ))
  .add('using debug components (without content)', () => (
    <Body>
      <JobsPageLayout
        hero={<SampleHero />}
        heading={<SampleHeading />}
        sidebar={<SampleSidebar />}
      />
    </Body>
  ))
  .add('using debug components (without sidebar)', () => (
    <Body>
      <JobsPageLayout
        hero={<SampleHero />}
        heading={<SampleHeading />}
        content={<SampleContent />}
      />
    </Body>
  ))
  .add('missing props (does component explode?)', () => (
    <JobsPageLayout />
  ))
