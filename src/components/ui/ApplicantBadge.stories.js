import React from 'react'
import faker from 'faker'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ApplicantBadge from './ApplicantBadge'
import SvgIcon from './SvgIcon'

export const StoryApplicantBadge = (props) => {
  const id = props.id || faker.random.number()
  const name = props.name || `${faker.name.firstName()} ${faker.name.lastName()}`
  const email = props.email || faker.internet.email()

  const info = props.info || [
    {
      label: 'Avail. date:',
      value: 'DD/MM/YYYY',
      tip: 'Avail. date tooltip copy'
    },
    {
      label: 'Timezone:',
      value: 'UTC+00'
    },
    {
      label: 'Rate:',
      value: '$100'
    },
    ...Array(faker.random.number(5)).fill('').map(() => ({
      label: faker.random.word(),
      value: faker.random.number()
    }))
  ]

  const tags = props.tags || Array(faker.random.number(15)).fill('').map(() => faker.random.word())

  const actions = props.actions || [
    {
      key: 'approval',
      icon: () => <SvgIcon icon='check' />,
      onClick: action(`Applicant ID:${id} approved`)
    },
    {
      key: 'exclusion',
      icon: () => <SvgIcon icon='x' />,
      onClick: action(`Applicant ID:${id} excluded`)
    }
  ]

  return (
    <ApplicantBadge
      id={id}
      active={props.active || null}
      mode={props.mode || null}
      name={name}
      email={email}
      status={props.status || null}
      info={info}
      tags={tags}
      onClick={props.onClick || action(`Applicant ID:${id} selected`)}
      actions={actions}
      applicantStatus={props.applicantStatus || null}
    />
  )
}

const Sandbox = ({ children }) => (
  <div style={{ margin: '60px 20px' }}>
    {children}
  </div>
)

storiesOf('UI Components/ApplicantBadge', module)
  .add('basic usage', () => (
    <Sandbox>
      <StoryApplicantBadge />
    </Sandbox>
  ))
  .add('active card', () => (
    <Sandbox>
      <StoryApplicantBadge active />
    </Sandbox>
  ))
  .add('width status', () => (
    <Sandbox>
      <StoryApplicantBadge status='accepted' />
    </Sandbox>
  ))
  .add('with applicant status', () => (
    <Sandbox>
      <StoryApplicantBadge applicantStatus='Booked' />
    </Sandbox>
  ))

storiesOf('UI Components/ApplicantBadge/Debug', module)
  .add('missing props (does component explode?)', () => (
    <ApplicantBadge />
  ))
