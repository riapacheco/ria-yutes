# Ria Kit

Bare bones scss kit utilities (yutes) for basic structure & color experimentation.
> Actual demo page / cheatsheet available soon (when I find time)

<br><br>
Like bootstrap, you can add basic margin and padding with classes.<br>
e.g. `pt-1` is `padding-top: 1rem`
<br><br>
Since elements like buttons were sized based on key variables at the top of their scss files, it makes it a little easier to change sizing as you code.<br>
e.g. a button's padding is determined by a font-size variable.
<br><br><br>

### Install

#### Terminal:
<code>
  npm install @riapacheco/yutes
</code>

<br><br>

#### In your main scss file:
<code>
  @import '~@riapacheco/yutes/yutes.scss';
</code>


<br>
<br>
<br>

## Usage:

> This was made for me to personally get up and running faster.<br> If you're just looking for some scss code to get you started, you can take them from the files. <br> E.g. take padding and margin arguments from `scss/_foundation/utilities.scss`

I'll be updating a LOT of patch versions while I'm finding querks or adding more clutch selectors.

### Margins & Padding
Add margins through classes (like all bootstrap) with 'mb-1' [meaning margin-bottom: 1 rem] or 'pl-2' [meaning paddling-left: 2rem]; and so on.

### Containers
Put contents in containers [`.container`] for added automatic margins to the left and right of content

### Experiment with Theme Colors
Go to `scss/_foundation/colors.scss` to play with a simple theme of primary, secondary, and accent colors. 

### Experiment with Breakpoints
Add media queries to specific classes as you go:
```scss
.some-element {
  width: 300px;
  margin: auto;

  @include respond-to(smartphones) {
    width: 100%;
  }
}
```
<br>

Based on your own style, change breakpoints in `scss/_foundation/utilities.scss`
Go to `scss/_foundation/utilities.scss` to change the three different breakpoints:
```scss
$break-small: 370px;
$break-medium: 920px;
$break-large: 1024px;
```

<br>

### Basic Customization
All styles are contained with the file having its associated name. 
i.e. All typography (including the base HTML body size) will be in `scss/_foundation/typography.scss`, since it's pulled as a variable into the main scss file with the sass decoration `@import`.

<br><br>

## Notes for usage
If certain scss styles aren't being picked up, you can import the files directly into your local scss file. For example, if you want to import a color variable:
<code>
  @import '~@riapacheco/yutes/_foundation/colors.scss';
</code>

### Recommendation: SASS's `@use` decorator
Jussayin: to keep things tidy, so that you know where things come from when reading the code (or someone else is reading your code), I suggest using SASS's `@use` decorator over the (soon to be deprecated) `@import`. This is because it creates a <strong>namespace</strong> for easier origin tracing. E.g:
`src/components/some-component.scss`:
<code>
@use `~@riapacheco/yutes/_foundation/colors.scss' as _color;

.some-element {
  background-color: _color.$primary-color;
}
</code>
(just looking out)

<br><br><br>


## Flexbox Not included
Since I usually work with packages like `@angular/flex-box` from `@angular/cdk`, I did not include flex boxes that much in here. 