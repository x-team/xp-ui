```js
const sample = [
  {
    id: 357,
    target_type: 'general',
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
    id: 357,
    target_type: 'general',
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
    id: 204,
    target_type: 'general',
    target_id: null,
    body: 'Note of type general C',
    applicant_id: 1765,
    author_email: 'test@x-team.com',
    author_name: 'Sagacious Rainbows',
    author_avatar: 'https://placeimg.com/140/140/people',
    created_at: '2018-05-23T15:18:03.000Z',
    updated_at: '2018-05-23T15:18:03.000Z'
  }
];

<NotesFeed notes={sample} />
```

Missing props (does component explode?):

```js
<NotesFeed />
```

