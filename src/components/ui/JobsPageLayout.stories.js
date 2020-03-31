// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import JobsPageLayout from './JobsPageLayout'
import ApplicantScreen from './ApplicantScreen'
import { HeaderLink, headerBarLinks } from './HeaderBar.stories'
import JobsGrid from './JobsGrid'
import { jobCards } from './JobsGrid.stories'
import JobsPageBreadcrumbs from './JobsPageBreadcrumbs'
import { AppLink } from './JobsPageBreadcrumbs.stories'
import JobApplicationCard from './JobApplicationCard'
import JobDetails from './JobDetails'
import { jobDetailsName, jobDetailsSkills, jobDetailsDescription } from './JobDetails.stories'
import PreviousJobApplications from './PreviousJobApplications'
import { previousJobApplicationsJobsSample, previousJobApplicationsMessageSample } from './PreviousJobApplications.stories'
import ProTipCard from './ProTipCard'
import WelcomeHero from './WelcomeHero'
import { validVideoUrl } from './WelcomeHero.stories'

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

const SampleActionsBar = () => (
  <div style={{ border: '2px dashed red' }}>Sample ActionsBar component</div>
)

const JobsPageProTipCard = () => (
  <ProTipCard heading='How to Stand Out'>
    <span>
      To be selected for an interview among thousands of applicants,{' '}
      <a
        href='https://www.linkedin.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        ensure your LinkedIn profile is up-to-date
      </a>
      . It should clearly show your years of experience working on large scale
      projects relevant to the job you’re applying for. Remember to showcase the
      impact of your role on each team!
    </span>
  </ProTipCard>
)

storiesOf('Screens and Layouts|JobsPageLayout', module)
  .add('basic usage', () => (
    <Body>
      <ApplicantScreen noWrapper menuLinks={headerBarLinks} appLink={HeaderLink}>
        <JobsPageLayout
          hero={
            <WelcomeHero
              heading='Welcome!'
              videoUrl={validVideoUrl}
              onDismiss={action('Handle dismiss')}
            >
              Watch X-Team's CEO explain how X-Team makes working from anywhere the most energizing and rewarding experience imaginable.
            </WelcomeHero>
          }
          heading='Jobs'
          content={<JobsGrid jobCards={jobCards(5)} />}
          sidebar={<JobsPageProTipCard />}
        />
      </ApplicantScreen>
    </Body>
  ))

storiesOf('Screens and Layouts|JobsPageLayout/Use Cases', module)
  .add('job details page', () => (
    <Body>
      <ApplicantScreen noWrapper menuLinks={headerBarLinks} appLink={HeaderLink}>
        <JobsPageLayout
          heading={
            <JobsPageBreadcrumbs
              label='Browse all jobs'
              link={AppLink}
            />
          }
          content={
            <JobDetails
              name={jobDetailsName}
              skills={jobDetailsSkills}
              description={jobDetailsDescription}
            />
          }
          sidebar={
            <JobsPageProTipCard />
          }
          actionsBar={
            <JobApplicationCard />
          }
        />
      </ApplicantScreen>
    </Body>
  ))
  .add('my applications page', () => (
    <Body>
      <ApplicantScreen noWrapper menuLinks={headerBarLinks} appLink={HeaderLink}>
        <JobsPageLayout
          heading='Pending applications'
          content={
            <div>
              <JobsGrid jobCards={jobCards(3)} />
              <PreviousJobApplications
                applications={previousJobApplicationsJobsSample}
                message={previousJobApplicationsMessageSample}
              />
            </div>
          }
          sidebar={<JobsPageProTipCard />}
        />
      </ApplicantScreen>
    </Body>
  ))

storiesOf('Screens and Layouts|JobsPageLayout/Debug', module)
  .add('job details page (applied)', () => (
    <Body>
      <ApplicantScreen
        noWrapper
        menuLinks={headerBarLinks}
        appLink={HeaderLink}
        notification={
          <span>You've successfully applied for this position. <b>We will reach out soon via email to talk about next steps.</b></span>
        }
      >
        <JobsPageLayout
          heading={
            <JobsPageBreadcrumbs
              label='Browse all jobs'
              link={AppLink}
            />
          }
          content={
            <JobDetails
              name={jobDetailsName}
              skills={jobDetailsSkills}
              description={jobDetailsDescription}
            />
          }
          sidebar={
            <JobsPageProTipCard />
          }
          actionsBar={
            <JobApplicationCard
              isApplied
              message={<span>You applied for this position on March 27th. <b>We will reach out soon via email to talk about next steps.</b></span>}
              onWithdraw={action('Withdrawing from job...')}
            />
          }
        />
      </ApplicantScreen>
    </Body>
  ))
  .add('short content to see footer at the applicant screen\'s bottom', () => (
    <Body>
      <ApplicantScreen noWrapper menuLinks={headerBarLinks} appLink={HeaderLink}>
        <JobsPageLayout
          heading={
            <JobsPageBreadcrumbs
              label='Browse all jobs'
              link={AppLink}
            />
          }
          content={
            <JobDetails
              name={jobDetailsName}
            />
          }
        />
      </ApplicantScreen>
    </Body>
  ))
  .add('loading content', () => (
    <Body>
      <JobsPageLayout
        hero={<SampleHero />}
        heading='Jobs'
        isLoading
        sidebar={<SampleSidebar />}
        actionsBar={<SampleActionsBar />}
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
        actionsBar={<SampleActionsBar />}
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
        actionsBar={<SampleActionsBar />}
      />
    </Body>
  ))
  .add('using debug components (without hero)', () => (
    <Body>
      <JobsPageLayout
        heading={<SampleHeading />}
        content={<SampleContent />}
        sidebar={<SampleSidebar />}
        actionsBar={<SampleActionsBar />}
      />
    </Body>
  ))
  .add('using debug components (without heading)', () => (
    <Body>
      <JobsPageLayout
        hero={<SampleHero />}
        content={<SampleContent />}
        sidebar={<SampleSidebar />}
        actionsBar={<SampleActionsBar />}
      />
    </Body>
  ))
  .add('using debug components (without content)', () => (
    <Body>
      <JobsPageLayout
        hero={<SampleHero />}
        heading={<SampleHeading />}
        sidebar={<SampleSidebar />}
        actionsBar={<SampleActionsBar />}
      />
    </Body>
  ))
  .add('using debug components (without sidebar)', () => (
    <Body>
      <JobsPageLayout
        hero={<SampleHero />}
        heading={<SampleHeading />}
        content={<SampleContent />}
        actionsBar={<SampleActionsBar />}
      />
    </Body>
  ))
  .add('using debug components (without sticky)', () => (
    <Body>
      <JobsPageLayout
        hero={<SampleHero />}
        heading={<SampleHeading />}
        content={<SampleContent />}
        sidebar={<SampleSidebar />}
      />
    </Body>
  ))
  .add('missing props', () => (
    <JobsPageLayout />
  ))
