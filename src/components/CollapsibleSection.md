Basic:
```js
<CollapsibleSection
  title="Panel title"
  visible=<p>This paragraph is always visible.</p>
>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum fugiat, quae voluptates consectetur suscipit alias velit magni tenetur veritatis sed fuga.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum fugiat, quae voluptates consectetur suscipit alias velit magni tenetur veritatis sed fuga.</p>
</CollapsibleSection>
```

Two columns:
```js
<CollapsibleSection
  title="Panel title"
  isTwoColumns
  visible=<p>This paragraph is always visible.</p>
>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum fugiat, quae voluptates consectetur suscipit alias velit magni tenetur veritatis sed fuga.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum fugiat, quae voluptates consectetur suscipit alias velit magni tenetur veritatis sed fuga.</p>
</CollapsibleSection>
```

Hide visible element on expand:
```js
<CollapsibleSection
  title="Panel title"
  isTwoColumns
  toggleVisible
  visible=<p>This is the visible paragraph.</p>
>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum fugiat, quae voluptates consectetur suscipit alias velit magni tenetur veritatis sed fuga.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa recusandae sequi, dicta laboriosam rerum ad ex voluptatibus nostrum fugiat, quae voluptates consectetur suscipit alias velit magni tenetur veritatis sed fuga.</p>
</CollapsibleSection>
```
