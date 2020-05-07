// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import WorkExperiencePresenter from './WorkExperienceEntryPresenter'

const basicExperience = {
  role: 'Senior Developer',
  company: 'X-Team',
  start_date: new Date('1999-05-16'),
  end_date: new Date('2019-04-13'),
  highlights: `Worked at the company before it was founded. Did so using *italics*, **bold**, and other markdown tricks.

* Launched new products
* Unlaunched old products
* [Synergized essential portfolio items](https://www.youtube.com/watch?v=dQw4w9WgXcQ)`,
  skills: ['Node', 'React', 'C++', 'Pascal', 'COBOL']
}

const noEndDate = {
  role: 'Senior Developer',
  company: 'X-Team',
  start_date: new Date('1999-05-16'),
  end_date: null,
  highlights: `Still here. Will be here for all eternity.`,
  skills: ['Node', 'React', 'C++', 'Pascal', 'COBOL']
}

const noSkills = {
  role: 'Senior Developer',
  company: 'X-Team',
  start_date: new Date('1999-05-16'),
  end_date: new Date('2019-04-13'),
  highlights: `Used no skills. Increased revenue by pure force of will.`
}

const noRole = {
  company: 'X-Team',
  start_date: new Date('1999-05-16'),
  end_date: new Date('2019-04-13'),
  highlights: `Role is missing in experience prop; default is shown above.`,
  skills: ['Node', 'React', 'C++', 'Pascal', 'COBOL']
}

const noCompany = {
  role: 'Senior Developer',
  start_date: new Date('1999-05-16'),
  end_date: new Date('2019-04-13'),
  highlights: `Company is missing in experience prop; default is shown above.`,
  skills: ['Node', 'React', 'C++', 'Pascal', 'COBOL']
}

const noStartDate = {
  role: 'Senior Developer',
  company: 'X-Team',
  end_date: new Date('2019-04-13'),
  highlights: `Start date is missing in experience prop.`,
  skills: ['Node', 'React', 'C++', 'Pascal', 'COBOL']
}

const noHighlights = {
  role: 'Senior Developer',
  company: 'X-Team',
  start_date: new Date('1999-05-16'),
  end_date: new Date('2019-04-13'),
  skills: ['Node', 'React', 'C++', 'Pascal', 'COBOL']
}

storiesOf('UI Components|WorkExperience/Presenter', module)
  .add('basic usage', () => <WorkExperiencePresenter experience={basicExperience} />)
  .add('basic usage, current job', () => <WorkExperiencePresenter experience={noEndDate} />)

storiesOf('UI Components|WorkExperience/Presenter/Debug', module)
  // $FlowFixMe
  .add('missing skills', () => <WorkExperiencePresenter experience={noSkills} />)
  // $FlowFixMe
  .add('missing experience', () => <WorkExperiencePresenter />)
  // $FlowFixMe
  .add('missing role', () => <WorkExperiencePresenter experience={noRole} />)
  // $FlowFixMe
  .add('missing company', () => <WorkExperiencePresenter experience={noCompany} />)
  // $FlowFixMe
  .add('missing start date', () => <WorkExperiencePresenter experience={noStartDate} />)
  // $FlowFixMe
  .add('missing highlights', () => <WorkExperiencePresenter experience={noHighlights} />)
