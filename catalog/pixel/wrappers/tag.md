```hint
  Requires: **Block**

  Props: **icon, label or children**
```
## Basic Usage
```code|lang-jsx,span-3
<Tag icon='core-auto'>
  CAAS100383547
</Tag>
```
```react|span-3
noSource: true
---
<Tag icon='core-auto'>
  CAAS100383547
</Tag>
```

```code|lang-html,span-6
collapsed: true
---
<tag>
  <block>
    <wrapper>
      <wrapper hugeness="xs">
        <svg class="pixel-core-auto" viewBox="0 0 512 512">
          <path d="m510 254c-1-11-15-29-30-44l-48-132c-10-28-36-46-66-46l-223 0c-29-1-56 18-66 46l-47 129c-15 16-29 34-30 47l0 186c0 20 17 37 38 37l10 0c21 0 38-17 38-37l0-26 338 0 0 26c0 20 17 37 38 37l11 0c20 0 37-17 37-37l0-186z m-428-88l28-76c5-14 19-23 33-23l222 0c15 0 28 9 34 23l28 76c1 3 1 6-1 9-2 2-5 4-8 4l-327 0c-3 0-6-1-8-4-2-2-2-6-1-9z m19 143c-20 0-36-16-36-36 0-19 16-35 36-35 19 0 35 16 35 35 0 20-16 36-35 36z m268-36c0-20 16-36 36-36 19 0 35 16 35 36 0 19-16 35-35 35-10 0-19-4-25-10-7-7-11-16-11-25z"></path>
        </svg>
      </wrapper>
      <wrapper>
        <thing>CAAS100383547</thing>
      </wrapper>
      <wrapper></wrapper>
    </wrapper>
  </block>
</tag>
```

## Variations
**Embedding Tags**
Add one or more <Tag>s to (line three || four) by passing an array instead of a string.
  - **ELEMENT** = 'tag'
  - **ICON**
  - **LABEL**

```code|lang-jsx,span-3
<Block
  lines={[
    '2015 Lexus ES',
    'Replacing 2006 Honda Accord',
     [

       {
         element:'tag',
         icon:'core-auto',
         label:'CAAS100383547',
       }

     ]
  ]}
/>
```
```react|span-3
noSource: true
---
<Block
  lines={[
    '2015 Lexus ES',
    'Replacing 2006 Honda Accord',
     [

       {
         element:'tag',
         icon:'core-auto',
         label:'CAAS100383547',
       }

     ]
  ]}
/>
```

## Definitions
```code|lang-js,span-6
{
  tag:{
    padding:'0 16px 0 16px',
    height:'32px',
    border:{
      radius:'100px',
    },
    margin:'0 0 0 8px',
  }
}
```

## Tokens
```code|lang-scss,span-6
@mixin tag {
  // → → returns <tag> context

  @mixin theme grey;

  & block {
    > wrapper {
      @mixin flex;
      > wrapper {
        @mixin block_col_2 {
          justify-content:center;
          & > thing:nth-child(1) {
             @mixin line 1, tag;
          }
        };
      }
    }
  }
}
```

## Videos


## Examples
