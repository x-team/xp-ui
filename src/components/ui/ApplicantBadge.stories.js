import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ApplicantBadge from './ApplicantBadge'
import SvgIcon from './SvgIcon'

storiesOf('UI Components/ApplicantBadge', module)
  .add('basic usage', () => (
    <ApplicantBadge
      mode='card'
      id={123123}
      name='Applicant full name'
      email='applicant@email.com'
      status='accepted'
      info={[
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
        }
      ]}
      tags={[
        'JavaScript',
        'ES2015',
        'Node',
        'Express',
        'React',
        'Redux',
        'Webpack'
      ]}
      onClick={action('Applicant selected')}
      actions={[
        {
          key: 'approval',
          icon: () => <SvgIcon icon='check' />,
          render: () => <form>A custom list of inputs with a submit button and a checkmark icon</form>
        },
        {
          key: 'exclusion',
          icon: () => <SvgIcon icon='x' />,
          render: () => <form>Another custom list of inputs with a submit button and an X icon</form>
        }
      ]}
    />
  ))
  .add('active card', () => (
    <ApplicantBadge
      status='accepted'
      active
      mode='card'
      id={123123}
      name='Applicant full name'
      email='applicant@email.com'
      info={[
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
        {
          label: 'Anything:',
          value: 'nonono'
        },
        {
          label: 'Else:',
          value: 'nonono'
        }
      ]}
      ranking={5}
      tags={[
        'JavaScript',
        'Express',
        'React',
        'Redux',
        'Webpack'
      ]}
      onClick={action('Applicant selected')}
      actions={[
        {
          key: 'approval',
          icon: () => <SvgIcon icon='check' />,
          render: () => <form>A custom list of inputs with a submit button and a checkmark icon</form>
        },
        {
          key: 'exclusion',
          icon: () => <SvgIcon icon='x' />,
          render: () => <form>Another custom list of inputs with a submit button and an X icon</form>
        }
      ]}
    />
  ))
  .add('no status', () => (
    <ApplicantBadge
      mode='card'
      id={123123}
      name='Applicant full name'
      email='applicant@email.com'
      info={[
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
        }
      ]}
      ranking={5}
      tags={[
        'JavaScript',
        'ES2015',
        'Node',
        'Express',
        'React',
        'Redux',
        'Webpack'
      ]}
      onClick={action('Applicant selected')}
      actions={[
        {
          key: 'approval',
          icon: () => <SvgIcon icon='check' />,
          render: () => <form>A custom list of inputs with a submit button and a checkmark icon</form>
        },
        {
          key: 'exclusion',
          icon: () => <SvgIcon icon='x' />,
          render: () => <form>Another custom list of inputs with a submit button and an X icon</form>
        }
      ]}
    />
  ))
  .add('basic tabular', () => (
    <ApplicantBadge
      status='excluded'
      mode='tabular'
      id={123123}
      ranking={5}
      name='Applicant full name'
      email='applicant@email.com'
      info={[
        {
          label: 'Avail. date:',
          value: 'DD/MM/YYYY',
          tip: 'Avail. date tooltip copy'
        },
        {
          label: 'Avail. updated:',
          value: 'DD/MM/YYYY',
          tip: 'Avail. updated tooltip copy'
        },
        {
          label: 'Timezone:',
          value: 'UTC+00'
        },
        {
          label: 'Rate:',
          value: '$100'
        },
        {
          label: 'Status',
          value: 'In Pipeline'
        },
        {
          label: 'Rank',
          value: 2
        }
      ]}
      tags={[
        'JavaScript',
        'ES2015',
        'Node',
        'Express',
        'React',
        'Redux',
        'Webpack',
        'JavaScript',
        'ES2015',
        'Node',
        'Express',
        'React',
        'Redux',
        'Webpack',
        'JavaScript',
        'ES2015',
        'Node',
        'Express',
        'React',
        'Redux',
        'Webpack'
      ]}
      onClick={action('Applicant selected')}
      actions={[
        {
          key: 'approval',
          icon: () => <SvgIcon icon='check' />,
          render: () => <form>A custom list of inputs with a submit button and a checkmark icon</form>
        },
        {
          key: 'exclusion',
          icon: () => <SvgIcon icon='x' />,
          render: () => <form>Another custom list of inputs with a submit button and an X icon</form>
        }
      ]}
    />
  ))
  .add('basic tabular (ranking dropdown is disabled)', () => (
    <ApplicantBadge
      status='excluded'
      mode='tabular'
      id={123123}
      disableRankingDropdown
      ranking={5}
      name='Applicant full name'
      email='applicant@email.com'
      info={[
        {
          label: 'Avail. date:',
          value: 'DD/MM/YYYY',
          tip: 'Avail. date tooltip copy'
        },
        {
          label: 'Avail. updated:',
          value: 'DD/MM/YYYY',
          tip: 'Avail. updated tooltip copy'
        },
        {
          label: 'Timezone:',
          value: 'UTC+00'
        },
        {
          label: 'Rate:',
          value: '$100'
        },
        {
          label: 'Status',
          value: 'In Pipeline'
        },
        {
          label: 'Rank',
          value: 2
        }
      ]}
      tags={[
        'JavaScript',
        'ES2015',
        'Node',
        'Express',
        'React',
        'Redux',
        'Webpack',
        'JavaScript',
        'ES2015',
        'Node',
        'Express',
        'React',
        'Redux',
        'Webpack',
        'JavaScript',
        'ES2015',
        'Node',
        'Express',
        'React',
        'Redux',
        'Webpack'
      ]}
      onClick={action('Applicant selected')}
      actions={[
        {
          key: 'approval',
          icon: () => <SvgIcon icon='check' />,
          render: () => <form>A custom list of inputs with a submit button and a checkmark icon</form>
        },
        {
          key: 'exclusion',
          icon: () => <SvgIcon icon='x' />,
          render: () => <form>Another custom list of inputs with a submit button and an X icon</form>
        }
      ]}
    />
  ))
  .add('basic tabular with a status', () => (
    <ApplicantBadge
      status='excluded'
      applicantStatus='Booked (Available Soon)'
      mode='tabular'
      id={123123}
      name='Applicant full name'
      email='applicant@email.com'
      info={[
        {
          label: 'Avail. date:',
          value: 'DD/MM/YYYY',
          tip: 'Avail. date tooltip copy'
        },
        {
          label: 'Avail. updated:',
          value: 'DD/MM/YYYY',
          tip: 'Avail. updated tooltip copy'
        },
        {
          label: 'Timezone:',
          value: 'UTC+00'
        },
        {
          label: 'Rate:',
          value: '$100'
        },
        {
          label: 'Status',
          value: 'In Pipeline'
        },
        {
          label: 'Rank',
          value: 2
        }
      ]}
      ranking={5}
      tags={[
        'JavaScript',
        'ES2015',
        'Node',
        'Express',
        'React',
        'Redux',
        'Webpack',
        'JavaScript',
        'ES2015',
        'Node',
        'Express',
        'React',
        'Redux',
        'Webpack',
        'JavaScript',
        'ES2015',
        'Node',
        'Express',
        'React',
        'Redux',
        'Webpack'
      ]}
      onClick={action('Applicant selected')}
      actions={[
        {
          key: 'approval',
          icon: () => <SvgIcon icon='check' />,
          render: () => <form>A custom list of inputs with a submit button and a checkmark icon</form>
        },
        {
          key: 'exclusion',
          icon: () => <SvgIcon icon='x' />,
          render: () => <form>Another custom list of inputs with a submit button and an X icon</form>
        }
      ]}
    />
  ))
  .add('with children', () => (
    <ApplicantBadge
      id={123123}
      email='applicant@x-team.com'
      status='accepted'
    >
      <button>Hello</button>
      <button>World</button>
    </ApplicantBadge>
  ))
  .add('with a custom avatar', () => (
    <ApplicantBadge
      id={123123}
      status='accepted'
      name='Applicant'
      email='applicant@x-team.com'
      avatar={<div style={{ width: 90, height: 90, borderRadius: '50%', background: 'orange' }} />}
    />
  ))
  .add('with applicant status', () => (
    <ApplicantBadge
      mode='card'
      id={123123}
      name='Applicant full name'
      email='applicant@email.com'
      applicantStatus='Booked'
      info={[
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
        }
      ]}
      ranking={5}
      tags={[
        'JavaScript',
        'ES2015',
        'Node',
        'Express',
        'React',
        'Redux',
        'Webpack'
      ]}
      onClick={action('Applicant selected')}
      actions={[
        {
          key: 'approval',
          icon: () => <SvgIcon icon='check' />,
          render: () => <form>A custom list of inputs with a submit button and a checkmark icon</form>
        },
        {
          key: 'exclusion',
          icon: () => <SvgIcon icon='x' />,
          render: () => <form>Another custom list of inputs with a submit button and an X icon</form>
        }
      ]}
    />
  ))
  .add('missing props (does component explode?)', () => (
    <ApplicantBadge />
  ))
