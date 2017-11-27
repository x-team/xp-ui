Basic usage:

```js
<ApplicantBadge
  firstName={'Applicant'}
  lastName={'X-Team'}
  email={'applicant@x-team.com'}
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
