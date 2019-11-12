// @flow

import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { storiesOf } from '@storybook/react'

import JobsPageLayout from './JobsPageLayout'
import ApplicantScreen from './ApplicantScreen'
import JobsGrid from './JobsGrid'
import { jobCards } from './JobsGrid.stories'
import JobsPageBreadcrumbs from './JobsPageBreadcrumbs'
import { JobsPageBreadcrumbsLink } from './JobsPageBreadcrumbs.stories'
import JobApplicationCard from './JobApplicationCard'
import JobDetails from './JobDetails'
import { jobDetailsName, jobDetailsSkills, jobDetailsDescription } from './JobDetails.stories'
import ClosedJobApplications from './ClosedJobApplications'
import { closedJobApplicationsJobsSample, closedJobApplicationsMessageSample } from './ClosedJobApplications.stories'

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
  .add('basic usage', () => (
    <Body>
      <ApplicantScreen noWrapper>
        <JobsPageLayout
          hero={<SampleHero />}
          heading='Jobs'
          content={<JobsGrid jobCards={jobCards(5)} />}
          sidebar={<SampleSidebar />}
        />
      </ApplicantScreen>
    </Body>
  ))

storiesOf('Screens and Layouts|JobsPageLayout/Use Cases', module)
  .add('job details page', () => (
    <Body>
      <ApplicantScreen noWrapper>
        <JobsPageLayout
          heading={
            <JobsPageBreadcrumbs
              label='Browse all jobs'
              link={JobsPageBreadcrumbsLink}
            />
          }
          content={
            <JobDetails
              name={jobDetailsName}
              skills={jobDetailsSkills}
              description={jobDetailsDescription}
            />
          }
          sidebar={<JobApplicationCard />}
        />
      </ApplicantScreen>
    </Body>
  ))
  .add('my applications page', () => (
    <Body>
      <ApplicantScreen noWrapper>
        <JobsPageLayout
          heading='Pending applications'
          content={
            <Fragment>
              <JobsGrid jobCards={jobCards(3)} />
              <ClosedJobApplications
                applications={closedJobApplicationsJobsSample}
                message={closedJobApplicationsMessageSample}
              />
            </Fragment>
          }
          sidebar={<SampleSidebar />}
        />
      </ApplicantScreen>
    </Body>
  ))

storiesOf('Screens and Layouts|JobsPageLayout/Debug', module)
  .add('loading content', () => (
    <Body>
      <JobsPageLayout
        hero={<SampleHero />}
        heading='Jobs'
        isLoading
        sidebar={<SampleSidebar />}
      />
    </Body>
  ))
  .add('error content', () => (
    <Body>
      <JobsPageLayout
        hero={<SampleHero />}
        heading='Jobs'
        error='An error has occurred.'
        sidebar={<SampleSidebar />}
      />
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

// This is a remporaty hack for a known issue with Fragment and Storybook's addon-info
// https://github.com/storybookjs/addon-jsx/issues/34#issuecomment-377270299
// $FlowFixMe
React.Fragment = ({ children }) => children
React.Fragment.propTypes = {
  children: PropTypes.node.isRequired
}
React.Fragment.displayName = 'React.Fragment'
