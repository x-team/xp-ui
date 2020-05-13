import React from 'react'
import { storiesOf } from '@storybook/react'
import cmz from 'cmz'

import typo from '../../../styles/typo'

import WorkExperiencePresenter from './WorkExperienceEntryPresenter'

const basicExperience = {
  role: 'Senior Developer',
  company: 'X-Team',
  startDate: new Date('1999-05-16'),
  endDate: new Date('2019-04-13'),
  highlights: `Worked at the company before it was founded. Did so using *italics*, **bold**, and other markdown tricks.

* Launched new products
* Unlaunched old products
* [Synergized essential portfolio items](https://www.youtube.com/watch?v=dQw4w9WgXcQ)`,
  skills: ['Node', 'React', 'C++', 'Pascal', 'COBOL']
}

const noSkills = {
  role: 'Senior Developer',
  company: 'X-Team',
  startDate: new Date('1999-05-16'),
  endDate: new Date('2019-04-13'),
  highlights: `Used no skills. Increased revenue by pure force of will.`
}

const noEndDate = {
  role: 'Senior Developer',
  company: 'X-Team',
  startDate: new Date('1999-05-16'),
  highlights: `Still here. Will be here for all eternity.`,
  skills: ['Node', 'React', 'C++', 'Pascal', 'COBOL']
}

const noRole = {
  company: 'X-Team',
  startDate: new Date('1999-05-16'),
  endDate: new Date('2019-04-13'),
  highlights: `Role is missing in experience prop; default is shown above.`,
  skills: ['Node', 'React', 'C++', 'Pascal', 'COBOL']
}

const noCompany = {
  role: 'Senior Developer',
  startDate: new Date('1999-05-16'),
  endDate: new Date('2019-04-13'),
  highlights: `Company is missing in experience prop; default is shown above.`,
  skills: ['Node', 'React', 'C++', 'Pascal', 'COBOL']
}

const noStartDate = {
  role: 'Senior Developer',
  company: 'X-Team',
  endDate: new Date('2019-04-13'),
  highlights: `Start date is missing in experience prop.`,
  skills: ['Node', 'React', 'C++', 'Pascal', 'COBOL']
}

const noHighlights = {
  role: 'Senior Developer',
  company: 'X-Team',
  startDate: new Date('1999-05-16'),
  endDate: new Date('2019-04-13'),
  skills: ['Node', 'React', 'C++', 'Pascal', 'COBOL']
}

const cx = { wrap: cmz(typo.regularText) }

function withWrapper (component) {
  return <div className={cx.wrap}>
    {component}
  </div>
}

storiesOf('UI Components|WorkExperience/Presenter', module)
  .add('basic usage', () => withWrapper(<WorkExperiencePresenter experience={basicExperience} />))
  .add('current job', () => withWrapper(<WorkExperiencePresenter experience={noEndDate} />))
  .add('no skills provided', () => withWrapper(<WorkExperiencePresenter experience={noSkills} />))

storiesOf('UI Components|WorkExperience/Presenter/Debug', module)
  .add('missing experience', () => withWrapper(<WorkExperiencePresenter />))
  .add('missing role', () => withWrapper(<WorkExperiencePresenter experience={noRole} />))
  .add('missing company', () => withWrapper(<WorkExperiencePresenter experience={noCompany} />))
  .add('missing start date', () => withWrapper(<WorkExperiencePresenter experience={noStartDate} />))
  .add('missing highlights', () => withWrapper(<WorkExperiencePresenter experience={noHighlights} />))
