ErrorBox with no errors

```js
<ErrorBox errors={{}} />
```

ErrorBox with one error

```js
<ErrorBox errors={{ name: 'Something went wrong' }} />
```

ErrorBox with HTML content

```js
<ErrorBox errors={{ name: <span>Something went <a href="#">wrong</a></span> }} />
```
