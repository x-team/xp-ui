Basic:

```js
<Keywords
  values="a,simple,string,separated,by,commas,with,operators,and,or"
  onChange={values => console.log({ values })}
  onSubmit={() => console.log('Submit keywords')}
/>
```

Missing props (does component explode?):

```js
<Keywords />
```
