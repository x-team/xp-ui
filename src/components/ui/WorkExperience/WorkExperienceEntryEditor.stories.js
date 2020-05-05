import React from 'react'
import { storiesOf } from '@storybook/react'

import WorkExperienceEditor from './WorkExperienceEntryEditor'

function logExperience (experience) {
  console.log('onSave', experience)
}

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

storiesOf('UI Components|WorkExperience/Editor', module)
  .add('basic usage', () => <WorkExperienceEditor experience={basicExperience} onSave={logExperience} />)
  .add('current job', () => <WorkExperienceEditor experience={noEndDate} onSave={logExperience} />)
  .add('no skills provided', () => <WorkExperienceEditor experience={noSkills} onSave={logExperience} />)

storiesOf('UI Components|WorkExperience/Editor/Debug', module)
  .add('missing experience', () => <WorkExperienceEditor />)
  .add('missing role', () => <WorkExperienceEditor experience={noRole} onSave={logExperience} />)
  .add('missing company', () => <WorkExperienceEditor experience={noCompany} onSave={logExperience} />)
  .add('missing start date', () => <WorkExperienceEditor experience={noStartDate} onSave={logExperience} />)
  .add('missing highlights', () => <WorkExperienceEditor experience={noHighlights} onSave={logExperience} />)
