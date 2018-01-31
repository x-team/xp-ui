Basic search bar

```
<FilterBar onSubmit={() => console.log('onSubmit')}>
  <InputField placeholder="Search..." />
</FilterBar>
```

More elements on search bar

```
<FilterBar onSubmit={() => console.log('onSubmit')}>
  <InputField placeholder="Search..." />
  <InputField placeholder="This could be a select box..." />
  <SvgIcon icon="message" color="monochrome" />
</FilterBar>
```

Missing props (does component explode?):

```
<FilterBar />
```
