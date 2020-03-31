### Type is an essential part of a design system.

Text is the major channel for users to understand application content and complete their work, and a well designed font system will greatly enhance the user's reading experience and work efficiency. 

Mobilitas typography is based on the design principle of "dynamic order" combined with the law of natural logarithm and temperament. We strongly recommend it since it has become an industry standard. The font system for a visual system is composed, mainly of:
1. Family
2. Base Font Size
3. Scale & Line Height
4. Weight
5. Color

## Font Size
Our **base font size is 18px** to ensure the best user reading efficiency on most common monitors based on display screen reading distance (50 cm) and optimal reading angle (0.3).
```image
plain: true
span: 6
src: "/styleguide/screenreading.png"
```

```type
{
  "font": "'Roboto', sans-serif",
  "color": "#0c1014",
  "headings": [
    { "label": "XXL / LARGEST", "value": 48 },
    { "label": "XL / EXTRA LARGE", "value": 28 },
    { "label": "L / LARGE", "value": 18 },
    { "label": "M / MEDIUM", "value": 17 },
    { "label": "S / SMALL", "value": 16 },
    { "label": "XS / SMALLEST", "value": 14 }
  ],
  "paragraphs": [
    { 
        "label": "BODY", 
        "value": "18/28", 
        "font": "'Roboto', sans-serif", 
    }
  ]
}
```

## Line Height / Scale
The font scale and line height determine the beauty of the dynamics and order of a font system. Font scale refers to a series of font with different sizes. Line height can be understood as an invisible box wrapped outside the font.
```image
plain: true
span: 6
src: "/styleguide/fontscale.png"
```
```table
span: 3
columns:
    - Size
    - Font Size
    - Line Height (x1.75)
rows:
  - Size: 'XS'
    Font Size: 14px
    Line Height (x1.75): 24.50px
  - Size: 'S'    
    Font Size: 16px
    Line Height (x1.75): 28.00px
  - Size: 'M'    
    Font Size: 17px
    Line Height (x1.75): 29.75px
  - Size: 'L'    
    Font Size: 18px
    Line Height (x1.75): 31.50px
  - Size: 'XL'    
    Font Size: 28px
    Line Height (x1.75): 49.00px
  - Size: 'XXL'    
    Font Size: 48px
    Line Height (x1.75): 84.00px
```
```hint|span-3,hint
Our recommended **base font size is 18px**, and its corresponding **line height is 1.75X**.
```

## Weight
The choice of font weight is also based on the principles of order, stability, and restraint. In most cases, **medium** & **semibold** should be adequate.
```table
span: 3
columns:
    - Name
    - Weight
rows:
  - Name: 'Medium'
    Weight: 500
  - Name: 'Semibold'
    Weight: 600
```

## Color
Text will be difficult to read if it is too close to the background color. To achieve barrier-free design, we follow the WCAG standard, which maintains an AAA level of contrast ratio, i.e. 7:1 or more between body text, title, and background color.
```image
plain: true
span: 6
src: "/styleguide/contrastfont.png"
```
