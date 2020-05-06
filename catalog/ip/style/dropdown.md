### Dropdowns are used when we want to give user multiple option.

Dropdowns should use when we have too many options. They conserve screen space and prevent users from entering erroneous data, since they only show legal choices. Providing the auto complete functionality in dropdowns will make the user experience better. 

### When to Avoid Dropdown.

When you have huge list one should not use dropdowns because they will have to start scrolling inside the list and, since they hide the part of options from the screen, it creates a painful user experience and slow down overall process.

```html
<div style="width: 400px;">
<div style="padding: 15px; border: 1px solid #D4D4D5; height: 50px;">
   <div style="color: #95989A; float:left; font-size: 14px; font-family: Helvetica Neue; width: 300px">Account</div>
   <div style="color: #95989A; float:right;"><</div>
   </div>
   <div style="width: 400px; height: 280px; background: #fff; border: 1px solid #D4D4D5; border-radius: 3.5px; margin-top: 13px; color: #0096D6;" >
   <!-- <div style="width: 0; height: 0; border-left: 15px solid transparent; border-right: 15px solid transparent; border-bottom: 10px solid #fff; position: absolute; top: 74px; right: 543px;">
  </div> -->
    <div style="height: 56px; border-bottom: 1px solid #D4D4D5; padding:20px; cursor: pointer">
            Checking Account
        </div>
        <div style="height: 56px; border-bottom: 1px solid #D4D4D5; padding:20px; cursor: pointer">
            Saving Account
        </div>
        <div style="height: 56px; border-bottom: 1px solid #D4D4D5; padding:20px; cursor: pointer">
            Debit Card
        </div>
        <div style="height: 56px; border-bottom: 1px solid #D4D4D5; padding:20px; cursor: pointer">
            Credit Card
        </div>
         <div style="height: 55px; background: #F8F9FB; border-bottom: 1px solid #D4D4D5; padding:20px; cursor: pointer">
            Checking
        </div>
        
       </div>
</div>
```
