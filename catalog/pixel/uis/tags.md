#### Tag w/ Custom Label, Icon
```table
span: 2
columns:
  - Prop
  - Type
rows:
  - Prop: 'icon'
    Type: '_string_'
  - Prop: 'label'
    Type: '_string_'
```
```react|span-4
<UI.Tag
  label="Custom Label"
  icon="core-auto"
/>
```

#### Vehicle
```table
span: 2
columns:
  - Prop
  - Type
rows:
  - Prop: 'id'
    Type: '**"auto"**'
  - Prop: 'label'
    Type: '_string_'
```
```react|span-4
<UI.Tag
  id="auto"
  label="2020 Toyota Camry SE"
/>
```
