### When to use Buttons

#### Users need to know instantly what is ‘clickable’ and what’s not. 
```html



<div class="btn-container">
<div class="btn-wrapper-left">
        
    <div class="btn-type">
            <span class="btn-type-text">Primary Buttons</span>
                <ul>
                        <li class="btn-type-info">Use for primary actions such as save, submit, print etc. Should be a “call to action” that advances to another flow.</li>
                            <li class="btn-type-info">Use primary buttons for your most important actions</li>
                            <li class="btn-type-info">Generally, primary buttons indicate next steps and secondary buttons are actions that happen on the same page</li>
                            <li class="btn-type-info">Max width for Primary button should not be more than 140px;  </li>
                            <li class="btn-type-info">We have differnt states for buttons and colors corresponds to that.  </li>
</ul>
    </div>
    <div class="btn btn-default">
            Default
             </div>

      <div class="btn btn-default-hover">Hover</span>
    </div>
    <div class="btn btn-default">
           Active
    </div>
    <div class="btn btn-disable">
           Diabled
    </div>
        </div>
 ```
```table
span: 4
rows:
  - Button: Default
    Size: "max-width: 140px"
    Color: "#0991CB"
    Shadow: NA
  - Button: Hover
    Size: "max-width: 140px"
    Color: "#0991CB"
    Shadow: 0px 3px 6px 00000029
  - Button: Active
    Size: "max-width: 140px"
    Color: "#0991CB"
    Shadow: NA
  - Button: Disable
    Size: "max-width: 140px"
    Color: "#CCCCCC"
    Shadow: NA
```
 ```html
        <div class="btn-wrapper-left">
                <div class="btn-type">
                        <span class="btn-type-text">Small Buttons</span>
                        <ul>
                                <li class="btn-type-info"> Small buttons are having max-width of 100px. It should not go wider than that.</li>
                                </ul>
                        </div>
    <div class="btn-small btn-small-default">
            Default
    </div>
      <div class="btn-small btn-small-hover">
            Hover
    </div>
    <div class="btn-small btn-small-hover">Active</span>
    </div>
    <div class="btn-small btn-disable-small">Diabled</span>
    </div>
    </div>
    <!-- <div class="side-option" style="float:right;">
            <ul>
         <li> Primary </li>
            <li>Secondary</li>
            <li>Success</li>
            <li>Loading</li>
            <li>Danger</li>
            <li>Disabled</li>
            <li>Links</li>
            <li>Text</li>
            <li>Grouped</li>
            <li>With Icons</li>
            </ul>
            </div>
</div> -->


```
```table
span: 4
rows:
  - Button: Default
    Size: "max-width: 100px"
    Color: "#0991CB"
    Shadow: NA
  - Button: Hover
    Size: "max-width: 100px"
    Color: "#0991CB"
    Shadow: 0px 3px 6px 00000029
  - Button: Active
    Size: "max-width: 100px"
    Color: "#0991CB"
    Shadow: NA
  - Button: Disable
    Size: "max-width: 100px"
    Color: "#CCCCCC"
    Shadow: NA
```
### Secondary Buttons

```html
<div>

<div class="btn-type">
<span class="btn-type-text">Secondary Buttons</span>
<ul>
<li class="btn-type-info"> Use for secondary actions or action opposite to a primary action such as Cancel.</li>
<li class="btn-type-info">Use secondary buttons or links for actions that are repeated on a page or for actions that are less popular user paths</li>
</ul>
</div>
    
    <div>
            <div class="btn btn-secondary">
            <span class="btn btn-secondary-default">Default</span>
    </div>
      <div class="btn btn-secondary"style=" ">
      <span class="btn btn-secondary-hover">Hover</span>
    </div>
  
    
    <div class="btn-wrapper-left">
                <div class="btn-type">
                        <span class="btn-type-text">Small Buttons</span>
                        <ul>
                                <li class="btn-type-info"> Small buttons are having max-width of 100px. It should not go wider than that.</li>
</ul>
                        </div>
    <div class="btn-small btn-small-secondary">
            Default
    </div>
      <div class="btn-small btn-secondary-hover">
            Hover
    </div>
    
    </div>
    </div>
        
        <!-- <div style="float:right; width: 50%;">
                <p style="font-family: Helvetica;">Small Sizes</p>
      <div style="max-width:100px; height:40px; background: #fff; border: 1px solid #ccc; border-radius: 4px; color: #666666; line-height: 40px; text-align: center; margin-bottom: 30px; cursor: pointer;">
            <span style="font-size: 14px; font-family: helvetica; ">Default</span>
    </div>
      <div style="max-width:100px; height:40px; background: #fff; border: 1px solid #0096D6; border-radius: 4px; color: #666666; line-height: 40px; text-align: center; margin-bottom: 30px; cursor: pointer;">
            <span style="font-size: 14px; font-family: helvetica; ">Hover</span>
    </div> -->
        </div>
    </div>
</div>
```


### Accessibility
#### The contrast ratio is the ratio of the luminance of the text color to the background color. According to the World Wide Web Consortium (W3C), the suggested contrast ratio is at least 4.5:1. Buttons should display a visible focus state when users tab to them
####	•	Avoid using <div> or <img> tags to make buttons due to screen readers not recognizing this as a button
####	•	For buttons with dependencies, use a disabled state when a user has not performed an action to make a button active. Disable buttons can be used when filling out forms. The button will remain disabled until all conditions have been met.


