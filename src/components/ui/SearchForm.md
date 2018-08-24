Card view mode:

```js
<SearchForm
  mode="card"
  lists={[{id:1,value:'a'}]}
  onSelectList={() => console.log('onSelectList')}
  onClickShowLists={() => console.log('onClickShowLists')}
  keywords={['a']}
  onChangeKeywords={() => console.log('onChangeKeywords')}
  fields={[{id:1,value:'a'}]}
  onSelectField={() => console.log('onSelectField')}
  onSubmit={() => console.log('onSubmit')}
  openListEditorModal={() => console.log('openListEditorModal')}
  renderApplicantsStatusFilter={() => console.log('renderApplicantsStatusFilter')}
/>
```

Tabular view mode:

```js
<SearchForm
  mode="tabular"
  onSubmit={() => console.log('onSubmit')}
>
</SearchForm>
```

Missing props (does component explode?):

```js
<SearchForm />
```
