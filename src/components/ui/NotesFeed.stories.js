import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import NotesFeed from './NotesFeed'

const files = [
  {
    id: 357,
    filename: 'Sample file-1',
    path: 'https://s3.amazonaws.com/auto-exam-videos/148c4cb11547066f20d313197c88b7cd.pdf'
  },
  {
    id: 358,
    filename: 'Sample file-2',
    path: 'https://s3.amazonaws.com/auto-exam-videos/148c4cb11547066f20d313197c88b7cd.pdf'
  }
]

const sample = [
  {
    id: 357,
    target_id: null,
    body: 'Note of type general B',
    applicant_id: 1765,
    author_email: 'test@x-team.com',
    author_name: 'Sagacious Rainbows',
    author_avatar: 'https://placeimg.com/140/140/people',
    created_at: '2018-05-23T17:30:16.000Z',
    updated_at: '2018-05-23T17:30:16.000Z',
    files
  },
  {
    id: 356,
    target_id: null,
    body: 'Note of type general A',
    applicant_id: 1765,
    author_email: 'test@x-team.com',
    author_name: 'Sagacious Rainbows',
    author_avatar: 'https://placeimg.com/140/140/people',
    created_at: '2018-05-23T17:29:50.000Z',
    updated_at: '2018-05-23T17:29:50.000Z'
  },
  {
    id: 204,
    target_id: null,
    body: 'Note of type general C',
    applicant_id: 1765,
    author_email: 'test@x-team.com',
    author_name: 'Sagacious Rainbows',
    author_avatar: 'https://placeimg.com/140/140/people',
    created_at: '2018-05-23T15:18:03.000Z',
    updated_at: '2018-05-23T15:18:03.000Z'
  },
  {
    id: 358,
    target_id: null,
    body: 'Note of type general B',
    applicant_id: 1765,
    author_email: 'test@x-team.com',
    author_name: 'Sagacious Rainbows',
    author_avatar: 'https://placeimg.com/140/140/people',
    created_at: '2018-05-23T17:30:16.000Z',
    updated_at: '2018-05-23T17:30:16.000Z'
  },
  {
    id: 359,
    target_id: null,
    body: 'Note of type general A',
    applicant_id: 1765,
    author_email: 'test@x-team.com',
    author_name: 'Sagacious Rainbows',
    author_avatar: 'https://placeimg.com/140/140/people',
    created_at: '2018-05-23T17:29:50.000Z',
    updated_at: '2018-05-23T17:29:50.000Z'
  },
  {
    id: 360,
    target_id: null,
    body: 'Note of type general C',
    applicant_id: 1765,
    author_email: 'test@x-team.com',
    author_name: 'Sagacious Rainbows',
    author_avatar: 'https://placeimg.com/140/140/people',
    created_at: '2018-05-23T15:18:03.000Z',
    updated_at: '2018-05-23T15:18:03.000Z'
  },
  {
    id: 361,
    target_id: null,
    body: 'Note of type general C',
    applicant_id: 1765,
    author_email: 'test@x-team.com',
    author_name: 'Sagacious Rainbows',
    author_avatar: 'https://placeimg.com/140/140/people',
    created_at: '2018-05-23T15:18:03.000Z',
    updated_at: '2018-05-23T15:18:03.000Z'
  }
]

const sampleWithTypes = [
  {
    id: 357,
    target_type: 'interview',
    target_id: null,
    body: 'Note of type general B',
    applicant_id: 1765,
    author_email: 'test@x-team.com',
    author_name: 'Sagacious Rainbows',
    author_avatar: 'https://placeimg.com/140/140/people',
    created_at: '2018-05-23T17:30:16.000Z',
    updated_at: '2018-05-23T17:30:16.000Z',
    files
  },
  {
    id: 356,
    target_type: 'general',
    target_id: null,
    body: 'Note of type general A',
    applicant_id: 1765,
    author_email: 'test@x-team.com',
    author_name: 'Sagacious Rainbows',
    author_avatar: 'https://placeimg.com/140/140/people',
    created_at: '2018-05-23T17:29:50.000Z',
    updated_at: '2018-05-23T17:29:50.000Z'
  },
  {
    id: 204,
    target_type: 'interview',
    target_id: null,
    body: 'Note of type general C',
    applicant_id: 1765,
    author_email: 'test@x-team.com',
    author_name: 'Sagacious Rainbows',
    author_avatar: 'https://placeimg.com/140/140/people',
    created_at: '2018-05-23T15:18:03.000Z',
    updated_at: '2018-05-23T15:18:03.000Z'
  },
  {
    id: 358,
    target_type: 'performance',
    target_id: null,
    body: 'Note of type general B',
    applicant_id: 1765,
    author_email: 'test@x-team.com',
    author_name: 'Sagacious Rainbows',
    author_avatar: 'https://placeimg.com/140/140/people',
    created_at: '2018-05-23T17:30:16.000Z',
    updated_at: '2018-05-23T17:30:16.000Z'
  },
  {
    id: 359,
    target_type: 'portfolio',
    target_id: null,
    body: 'Note of type general A',
    applicant_id: 1765,
    author_email: 'test@x-team.com',
    author_name: 'Sagacious Rainbows',
    author_avatar: 'https://placeimg.com/140/140/people',
    created_at: '2018-05-23T17:29:50.000Z',
    updated_at: '2018-05-23T17:29:50.000Z'
  },
  {
    id: 360,
    target_type: 'general',
    target_id: null,
    body: 'Note of type general C',
    applicant_id: 1765,
    author_email: 'test@x-team.com',
    author_name: 'Sagacious Rainbows',
    author_avatar: 'https://placeimg.com/140/140/people',
    created_at: '2018-05-23T15:18:03.000Z',
    updated_at: '2018-05-23T15:18:03.000Z'
  },
  {
    id: 361,
    target_type: 'portfolio',
    target_id: null,
    body: 'Note of type general C',
    applicant_id: 1765,
    author_email: 'test@x-team.com',
    author_name: 'Sagacious Rainbows',
    author_avatar: 'https://placeimg.com/140/140/people',
    created_at: '2018-05-23T15:18:03.000Z',
    updated_at: '2018-05-23T15:18:03.000Z'
  }
]

storiesOf('UI Components/NotesFeed', module)
  .add('basic usage', () => (
    <NotesFeed notes={sample} onNoteUpdate={action('Updated note')} />
  ))
  .add('showing note type in the sub header', () => (
    <NotesFeed notes={sampleWithTypes} showNoteType onNoteUpdate={action('Updated note')} />
  ))
  .add('missing props (does component explode?)', () => <NotesFeed />)
