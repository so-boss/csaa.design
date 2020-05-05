### Type is an essential part of a design system.

Text is the major channel for users to understand application content and complete their work, and a well designed font system will greatly enhance the user's reading experience and work efficiency.

Typography is based on the design principle of "dynamic order" combined with the law of natural logarithm and temperament. We strongly recommend it since it has become an industry standard. The font system for a visual system is composed, mainly of:
1. Family
2. Base Font Size
3. Scale & Line Height
4. Weight
5. Color

## Font Size
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
    { "label": "L / LARGEST", "value": 24 },
    { "label": "M / MEDIUM", "value": 16 },
    { "label": "S / SMALL", "value": 14 },
    { "label": "XS / SMALLEST", "value": 12 },
  ],
  "paragraphs": [
    {
        "label": "BODY",
        "value": "14/28",
        "weight":300,
        "font": "'Helvetica', sans-serif",
    }
  ]
}
```

```type|span-6,kern,smoothen
{
    "color": "#1778d3",
    "font": "Helvetica",
    "weight": 400,
    "headings": [
      {
        "label":"HEADER / CLAIMS",
        "value":24
      },
      {
        "label":"LINK / Privacy Policy",
        "value":14
      }
    ]
}
```
```type|span-6,kern,smoothen
{
    "color": "#333333",
    "font": "Helvetica",
    "weight": 400,
    "headings": [
      {
        "label":"AMOUNT / Total",
        "value":24
      },
      {
        "label":"LINK / PAY ALL",
        "value":16
      },
      {
        "label":"BODY COPY / Collision at Intersection",
        "value":14
      },
      {
        "label":"NAVIGATION (INACTIVE) / POLICIES",
        "value":12
      }
    ]
}
```
```type|span-6,kern,smoothen
{
    "color": "#333333",
    "font": "Helvetica",
    "weight": 600,
    "headings": [
      {
        "label":"ENTITY IDENTIFIER / 2006 HONDA ACCORD",
        "value":16
      },
      {
        "label":"NUMBER, ID / 9890-09-3094",
        "value":14
      },
      {
        "label":"NAVIGATION (ACTIVE) / DASHBOARD",
        "value":12
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
    - Line Height (x1.75)
rows:
  - Size: 'XS'
    Font Size: 12px
    Line Height (x1.75): 21.00px
  - Size: 'S'
    Font Size: 14px
    Line Height (x1.75): 24.50px
  - Size: 'M'
    Font Size: 16px
    Line Height (x1.75): 28.00px
  - Size: 'L'
    Font Size: 24px
    Line Height (x1.75): 43.75px
```
```hint|span-3,hint
Our recommended **base font size is 14px**, and its corresponding **line height is 1.75X**.
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
