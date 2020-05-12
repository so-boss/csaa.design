#### Persons Full Name: Basic
```table
span: 2
columns:
  - Prop
  - Type
rows:
  - Prop: 'id'
    Type: '**"name_full"**'
```
```react|span-4
<Inputs
  id="fullName"
  initialValues={{
    name: ''
  }}
  validationSchema={validationSchema}
>
  <UI.Field id="name_full" />
</Inputs>
```

#### Persons Full Name: Complete
```table
span: 2
columns:
  - Prop
  - Type
rows:
  - Prop: 'id'
    Type: '**"name_person"**'
```
```react|span-4
<Inputs
  id="names"
  initialValues={{
    name_first: '',
    name_last: '',
    name_middle: '',
    name_suffix: ''
  }}
  validationSchema={validationSchema}
>
  <UI.Fields id="name_person"/>
</Inputs>
```

#### Address: Basic
```table
span: 2
columns:
  - Prop
  - Type
rows:
  - Prop: 'id'
    Type: '**"address"**'
```
```react|span-4
<Inputs
  id="address"
  initialValues={{
    address_street: '',
    address_city: '',
    address_zip: '',
  }}
  validationSchema={validationSchema}
>
  <UI.Fields id="address" />
</Inputs>
```

#### Address: Lessor
```table
span: 2
columns:
  - Prop
  - Type
rows:
  - Prop: 'id'
    Type: '**"lessor"**'
```
```react|span-4
<Inputs
  id="adress"
  initialValues={{
    name: '',
    address_street: '',
    address_city: '',
    address_zip: '',
  }}
  validationSchema={validationSchema}
>
  <UI.Fields id="lessor" />
</Inputs>
```

#### Address: Financier
```table
span: 2
columns:
  - Prop
  - Type
rows:
  - Prop: 'id'
    Type: '**"financier"**'
```
```react|span-4
<Inputs
  id="address"
  initialValues={{
    name: '',
    address_street: '',
    address_city: '',
    address_zip: '',
  }}
  validationSchema={validationSchema}
>
  <UI.Fields id="financier" />
</Inputs>
```
