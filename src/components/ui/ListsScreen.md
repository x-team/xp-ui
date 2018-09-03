Complete:

```js
<ListsScreen
  applicant={<ul>{Array(100).fill(<li>Applicant Profile stuff</li>)}</ul>}
  search={(
    <div>
      ApplicantGrid
      <ul>
        {Array(100).fill(<li>ApplicantCard</li>)}
      </ul>
    </div>
  )}
/>
```

Missing props (does component explode?):

```js
<ListsScreen />
```
