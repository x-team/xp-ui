Basic usage:

```js
<ApplicantBadge
  firstName={'Applicant'}
  lastName={'X-Team'}
  email={'applicant@x-team.com'}
/>
```

Active applicant:

```js
<ApplicantBadge
  firstName={'Active'}
  lastName={'Applicant'}
  email={'applicant@x-team.com'}
  active
/>
```

With children:

```js
<ApplicantBadge
  firstName={'Applicant'}
  lastName={'X-Team'}
  email={'applicant@x-team.com'}
>
  <button>Hire</button>
</ApplicantBadge>
```

No first name provided:

```js
<ApplicantBadge
  lastName={'Lastname'}
  email={'applicant@x-team.com'}
/>
```

No last name provided:

```js
<ApplicantBadge
  firstName={'Firstname'}
  email={'applicant@x-team.com'}
/>
```

No first name / last name provided:

```js
<ApplicantBadge email={'sionlyngle-email@x-team.com'} />
```

With a custom avatar:

```js
<ApplicantBadge
  firstName={'Applicant'}
  lastName={'X-Team'}
  email={'applicant@x-team.com'}
  avatar=<div style={{width: 64, height: 64, borderRadius: '50%', background: 'orange' }} />
/>
```
