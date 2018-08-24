Basic:

```js
<TagsInput
  values="a,simple,string,separated,by,commas"
  onChange={values => console.log({ values })}
/>
```

Missing props (does component explode?):

```js
<TagsInput />
```
