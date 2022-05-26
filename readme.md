# Yutes [utilities]

This SCSS package was designed to quickly get up-and-running with:
1. 3 brand color system (colors.scss), to be adjusted and customized as your app evolves
2. Basic utilities: stripped webkit default styles, cleaned anti-aliasing, margin and padding arguments (with bootstrap-style names), responsive arguments, etc.
<br><br>

### Installation & Usage
Terminal:
```bash
  npm install @riapacheco/yutes
```
Add to your main SCSS file:
```scss
  @import '~@riapacheco/yutes/yutes.scss';
  @import '~@riapacheco/yutes/colors.scss';
```
<br><br>

## Files List
- yutes.scss
- utilities.scss
- variables.scss
- colors.scss
- forms.scss
- buttons.scss
<br><br>

## What's included
<br>

### Main yutes.scss file
- Imports supporting files to create module
- Strips webkit/browser styles that impede own styling
  - Typical elements: inputs, buttons, anchors
  - Adjusts body sizes so that "100%" truly means "100%" when applied to a div
  - Removes scrollbar
  - Adjust images to base them on custom height (no stretching of images)
<br><br>

### utilities.scss
- Provides margin and padding arguments 
- Supplies a mixin that can adjust individual selectors in your code with responsive changes, according to the breakpoint name you specify
- Provides containers that allows for automatic margins around content 
- Provides flex-box classes for quicker access as you code
<br><br>

##### What you can do in your templates

###### Adding Margin / Padding as Classes
Adding `class="mr-1"` will apply `margin-right: 1rem` to an element, adding `class="mb-2"` will applying `margin-bottom: 2rem;` to an element; and so on.
<br>

###### Add Media Queries to Individual SCSS Classes
```scss
// Your div
.some-div {
  width: 60%;
  margin: auto;

  @include respond-to(mobile) {
    width: 90%;
  }
}
```
Note: change breakpoints in the `utilities.scss` file (they're variables)
<br>

###### To add containers
`class="container"`
<br>

###### To add flexbox
Starts with flex-direction, specified `nowrap` if elements inside are nowrap, and classed that define keys like 'align-items' and 'justify-content':
```html
<div class="flex-row nowrap align-center justify-between">
  <div>
    <h2>This is the Title of a Modal
  </div>

  <!--This 'close' button will appear on the opposite side of the title-->
  <a (click)="closeModal()">
    Close
  </a>
</div>
```
<br><br>

### variables.scss
Any variables you find (other than colors and margin/padding args, are found here)
<br><br>

### colors.scss
- Change the primary, secondary, accent, state, and alternative colors
- Change the way classes were created 
<br>

### forms.scss
Example:
```html
<div class="form">
  <label>First Name</label>
  <input
    type="text"
    name="firstName"
    class="form-control">
</div>
```
<br><br>

### buttons.scss
Add buttons with color and color variations:
```html
<a class="btn btn-sm primary dark">
  Click!
</a>
```
<br><br>

<small>
  Note: this scss lib was created with an Angular app (v11+)
</small>