### Type is an essential part of a design system.
Text is the major channel for users to understand application content and complete their work, and a well designed font system will greatly enhance the user's reading experience and work efficiency.

Typography is based on the design principle of "dynamic order" combined with the law of natural logarithm and temperament. We strongly recommend it since it has become an industry standard. The font system for a visual system is composed, mainly of:
1. Family
2. Base Font Size
3. Scale & Line Height
4. Weight
5. Color

## Font Size
AAA’s standard web font is Helvetica Bold and Regular faces. Large bold type should be used to establish clear information hierarchy. Substantial body copy should not use a size smaller than 14px.

Our **base font size is 14px** to ensure the best user reading efficiency on most common monitors based on display screen reading distance (50 cm) and optimal reading angle (0.3).
```image
plain: true
span: 6
src: "/styleguide/mypolicy/screenreading.png"
```

```type
{
  "font": "'Helvetica', sans-serif",
  "color": "#333333",
  "headings": [
    { "label": "XL / LARGEST", "value": 60 },
    { "label": "L / LARGE", "value": 36 },
    { "label": "M / MEDIUM", "value": 24 },
    { "label": "S / SMALL", "value": 18 },
    { "label": "XS / EXTRA SMALL", "value": 14 },
    { "label": "XXS / SMALLEST", "value": 12 },
  ],
  "paragraphs": [
    {
        "label": "Default Body Content",
        "value": "14/22",
        "font": "'Helvetica', sans-serif",
    },
    {
        "label": "Small Body Content",
        "value": "12/18",
        "font": "'Helvetica', sans-serif",
    }
  ]
}
```

## Line Height / Scale
The font scale and line height determine the beauty of the dynamics and order of a font system. Font scale refers to a series of font with different sizes. Line height can be understood as an invisible box wrapped outside the font.
```image
plain: true
span: 6
src: "/styleguide/mypolicy/fontscale.png"
```
```table
span: 3
columns:
    - Size
    - Font Size
    - Line Height
rows:
  - Size: 'XXS'
    Font Size: 12px
    Line Height: 18.00px
  - Size: 'XS'
    Font Size: 14px
    Line Height: 22.00px
  - Size: 'S'
    Font Size: 18px
    Line Height: 22.00px
  - Size: 'M'
    Font Size: 24px
    Line Height: 22.00px
  - Size: 'L'
    Font Size: 36px
    Line Height: 36.00px
  - Size: 'XL'
    Font Size: 60px
    Line Height: 55.00px
```
```hint|span-3,hint
Our recommended **base font size is 14px**, and its corresponding **line height is 22.00px**.
```

## Weight
The choice of font weight is also based on the principles of order, stability, and restraint. In most cases, **regular**, **medium**, & **bold** should be adequate.
```table
span: 3
columns:
    - Name
    - Weight
rows:
  - Name: "Regular"
    Weight: 400
  - Name: 'Medium'
    Weight: 500
  - Name: 'Bold'
    Weight: 600
```

## Color
Text will be difficult to read if it is too close to the background color. To achieve barrier-free design, we follow the WCAG standard, which maintains an AAA level of contrast ratio, i.e. 7:1 or more between body text, title, and background color.
```image
plain: true
span: 6
src: "/styleguide/contrastfont.png"
```
