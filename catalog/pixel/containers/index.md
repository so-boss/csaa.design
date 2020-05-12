```image
plain: true
src: "/pixel/container.webp"
```
Containers are a complex type of wrapper, designating three common slots for context & content: Header, Body, & Footer. Rarely, are all three used. A low level layout element, that provides three common slots to separate content and provide context. Often Container elements will be nested.
  - App
  - Card
  - Drawer
  - Group
  - Form
  - Page

```hint
  Requires: **Wrapper, Title**

  Props: **children**
```

## Basic Usage
#### Container Slots
Containers don't typically utilize all three slots. A slot can accept HTML, multiline markup, or straight text.

```code|lang-jsx,span-6
<ContainerElement>
  {{
    header: '→ → Why are you removing Emily from your policy?',
    body: 'select reason',
  }}
</ContainerElement>
```
```code|lang-html,span-6
collapsed: true
---
<ContainerElement>
  <wrapper>
→   <wrapper type="header">
→ →   <wrapper type="title">
→ → → → <title>Why are you removing Emily from your policy?</title>
→ →   </wrapper>
→   </wrapper>
    <wrapper type="body">select reason</wrapper>
  </wrapper>
</ContainerElement>
```

#### Header Slots
This slot, if passed a string, will automatically wrap that text in a <Title>. This behavior is ignored if passed HTML/JSX.

```code|lang-jsx,span-6
<ContainerElement>
  {{
    header: (
      <Title>Why didn't the chicken cross the road?</Title>
    ),
    body: 'select reason',
  }}
</ContainerElement>
```
```code|lang-html,span-6
collapsed: true
---
<ContainerElement>
  <wrapper>
    <wrapper type="header">
→ →   <wrapper type="title">
→ → → → <title>Why didn't the chicken cross the road?</title>
→ →   </wrapper>
    </wrapper>
    <wrapper type="body">select reason</wrapper>
  </wrapper>
</ContainerElement>
```

## Videos
```html|span-2,plain,noSource
<div>Container Contains...</div>
<iframe width="200" height="150" src="https://www.youtube.com/embed/nlPA0AjaE-0?start=2139" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```
```html|span-2,plain,noSource
<div>Let Context Inform</div>
<iframe width="200" height="150" src="https://www.youtube.com/embed/nlPA0AjaE-0?start=2237" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

## Gallery
