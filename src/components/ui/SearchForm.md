Card view mode:

```js
<SearchForm
  mode="card"
  lists={[{id:1,value:'a selected list',selected:true}]}
  onSelectList={() => console.log('onSelectList')}
  onClickShowLists={() => console.log('onClickShowLists')}
  keywords={'a keyword,or,two,and,much more'}
  onChangeKeywords={() => console.log('onChangeKeywords')}
  fields={[{id:1,value:'an unselected field'}]}
  onSelectField={() => console.log('onSelectField')}
  onSubmit={() => console.log('onSubmit')}
  openListEditorModal={(e) => {e.preventDefault();console.log('openListEditorModal')}}
  renderApplicantsStatusFilter={'Here it goes ApplicantsStatusFilter component'}
/>
```

Tabular view mode:

```js
<SearchForm
  mode="tabular"
  lists={[{id:1,value:'a selected list',selected:true}]}
  onSelectList={() => console.log('onSelectList')}
  onClickShowLists={() => console.log('onClickShowLists')}
  keywords={'a keyword,or,two,and,much more'}
  onChangeKeywords={() => console.log('onChangeKeywords')}
  fields={[{id:1,value:'an unselected field'}]}
  onSelectField={() => console.log('onSelectField')}
  onSubmit={() => console.log('onSubmit')}
  openListEditorModal={(e) => {e.preventDefault();console.log('openListEditorModal')}}
  renderApplicantsStatusFilter={'Here it goes ApplicantsStatusFilter component'}
/>
```

Missing props (does component explode?):

```js
<SearchForm />
```
