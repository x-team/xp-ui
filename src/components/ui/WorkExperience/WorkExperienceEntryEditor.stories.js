// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import WorkExperienceEditor from './WorkExperienceEntryEditor'

function logExperience (experience) {
  console.log('onValueChanged', experience)
  return Promise.resolve()
}

const skills = [
  { value: 'COBOL', label: 'COBOL' },
  { value: 'C++', label: 'C++' },
  { value: 'Node', label: 'Node' },
  { value: 'React', label: 'React' },
  { value: 'Pascal', label: 'Pascal' }
]

const basicExperience = {
  role: 'Senior Developer',
  company: 'X-Team',
  startDate: new Date('1999-05-16'),
  endDate: new Date('2019-04-13'),
  highlights: `Worked at the company before it was founded. Did so using *italics*, **bold**, and other markdown tricks.

* Launched new products
* Unlaunched old products
* [Synergized essential portfolio items](https://www.youtube.com/watch?v=dQw4w9WgXcQ)`,
  skills: ['Pascal', 'COBOL']
}

const noEndDate = {
  role: 'Senior Developer',
  company: 'X-Team',
  startDate: new Date('1999-05-16'),
  endDate: null,
  highlights: `Still here. Will be here for all eternity.`,
  skills: ['Node', 'React', 'C++', 'Pascal', 'COBOL']
}

const noSkills = {
  role: 'Senior Developer',
  company: 'X-Team',
  startDate: new Date('1999-05-16'),
  endDate: new Date('2019-04-13'),
  highlights: `Used no skills. Increased revenue by pure force of will.`
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
  .add('basic usage', () => <WorkExperienceEditor experience={basicExperience} skills={skills} onValueChanged={logExperience} />)
  .add('current job', () => <WorkExperienceEditor experience={noEndDate} skills={skills} onValueChanged={logExperience} />)

storiesOf('UI Components|WorkExperience/Editor/Debug', module)
  // $FlowFixMe
  .add('missing skills', () => <WorkExperienceEditor experience={noSkills} skills={skills} onValueChanged={logExperience} />)
  // $FlowFixMe
  .add('missing experience', () => <WorkExperienceEditor />)
  // $FlowFixMe
  .add('missing role', () => <WorkExperienceEditor experience={noRole} skills={skills} onValueChanged={logExperience} />)
  // $FlowFixMe
  .add('missing company', () => <WorkExperienceEditor experience={noCompany} skills={skills} onValueChanged={logExperience} />)
  // $FlowFixMe
  .add('missing start date', () => <WorkExperienceEditor experience={noStartDate} skills={skills} onValueChanged={logExperience} />)
  // $FlowFixMe
  .add('missing highlights', () => <WorkExperienceEditor experience={noHighlights} skills={skills} onValueChanged={logExperience} />)
