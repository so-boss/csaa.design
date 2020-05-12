## Basic Usage
```code|lang-jsx,span-3
<Button>
   Submit
</Button>
```
```react|span-3
noSource: true
---
<Button>
   Submit
</Button>
```

```code|lang-html,span-6
collapsed: true
---
<button>
   Submit
</button>
```


## Variants
**Disabled**
Button appear light grey and cursor changes to a disabled icon on hover.
  - disabled=**true**

```code|lang-jsx,span-3
<Button disabled='true'>
   Save
</Button>
```
```react|span-3
noSource: true
---
<Button disabled='true'>
   Save
</Button>
```


## Definitions
```code|lang-js,span-6
{
  button:{
    border:{
      radius:'3px',
      width:'1px',
    },
    width:{
      min:'104px',
      max:'200px',
    },
    height:'48px',
    padding:'0 24px',
  }
}
```

## Tokens
```code|lang-scss,span-6
@mixin button {
  // returns <button> context
}
```
