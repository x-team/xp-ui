No errors:

```js
<ErrorBox errors={{}} />
```

With one error:

```js
<ErrorBox errors={{ name: 'Something went wrong' }} />
```

With two errors:

```js
<ErrorBox errors={{
  name: 'Something went wrong',
  failed: <span>The operation <b>failed</b></span>
}} />
```

With HTML content:

```js
<ErrorBox errors={{ name: <span>Something went <a href="#">wrong</a></span> }} />
```

Missing props (does component explode?):

```js
<ErrorBox />
```
