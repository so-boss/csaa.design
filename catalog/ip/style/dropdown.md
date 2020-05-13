### Dropdowns are used when we want to give user multiple option.

Dropdowns should use when we have too many options. They conserve screen space and prevent users from entering erroneous data, since they only show legal choices. Providing the auto complete functionality in dropdowns will make the user experience better. 

### When to Avoid Dropdown.

When you have huge list one should not use dropdowns because they will have to start scrolling inside the list and, since they hide the part of options from the screen, it creates a painful user experience and slow down overall process.

```html
<div style="width: 400px;">
<div class="dropdown-wrapper">
   <div style="color: #95989A; float:left; font-size: 16px; font-family: Helvetica Neue; width: 300px">Account</div>
   <div class="arrow-icon">
   </div>
   </div>
   <div class="drop-menu" >
    <div class="drop-menu-option">
            Checking Account
        </div>
        <div class="drop-menu-option">
            Saving Account
        </div>
        <div class="drop-menu-option">
            Debit Card
        </div>
        <div class="drop-menu-option">
            Credit Card
        </div>
         <div class="drop-menu-option">
            Checking
        </div>
        
       </div>
</div>
```
