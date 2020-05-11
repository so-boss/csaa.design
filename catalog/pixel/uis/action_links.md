#### Default Text Link
```table
span: 2
columns:
  - Prop
  - Type
rows:
  - Prop: 'id'
    Type: '**"link"**'
  - Prop: 'label'
    Type: '_null_'
```
```react|span-4
<UI.Action id="link"/>
```

#### Text Link w/ Custom Label
```table
span: 2
columns:
  - Prop
  - Type
rows:
  - Prop: 'id'
    Type: '**"link"**'
  - Prop: 'label'
    Type: '_string_'
```
```react|span-4
<div>
  <UI.Action
    id="link"
    label="Cancel"
  />

  <UI.Action
    id="link"
    label="Submit"
  />

  <UI.Action
    id="link"
    label="Save"
  />
</div>
```

#### Back
```table
span: 2
columns:
  - Prop
  - Type
rows:
  - Prop: 'id'
    Type: '**"back_link"**'
```
```react|span-4
<UI.Action id="back_link"/>
```

#### Next
```table
span: 2
columns:
  - Prop
  - Type
rows:
  - Prop: 'id'
    Type: '**"next_link"**'
```
```react|span-4
<UI.Action id="next_link"/>
```
