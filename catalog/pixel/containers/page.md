High level container elements that are meant to help structure page like content and also require routing. Typically, <Page> headers are provided a block.
```hint
  Requires: **Container, Block**

  Props: **type, children**
```

## Basic Usage
```code|lang-jsx,span-3
<Page>
  {{
    header:(
      <Block
        lines={[
          'Auto Policy',
          'CAAS100383547',
          'Policy Period 12/31/2018 to 12/31/2019',
        ]}
      />
    ),
    body:'Body Content',
    footer:'Footer Content',
  }}
</Page>
```
```react|span-3
noSource: true
---
<Page>
  {{
    header:(
      <Block
        lines={[
          'Auto Policy',
          'CAAS100383547',
          'Policy Period 12/31/2018 to 12/31/2019',
        ]}
      />
    ),
    body:'Body Content',
    footer:'Footer Content',
  }}
</Page>
```
```code|lang-html,span-6
collapsed: true
---
<page>
  <wrapper>
    <wrapper type="header">
      <block>
        <wrapper>
          <wrapper></wrapper>
          <wrapper>
            <thing>Auto Policy</thing>
            <thing>CAAS100383547</thing>
            <thing>Policy Period 12/31/2018 to 12/31/2019</thing>
          </wrapper>
          <wrapper></wrapper>
        </wrapper>
      </block>
    </wrapper>
    <wrapper type="body">Body Content</wrapper>
    <wrapper type="footer">Footer Content</wrapper>
  </wrapper>
</page>
```

## Variations


## Definitions
```code|lang-js,span-6
{
  page: {
    padding:'0 56px 0px 56px',
    header:{
      block: {
        padding:'40px 0 40px 0',
        border:{
          bottom:{
            thickness:'1px',
          },
          width:'calc(100% + 56px + 56px)',
          left:'-56px',
        },
        col_2: {},
      },
    },
    body:{
      margin:'24px 0 0 0',
    },
    footer:{
      height:{
        min:'56px',
      },
    },
  }
}
```

## Tokens
```code|lang-scss,span-6
@mixin page {
  // → → returns <page> → <wrapper> → <wrapper> context

  @mixin page_header {
    // → → returns <wrapper type='header'> context

    @mixin page_header_block {
      // → → returns <Block><wrapper > context
    }
  }
  @mixin page_body {
    // → → returns <wrapper type='body'> context
  }
  @mixin page_footer {
    // → → returns <wrapper type='footer'> context
  }
}
```

## Videos
```html|span-2,plain,noSource
<div>...are super cool</div>
<iframe width="200" height="150" src="https://www.youtube.com/embed/nlPA0AjaE-0?start=2979" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```
```html|span-2,plain,noSource
<div>...are Containers</div>
<iframe width="200" height="150" src="https://www.youtube.com/embed/nlPA0AjaE-0?start=3351" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```
```html|span-2,plain,noSource
<div>Containers contain...</div>
<iframe width="200" height="150" src="https://www.youtube.com/embed/nlPA0AjaE-0?start=2139" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

## Examples
```react|plain
<Page>
  {{
    header: (
      <Block
        lines={[
          'Page Title',
        ]}
      />
    ),
    body: 'Body Content',
  }}
</Page>
```
```react|plain
<Page>
  {{
    header: (
      <Block
        lines={[
          'Page Title',
          'Pages are special containers that live and breath and are routed to.',
        ]}
      />
    ),
    body: 'Body Content',
  }}
</Page>
```
```react|plain
<Page>
  {{
    header: (
      <Block
        lines={[
          'Auto Policy',
          'CAAS100383547',
          'Policy Period 12/31/2018 to 12/31/2019',
        ]}
      />
    ),
    body: 'Body Content',
    footer: 'Footer Content',
  }}
</Page>
```
