### When to use Buttons

#### Users need to know instantly what is ‘clickable’ and what’s not. 
```html



<div class="btn-container">
<div class="btn-wrapper-left">
        
    <div class="btn-type">
            <span class="btn-type-text">Primary Buttons</span>
                            <p class="btn-type-info">Use for primary actions such as save, submit, print etc. Should be a “call to action” that advances to another flow.</p>

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
        <div class="btn-wrapper-left">
                <div class="btn-type">
                        <span class="btn-type-text">Small Buttons</span>
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
### Secondary Buttons

```html
<div>

<div class="btn-type">
<span class="btn-type-text">Secondary Buttons</span>
<p class="btn-type-info"> Use for secondary actions or action opposite to a primary action such as Cancel.</p>
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

### Useability

####	•	Use primary buttons for your most important actions
####	•	Use secondary buttons or links for actions that are repeated on a page or for actions that are less popular user paths
####	•	Generally, primary buttons indicate next steps and secondary buttons are actions that happen on the same page
####	•	Size is another important factor in determining primary focus. The larger the button, the more attention it will grab. 
####	•	Make sure buttons look clickable - use a color variation to differentiate it from body copy or non actionable items
####	•	Avoid too many buttons on one page
####	•	Button labels should be succinct and use the fewest possible words to describe the outcome of the action. Avoid generic phrases such as “Submit”. Try making the first word a verb.
####	•	Icons may help add clarity and scanabiltyode header areas in the accordion as buttons or menu items so that they are usable with both screen readers and the keyboard.
####	•	Buttons should state if  if expanded="true". The expanded="false" attribute will be added to other buttons when the accordion is initialized.