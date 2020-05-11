import React from 'react'
import { storiesOf } from '@storybook/react'

import WorkExperience from '.'

const skills = [
  { value: 'GOBOL', label: 'GOBOL' },
  { value: 'D++', label: 'D++' },
  { value: 'Nobe', label: 'Nobe' },
  { value: 'Reaqt', label: 'Reaqt' }
]

const experiences = [
  {
    id: 0,
    role: 'Junior Developer',
    company: 'X-Team',
    startDate: new Date('1999-05-16'),
    endDate: new Date('2010-04-13'),
    highlights: `Worked at the company before it was founded. Did so using *italics*, **bold**, and other markdown tricks.

  * Launched new products
  * Unlaunched old products
  * [Synergized essential portfolio items](https://www.youtube.com/watch?v=dQw4w9WgXcQ)`,
    skills: ['Node', 'React', 'C++', 'Pascal', 'COBOL']
  },
  {
    id: 1,
    role: 'Senior Developer',
    company: 'X-Team',
    startDate: new Date('2010-04-13'),
    highlights: `Still here. Will be here for all eternity.`,
    skills: ['Node', 'React', 'C++', 'Pascal', 'COBOL']
  }
]

function updateExperiences ({ experience, isNew }) {
  console.log('onSave', experience)
  if (isNew) {
    experience.id = experiences.length
    experiences.push(experience)
  } else {
    const index = experiences.findIndex(toUpdate => toUpdate.id === experience.id)
    experiences[index] = experience
  }
  return Promise.resolve()
}

storiesOf('UI Components|WorkExperience', module)
  .add('inline editing', () => <WorkExperience experiences={experiences} skills={skills} onSave={updateExperiences} />)
  .add('no experiences', () => <WorkExperience experiences={[]} skills={skills} onSave={updateExperiences} />)
