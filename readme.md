- [What is it](#yutes)
- [Install](#install)
- [Usage](#usage)
  - [Padding & Margin](#padding-and-margin)
  - [Breakpoints](#breakpoints)
  - [Containers](#containers)
  - [Flexbox](#flexbox)
  - [Typography](#typography)
    - [Weight](#weight)
    - [Overrides](#overrides)
  - [Colors](#colors)
  - [Buttons](#buttons)
  - [Forms](#forms)
  - [Cards](#cards)

<br><br>

# Yutes

### What is it?

Yutes is a collection of bare bones __scss__ utility (yutes) classes for basic structure & color experimentation (adjust as you code/go). Feel free to just take the code from any of the files. It's pretty bare bones already but you may just be looking for utility code snippets.

<br>

### Bottom-Up _Helper_ Philosophy
My philosophy _experiments_ with design to come up with a standard _afterwards_ (bottom up). 
<br>
- Basic theme of 3 colors: faster/easier to experiment with a new theme (doesn't assume we all know color theory and can prepare for every scenario)
- Responsive sizing (per-selector) allows you to add individual adjustments to classes that give you trouble after-the-fact (and eventually find those breakpoints that makes sense _for_ the design)
- Basic utilities (padding/margin classes,  etc)
- Some additional files you can use for buttons and such (based on font-size calcs so that they stay responsive with changes)


<br><br><br><br><br>

# Install

### Terminal:
<code>
  npm install @riapacheco/yutes
</code>

<br>

### In your main scss file:
<code>
  @import '~@riapacheco/yutes/yutes.scss';
</code>

<br><br><br><br><br>

# Usage
> The main yutes.scss file imports the others, but you may need to import specific files (e.g. colors.scss) for using those colors in separate component files. Further, the main `yutes.scss` files contain all browser overrides for quicker convenience -- from stripping buttons/links, to ensuring that `100%` width in future classes will truly be `100%`.

<br><br><br>

## Padding and Margin

> Import Details: `./utilities.scss` will not need a direct import

Syntax: first letter of padding or margin (`p` or `m`) + first letter of direction (e.g `r` for right) + hyphen number of rems (1 rem = body base font size).

```html
  <div class="mb-5 ml-2">
    This div has margin-bottom of 5 rem, and margin-left of 2 rem
  </div>
```

<br><br><br>

## Breakpoints

> Import Details: `@import '@riapacheco/yutes/utilities.scss';` may need a direct import 

Adjust breakpoint properties in `utilities.scss` file. 

Usage:
```scss
  .some-class {
    width: 500px;
    margin: auto;

    @include respond-to(tablets) {
      width: 700px;
      // Doesn't cancel out margin
    }
    @include respond-to(smartphones) {
      width: 90%;
    }
  }
```
Note: When reseting a parent property, it has to be an exact match. (e.g. margin-right won't override a parent's geneeral 'margin')

<br><br><br>

## Containers

> Import Details `./utilities.scss` will not need a direct import

Use the four sizes of containers to add padding to the left and right of content while centering it: .container-sm, .container, .container-lg, .container-mobile

```html
  <div class="container">
    Medium sized container
  </div>

  <div class="container-sm">
    Small container
  </div>
```

<br><br><br>

## Flexbox

> Import Details: `./utilities.scss` will not need a direct import

1. Choose either `.flex-column` or `.flex-row`
2. Optional if it's `.nowrap`
3. Choose alignment: `.align-` + last word of different options (e.g. `.align-end` for align: flex-end)
4. Choose justify-content value: `.justify-` + last word of different options (e.g. `.justify-between` for justify-content: space-between)
5. Optional if you want to use align/justify `self` class which follows the same pattern but with `self-` added after the initial word. (e.g. `.align-self-start` for align-self: flex-start)

<br><br><br>

## Typography

> Import Details `@import '~@riapacheco/yutes/typography.scss;` may need a direct import if using variables instead of classes

Sets font styles and heading classes with additional classes for adjustments:

<br><br><br>

### Weight

Note: depending on the font you choose, `thin` may not work.
```html
  <h2 class="light"> This heading is light </h2>
  <h2 class="bold"> This heading is bold</h2>
```

<br><br><br>

### Overrides
`.lowercase` for making text lowercase
`.default-text-transform` to override unexpected transformations from browser or otherwise
`.default-letter-spacing` bring letter spacing back to 0


Note: go to file for special `samp` and `code` block adjustments.

<br><br><br>

## Colors

> Import Details: `@import '~@riapacheco/yutes/colors.scss'` will need a direct import if using variables instead of classes

3 theme colors: primary, secondary, accent
4 state colors: success, warning, danger, info (based on accent color)

Can add colors as classes with `.primary-color`, `.secondary-color`, etc.
To make light, add to same class list `.light`. (e.g. `<div class="primary-color light"></div>)

Can add background-colors as classes with the same initial (e.g. `.primary-color`) class, and by adding to that class list `.bg`, `.light-bg`, `.medium-bg`, `.dark-bg`, etc.

<!-- ----------------------------- Alt Colors ------------------------------ -->
> Import Details; `@import '~@riapacheco/yutes/alt-colors.scss';` will need direct import

Same color scheme as `colors.scss` but without state colors and with additional `.alt-text` class for text color.

Same classes, but with `alt` added to the beginning of each, so `.alt-primary-color .light` on an element makes it's color `$alt-primary-light-color`

<br><br><br>

## Buttons

> Import Details: `./buttons.scss` will not need a direct import 

1. Add `.btn` to element
2. Optionally add `.raised` if you want shadow
3. For sizing add additional class of `btn-sm`, `btn-md` or `btn-lg` (padding of buttons depend on global )
4. To add color, add the color category name for the default color `primary` and an additional class of its variant e.g:
```html
  <button class="btn btn-md primary dark"> Click me </button>
```

<br><br><br>

## Forms

> Import Details: `./forms.scss` will not need a direct import

Add `form-group` to every div that holds a label and input (this will make them stack as a column)

Adjust input styles and colors here (or delete to style somehwere else)

<br><br><br>

## Cards

> Import Details: `./cards.scss` will not need a direct import

To have a card with a background color, add `card` class and an optional shadow an additional `raised` class.

To add padding, add the class `card-content` or add it to an enclosed div

Additional class of `card-header` has a flex space-between for title and close icon placement in the future; and `card-footer` does the same