#### Name w/ Custom Label
```table
span: 2
columns:
  - Prop
  - Type
rows:
  - Prop: 'id'
    Type: '**"name"**'
  - Prop: 'label'
    Type: '_string_'
```
```react|span-4
<Inputs
  id="institutionName"
  initialValues={{
    name: ''
  }}
  validationSchema={validationSchema}
>
  <UI.Field
    id="name"
    label="Name of Lessor"
  />
</Inputs>
```

#### Name w/ Custom Label, Mask
```table
span: 2
columns:
  - Prop
  - Type
rows:
  - Prop: 'id'
    Type: '**"name"**'
  - Prop: 'label'
    Type: '_string_'
  - Prop: 'mask'
    Type: '_string_'
```
```react|span-4
<Inputs
  id="institutionName"
  initialValues={{
    name: ''
  }}
  validationSchema={validationSchema}
>
  <UI.Field
    id="name"
    label="Name of Financier"
    mask="ACME Holdings"
  />
</Inputs>
```

#### Name: First
```table
span: 2
columns:
  - Prop
  - Type
rows:
  - Prop: 'id'
    Type: '**"name_first"**'
```

```react|span-4
<Inputs
  id="firstName"
  initialValues={{
    name_first: ''
  }}
  validationSchema={validationSchema}
>
  <UI.Field id="name_first" />
</Inputs>
```

#### Name: Middle
```table
span: 2
columns:
  - Prop
  - Type
rows:
  - Prop: 'id'
    Type: '**"name_middle"**'
```
```react|span-4
<Inputs
  id="lastName"
  initialValues={{
    name_middle: ''
  }}
  validationSchema={validationSchema}
>
  <UI.Field id="name_middle" />
</Inputs>
```

#### Name: Last
```table
span: 2
columns:
  - Prop
  - Type
rows:
  - Prop: 'id'
    Type: '**"name_last"**'
```
```react|span-4
<Inputs
  id="lastName"
  initialValues={{
    name_last: ''
  }}
  validationSchema={validationSchema}
>
  <UI.Field id="name_last" />
</Inputs>
```

#### Name: Suffix
```table
span: 2
columns:
  - Prop
  - Type
rows:
  - Prop: 'id'
    Type: '**"name_suffix"**'
```
```react|span-4
<Inputs
  id="suffix"
  initialValues={{
    name_suffix: ''
  }}
  validationSchema={validationSchema}
>
  <UI.Field id="name_suffix" />
</Inputs>
```

#### Email
Default Mask: email@domain.com
```table
span: 2
columns:
  - Prop
  - Type
rows:
  - Prop: 'id'
    Type: '**"email"**'
  - Prop: 'mask'
    Type: '_string_'
```
```react|span-4
<Inputs
  id="email"
  initialValues={{
    email: '',
  }}
  validationSchema={validationSchema}
>
  <UI.Field id="email" />
</Inputs>
```

#### Address: Street
```table
span: 2
columns:
  - Prop
  - Type
rows:
  - Prop: 'id'
    Type: '**"address_street"**'
```
```react|span-4
<Inputs
  id="street"
  initialValues={{
    address_street: ''
  }}
  validationSchema={validationSchema}
>
  <UI.Field
      id="address_street"
   />
</Inputs>
```

#### Address: City
```table
span: 2
columns:
  - Prop
  - Type
rows:
  - Prop: 'id'
    Type: '**"address_city"**'
```
```react|span-4
<Inputs
  id="street"
  initialValues={{
    address_city: ''
  }}
  validationSchema={validationSchema}
>
  <UI.Field
      id="address_city"
   />
</Inputs>
```

#### Address: Zip
Default Mask: 00000
```table
span: 2
columns:
  - Prop
  - Type
rows:
  - Prop: 'id'
    Type: '**"address_zip"**'
  - Prop: 'mask'
    Type: '_string_'
```
```react|span-4
<Inputs
  id="zip"
  initialValues={{
    address_zip: ''
  }}
  validationSchema={validationSchema}
>
  <UI.Field
      id="address_zip"
   />
</Inputs>
```
