SolutionForm with disabled button:

```js
<SolutionForm disableButton />
```

Max of 5 attempts allowed:

```js
<SolutionForm maxAttempts={5} />
```

2 attempts are taken:

```js
<SolutionForm
  hasAttempted
  takenAttempts={2}
/>
```

Submitting is in progress:

```js
<SolutionForm isSubmitting />
```

Custom submit callback is passed:

```js
<SolutionForm onSubmit={() => alert('Submitted!')} />
```
