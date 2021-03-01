# Yutes [utilities]

This SCSS package was designed to quickly get up-and-running with:
1. Simple 3 brand color system (colors.scss), to be adjusted and customized as an app evolves
2. Cover basic utilities: stripped webkit default styles, cleaned anti-aliasing, margin and padding arguments (with bootstrap-style names), responsive arguments, etc.
<br><br>

## To Install
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
- colors.scss
- forms.scss
- buttons.scss
- custom-yutes/yutes-nav.scss (personal one you don't need to use)
<br><br>

## What's included in each file
<br>

### Main yutes.scss file
- Imports supporting files to module
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

#### What you can do here
Adjust 3 important variables at top of file:
```scss
$font-family: 'Nanum Gothic', sans-serif;
$base-rem: 15px; // this is reflected in button sizes etc.
$form-input-field-bg: $accent-light-color; // determines the color of input fields
```
<br>

#### What you can do in your templates
<br>

##### To provide margin or padding
Adding `class="mr-1"` will apply `margin-right: 1rem` to an element, adding `class="mb-2"` will applying `margin-bottom: 2rem;` to an element; and so on.
<br>

##### To add responsive values to your selector, based on the user's device type
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

##### To add containers
`class="container"`
<br>

##### To add flexbox
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


<small>
  Note: this scss lib was created with an Angular app (v11+)
</small>