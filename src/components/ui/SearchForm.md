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
  statuses={[
    {id:1,value:'In Pipeline'},
    {id:2,value:'Booked'},
    {id:3,value:'Internal'},
    {id:4,value:'Unqualified'},
    {id:5,value:'Lost'},
    {id:6,value:'Left'},
  ]}
  onSelectStatus={() => console.log('onSelectStatus')}
  onSubmit={() => console.log('onSubmit')}
  openListEditorModal={() => console.log('openListEditorModal')}
  renderApplicantsStatusFilter={'Here it goes ApplicantsStatusFilter component'}
  renderTabularFilterTags={'Here it goes the tabular filters'}
  switchDisplay={(mode) => console.log('switchDisplay:', mode)}
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
  statuses={[
    {id:1,value:'In Pipeline'},
    {id:2,value:'Booked'},
    {id:3,value:'Internal'},
    {id:4,value:'Unqualified'},
    {id:5,value:'Lost'},
    {id:6,value:'Left'},
  ]}
  onSelectStatus={() => console.log('onSelectStatus')}
  onSubmit={() => console.log('onSubmit')}
  openListEditorModal={() => console.log('openListEditorModal')}
  renderApplicantsStatusFilter={'Here it goes ApplicantsStatusFilter component'}
  renderTabularFilterTags={'Here it goes the tabular filters'}
  switchDisplay={(mode) => console.log('switchDisplay:', mode)}
/>
```

Missing props (does component explode?):

```js
<SearchForm />
```
