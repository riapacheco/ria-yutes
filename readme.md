# Yutes [Utilities]

The `@riapacheco/yutes` package is a _really_ lightweight `SCSS` pack of stylesheets intended to provide **utilities** similar to those found in common frameworks like [**Bootstrap**](https://getbootstrap.com/docs/4.0/utilities/spacing/) (with some slight differences) but without the rigidness that limits fluid design.

As an example of how this is achieved (especially for those familiar with libraries like `Bootstrap` and `Tailwind CSS`), here's some samples on how they were created with SCSS features:
```SCSS
// Enabling the 'pt-1' [padding-top: 1] shorthand classes | (_utilities.scss)
@each $abbr, $name in ('t': 'top', 'r': 'right', 'b': 'bottom', 'l': 'left') {
  @for $i from 1 through $margin-max-rem-multiple {
    .p#{$abbr}-#{$i} {
      padding-#{$name}: 1rem * $i;
    }
  }
}

// Enabling breakpoint logic | (breakpoints.scss)
@mixin if-viewport($media) {
  @if $media == small {
    @media only screen and (max-width: $mobile) {
      @content;
    }
  } @else if $media == medium {
    @media only screen and (min-width: calc($mobile + 1px)) and (max-width: calc($desktop - 1px)){
      @content;
    }
  } 
}
```

<br>

> Simplified buttons so that they don't rely on the color palette and instead can be changed with three variables. You can also add `sm` after `btn` for smaller buttons and `lg` after `btn` for larger. These are based on a `scale()` property which you can also override. To skip the documentation and see it in action, watch this [demo video](https://clipchamp.com/watch/nRbqffyd43U).

<br>

---

Contents ⤵️

- [Installation](#installation)
- [Browser Resets](#browser-resets)
- [Usage](#usage)
- [Config Variables](#config-variables)
- [Latest Updates](#latest-updates)
  - [New Inter Optimized Stylesheet](#new-inter-optimized-stylesheet)

<br><br>

# Installation

Install from [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) with command

```bash
  npm install @riapacheco/yutes
```

In your main `SCSS` file

```scss
@import "@riapacheco/yutes/main.scss";
```

<br>

### For Encapsulated Views

To use [breakpoints](#breakpoints) in encapsulated stylesheet

```scss
@import "@riapacheco/yutes/breakpoints.scss";
```

To use [colors](#colors) and to [override](#how-to-override) in encapsulated stylesheet

```scss
@import '@riapacheco/yutes/variables.scss';
```

<br><br>

# Browser Resets

This package strips all browser default styles **passively**.

| Style                        | Applied to          | Description                                                  |
| ---------------------------- | ------------------- | ------------------------------------------------------------ |
| Smoothing                    | All Elements        | Antialiasing makes for smoother renderings                   |
| Border-Box                   | All Elements        | Ensures consistency with edges                               |
| Unset Focus/Outlines         | All Elements        | Removes browser focus styles (e.g. blue borders)             |
| Unset scrollbar              | All Elements        | Removes scrollbar from all views                             |
| Consistent resizing          | `img` elements      | Limits errors and broken styles from problematic cascading. To change image size, adjust `width` only. |
| Unset focus                  | `button`            | Removes webkit focus                                         |
| Unset active                 | `button`            | Removes all active outlines and blue colors                  |
| Unset focus                  | anchors             | Removes webkit focus                                         |
| Unset active                 | anchors             | Removes all active outlines, underlines, and blue colors     |
| Prioritized cursor `pointer` | File upload buttons | Re-adds the `pointer` behavior of cursors for any `file upload` buttons you may add graphics overtop of |
| Removed outlines             | `input`             | Removes outlines from input fields                           |

<br><br>

# Usage

### How to Override

All structure and baseline user controls were sized (or calculated [`calc()`]) with `rem` multiples (baseline body `font-size`) to ensure responsivity and easier customization.

To override any variables, in your main `SCSS` file re-assign the variable **BEFORE** importing the `~@riapacheco/yutes/main.scss` file (and `variables.scss` file just to be safe!) like this:

```scss
$primary-color: #123456;
$secondary-color: #654321;
$base-rem-size: 17px;
$h2-size: 2rem;

@import '~@riapacheco/yutes/main.scss';
@import '~@riapacheco/yutes/variables.scss';
```

See [config variables](#config-variables) section for complete list of variables to override

<br><br>

### Imported Fonts

Test drive a font family by applying its class to an element containing text. For HTML `<link>` tags, see `comments` found in the `@riapacheco/yutes/_fonts.scss` file!

* Inter `.inter-ff`
* Roboto Flex `.roboto-flex-ff`
* Public Sans `.public-sans-ff`
* Open Sans `.open-sans-ff`
* Fira Code `.fira-code-ff`
* Nanum Gothic `.nanum-gothic-ff`
* Lato `.lato-ff`
* Montserrat `.montserrat-ff`
* Oswald `.oswald-ff`
* Source Sans Pro `.source-sans-pro-ff`
* Merriweather `.merriweather-ff`
* Nunito Sans `.nunito-sans-ff`

<br><br>

### Horizontal Centering

Specify a container width to create a centered container. 

##### SYNTAX

```html
<div class="mx-auto-{size}px">
  This is a container
</div>
```

##### VALUES

Specify a `size` between `1` and `3000`. The value is translated to `pixels`.

##### EXAMPLE

```HTML
<div class="mx-auto-700px">
  This is a good size for iPads
</div>
```

<br><br>

### Padding & Margin

##### SYNTAX

```html
<div class="p{direction}-{size}"></div>
```

##### VALUES

See [config variables](#config-variables) section to override the **size range**

| Prefix | Direction | Translation | Compiles to       | Size Range |
| :----: | :-------: | ----------- | ----------------- | ---------- |
|  `p`   |    `t`    | `top`       | `padding-top:`    | `1` - `30` |
|  `p`   |    `r`    | `right`     | `padding-right:`  | `1` - `30` |
|  `p`   |    `b`    | `bottom`    | `padding-bottom:` | `1` - `30` |
|  `p`   |    `l`    | `left`      | `padding-left:`   | `1` - `30` |
|  `m`   |    `t`    | `top`       | `margin-top:`     | `1` - `30` |
|  `m`   |    `r`    | `right`     | `margin-right:`   | `1` - `30` |
|  `m`   |    `b`    | `bottom`    | `margin-bottom:`  | `1` - `30` |
|  `m`   |    `l`    | `left`      | `margin-left:`    | `1` - `30` |

##### EXAMPLE

```html
<div class="pt-3 pb-1">
  Section
</div>
```

* The above translates to `padding-top: 3rem;` and `padding-bottom: 1rem;`

<br><br>

### Breakpoints

##### DEPENDENCY

Must import the following to any encapsulated stylesheets first

```scss
@import "~@riapacheco/yutes/breakpoints.scss";
```

##### SYNTAX

```scss
.your-class {
  width: 220px;
  
  @include if-viewport({size}) {
    // add appropriate styles
  }
}
```

##### VALUES

See [config variables](#config-variables) section to override the **breakpoint widths** 

| {size}   | Description                                                  |
| -------- | ------------------------------------------------------------ |
| `small`  | Applies your assigned styles if viewport between `0px` and `375px` |
| `medium` | Applies your assigned styles if viewport between `376px` and `1200px` |

##### EXAMPLE

```scss
.buttons-block {
  display: flex;
  flex-direction: row;
  button {
    display: inline-block;
  }
  
  @include if-viewport(small) { // applies smartphone-friendly styling
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    button { // accesses child (parent's scope)
      display: block;
    }
  }
  
  @include if-viewport(medium) { // applies tablet - small screen styling
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
}
```

<br><br>

### Colors

##### DEPENDENCY

Must import the following to any encapsulated stylesheets first

```scss
@import '~@riapacheco/yutes/variables.scss'
```

##### SYNTAX

Mostly applied to optional controls (buttons and form fields) but can be applied to elements with classes like this:

```html
<div class="primary-color">
  This text has `$primary-color` applied to it
</div>
```

##### VALUES

See [config variables](#config-variables) section to override the **color variables**

| Class                     | Applied Value                               |
| ------------------------- | ------------------------------------------- |
| `.primary-color`          | `color: $primary-color`                     |
| `.primary-color.light`    | `color: $primary-light-color`               |
| `.primary-color.medium`   | `color: $primary-medium-color`              |
| `.primary-color.dark`     | `color: $primary-dark-color`                |
| `.primary-bg`             | `background-color: $primary-color`          |
| `.primary-bg.light`       | `background-color: $primary-light-color`    |
| `.primary-bg.medium`      | `background-color: $primary-medium-color`   |
| `.primary-bg.dark`        | `background-color: $primary-dark-color`     |
| `.secondary-color`        | `color: $secondary-color`                   |
| `.secondary-color.light`  | `color: $secondary-light-color`             |
| `.secondary-color.medium` | `color: $secondary-medium-color`            |
| `.secondary-color.dark`   | `color: $secondary-dark-color`              |
| `.secondary-bg`           | `background-color: $secondary-color`        |
| `.secondary-bg.light`     | `background-color: $secondary-light-color`  |
| `.secondary-bg.medium`    | `background-color: $secondary-medium-color` |
| `.secondary-bg.dark`      | `background-color: $secondary-dark-color`   |
| `.accent-color`           | `color: $accent-color`                      |
| `.accent-color.light`     | `color: $accent-light-color`                |
| `.accent-color.medium`    | `color: $accent-medium-color`               |
| `.accent-color.dark`      | `color: $accent-dark-color`                 |
| `.accent-bg`              | `background-color: $accent-color`           |
| `.accent-bg.light`        | `background-color: $accent-light-color`     |
| `.accent-bg.medium`       | `background-color: $accent-medium-color`    |
| `.accent-bg.dark`         | `background-color: $accent-dark-color`      |

##### EXAMPLE

```html
<div class="primary light">
  This is light color text
</div>
```

<br><br>

### Headings

##### SYNTAX

The following properties have been set from `h1` to `h6`: 

```
font-size`, `line-height`, `letter-spacing`, `font-weight`, and `text-transform
```

##### VALUES

See [config variables](#config-variables) section to override **heading values**

<br><br>

### Forms

##### SYNTAX / EXAMPLE

Lightweight classes for stacking labels overtop `input` and `select` elements (with light grey field input colors). Only requires that the `label` and `input` or `select` element are enclosed in an element with the `.form-group` class like this:

```html
<div class="form-group"> <!--just this-->
  <label>
    First Name
  </label>
  <input type="text" name="firstName">
</div>
```

##### VALUES

See [config variables](#config-variables) section to override **form element styles**

<br><br>

### Buttons

##### SYNTAX

This style will always require the initializer `btn` class followed by chained `{color}` classes or chained `{add-on}` classes

```html
<a class="btn {size} {color} {add-on} "
```

##### VALUES

For full details on configuring variables, go to [config variables](#config-variables) section.

##### BUTTON UPDATES
###### Primary, Secondary, and Accent Base Colors
For easier / quick implementation, and for those NOT wanting multiple shades of a button color, you can now update your primary, secondary, and accent buttons with simple variables instead of relying on the actual `$primary-color` variables in your palette. However, this will not impact the other class shades (e.g `<color_type> light`) as they are still part of the overall color scheme. 
```scss
// Variables found in the variables.scss file
// Configured in your main SCSS file BEFORE importing the package
$button-primary-color: $primary-dark-color;
$button-secondary-color: $secondary-medium-color;
$button-accent-color: $accent-medium-color;
```
For more details, see [config variables](#config-variables) section.

###### Sizing
Since there's value in having alternative small and large buttons, there are now variables to adjust these sizes utilizing the `transform: scale(x)` property.
```scss
// Variables found in the variables.scss file
// Configured in your main SCSS file BEFORE importing the package
$button-sm-size: scale(0.8);
$button-lg-size: scale(1.15);
```
For more details, see [config variables](#config-variables) section.

Notes:
* Any classes listed within `< >` and given a `?` are optional
* If the property listed is a variable (starts with a `$`) this indicates both the value AND how the variable you can override in your main stylesheet.

| Class(es)                               | Syntax Position | Compiles to \|\| General description                         |
| --------------------------------------- | --------------- | ------------------------------------------------------------ |
| `primary`                               | `{color}`       | `$button-primary-color: $primary-dark-color`                      |
| `primary default`                       | `{color}`       | `background-color: $primary-color`                           |
| `primary light`                         | `{color}`       | `background-color: $primary-light-color`                     |
| `primary medium`                        | `{color}`       | `background-color: $primary-medium-color`                    |
| `primary dark`                          | `{color}`       | `background-color: $primary-dark-color`                      |
| `primary <shade?> primary-alt-text`     | `{color}`       | `background-color: $primary` <br>`color: $button-primary-font-color-alt` |
| `secondary`                             | `{color}`       | `$button-secondary-color: $secondary-medium-color`                  |
| `secondary default`                     | `{color}`       | `background-color: $secondary-color`                         |
| `secondary light`                       | `{color}`       | `background-color: $secondary-light-color`                   |
| `secondary medium`                      | `{color}`       | `background-color: $secondary-medium-color`                  |
| `secondary dark`                        | `{color}`       | `background-color: $secondary-dark-color`                    |
| `secondary <shade?> secondary-alt-text` | `{color}`       | `background-color: $secondary` <br>`color: $button-secondary-font-color-alt` |
| `accent`                                | `{color}`       | `$button-accent-color: $accent-medium-color`                     |
| `accent default`                        | `{color}`       | `background-color: $accent-color`                            |
| `accent light`                          | `{color}`       | `background-color: $accent-light-color`                      |
| `accent medium`                         | `{color}`       | `background-color: $accent-medium-color`                     |
| `accent dark`                           | `{color}`       | `background-color: $accent-dark-color`                       |
| `accent <shade?> accent-alt-text`       | `{color}`       | `background-color: $accent` <br>`color: $button-accent-font-color-alt` |
| `sm` | `{size}` | `$button-sm-size: scale(0.8)` |
| `lg` | `{size}` | `$button-lg-size: scale(1.15)` |
| `rounded`                               | `{add-on}`      | Pill style button (`20px` border radius)                     |
| `raised`                                | `{add-on}`      | Applies a box-shadow (and adjustments to box-shadow on `hover` and when `active`) |
| `hover-to-lighten`                      | `{add-on}`      | Applies a `brightness` filter on `hover` that increases brightness by `15%` |
| `hover-to-darken`                       | `{add-on}`      | Applies a `brightness` filter on `hover` that decreases brightness by `25%` |

##### EXAMPLE

```html
<a class="btn primary raised hover-to-darken">
  Save Changes
</a>
```



---



# Config Variables

### How it works

To override any variables, in your main `SCSS` file re-assign the variable **BEFORE** importing the `~@riapacheco/yutes/main.scss` file (and `variables.scss` file just to be safe!) like this:

```scss
$primary-color: #123456;
$secondary-color: #654321;
$base-rem-size: 17px;
$h2-size: 2rem;

@import '~@riapacheco/yutes/main.scss';
@import '~@riapacheco/yutes/variables.scss';
```

<br>

### Override Base Sizes

Copy some or all of the following into your main file (in this order) and change the values as you please
Note: your `$base-rem-size` value determines the overall sizing of all elements impacted by this package.

```scss
$base-rem-size: 15.5px;
$base-font-family: "Inter", sans-serif;
$base-letter-spacing: -0.02rem;
$button-primary-color: pink;

@import '~@riapacheco/yutes/main.scss';
@import '~@riapacheco/yutes/variables.scss';
```

<br>

### Padding / Margin REM Ranges

Copy some or all of the following into your main file (in this order) and change the values as you please

```scss
$padding-max-rem-multiple: 30;
$margin-max-rem-multiple: 30;

@import '~@riapacheco/yutes/main.scss';
@import '~@riapacheco/yutes/variables.scss';
```

<br>

### Colors

Copy some or all of the following into your main file (in this order) and change the values as you please

```scss
/* --------------------------------- PRIMARY -------------------------------- */
$primary-light-color: #FFD753;
$primary-color: #FFC400;
$primary-medium-color: #FFAB00;
$primary-dark-color: #FF991F;

/* -------------------------------- SECONDARY ------------------------------- */
$secondary-light-color: #79E2F2;
$secondary-color: #00C7E6;
$secondary-medium-color: #00B8D9;
$secondary-dark-color: #00A3BF;

/* --------------------------------- ACCENT --------------------------------- */
$accent-light-color: #FFBDAD;
$accent-color: #FF8F73;
$accent-medium-color: #FF7452;
$accent-dark-color: #FF5630;


@import '~@riapacheco/yutes/main.scss';
@import '~@riapacheco/yutes/variables.scss';
```

<br>

### Headings

Copy some or all of the following into your main file (in this order) and change the values as you please

```scss
/* -------------------------------- HEADING 1 ------------------------------- */
$h1-size: 2rem;
$h1-height: 2rem;
$h1-spacing: -0.1rem;
$h1-weight: 700;
$h1-transform: none;

/* -------------------------------- HEADING 2 ------------------------------- */
$h2-size: 1.8rem;
$h2-height: 1.8rem;
$h2-spacing: -0.05rem;
$h2-weight: 700;
$h2-transform: none;

/* -------------------------------- HEADING 3 ------------------------------- */
$h3-size: 1.6rem;
$h3-height: 1.6rem;
$h3-spacing: -0.05rem;
$h3-weight: 700;
$h3-transform: none;

/* -------------------------------- HEADING 4 ------------------------------- */
$h4-size: 1.4rem;
$h4-height: 1.4rem;
$h4-spacing: -0.03rem;
$h4-weight: 700;
$h4-transform: none;

/* -------------------------------- HEADING 5 ------------------------------- */
$h5-size: 1.2rem;
$h5-height: 1.2rem;
$h5-spacing: -0.03rem;
$h5-weight: 700;
$h5-transform: none;

/* -------------------------------- HEADING 6 ------------------------------- */
$h6-size: 0.88rem;
$h6-height: 0.88rem;
$h6-spacing: 0.06rem;
$h6-weight: 500;
$h6-transform: uppercase;

@import '~@riapacheco/yutes/main.scss';
@import '~@riapacheco/yutes/variables.scss';
```

<br>

### Breakpoints

Copy some or all of the following into your main file (in this order) and change the values as you please

```scss
$mobile: 375px;
$desktop: 1200px;

@import '~@riapacheco/yutes/main.scss';
@import '~@riapacheco/yutes/variables.scss';
```

<br>

### Buttons

Copy some or all of the following into your main file (in this order) and change the values as you please

```scss
/* --------------------------- BASELINE BTN STYLES -------------------------- */
$button-font-size: 1rem;
$button-border-radius: 0.2rem;
$button-padding-top-bottom: 0.8rem;
$button-padding-left-right: 1.2rem;

/* ------------------------------ BUTTON SIZING ----------------------------- */ // NEW!
$button-sm-size: scale(0.8) !default;
$button-lg-size: scale(1.15) !default;

/* ---------------------------- COLOR ATTRIBUTES ---------------------------- */ // NEW!
$button-primary-color: $primary-dark-color;
$button-secondary-color: $secondary-medium-color;
$button-accent-color: $accent-medium-color;

/* ------------------------ ADDITIONAL BTN ATTRIBUTES ----------------------- */
$pill-button-border-radius: 20px;
$hover-filter-bright: brightness(1.15);
$hover-filter-dark: brightness(0.85);
$button-raised-box-shadow: 4px 6px 12px rgba(0, 0, 0, 0.4);
$button-raised-box-shadow-hover: 4px 6px 12px rgba(0, 0, 0, 0.2);
$button-raised-box-shadow-active: 4px 6px 12px rgba(0, 0, 0, 0.1);

/* ----------------------- FONT COLORS & ALTERNATIVES ----------------------- */
$button-primary-font-color: white;
$button-primary-font-color-alt: black;
$button-secondary-font-color: white;
$button-secondary-font-color-alt: black;
$button-accent-font-color: white;
$button-accent-font-color-alt: black;

@import '~@riapacheco/yutes/main.scss';
@import '~@riapacheco/yutes/variables.scss';
```

<br>

### Forms

Copy some or all of the following into your main file (in this order) and change the values as you please

```scss
/* ----------- STYLES APPLIED TO TEXT INPUTS AND SELECT DROPDOWNS ----------- */
$form-control-border-radius: 0.2rem;
$form-control-font-size: $base-rem-size;
$form-control-min-height: $form-control-font-size * 2.3;
$form-control-spaces-between: 1.5rem;

/* ---------------------------- TEXT INPUTS ONLY ---------------------------- */
$form-input-font-family: inherit;
$form-input-bg-color: #f0f0f0;
$form-input-padding-left: $form-control-min-height / 3.5;

/* ------------------------- SELECT DROP DOWNS ONLY ------------------------- */
$form-select-font-family: inherit;
$form-select-bg-color: #f8f8f8;

/* --------------------------------- LABELS --------------------------------- */
$form-label-font-size: 1rem;
$form-label-font-family: inherit;
$form-label-font-weight: 600;
$form-label-padding-left: 0.5rem;
$form-label-padding-bottom: 0.5rem;
$form-label-letter-spacing: auto;

@import '~@riapacheco/yutes/main.scss';
@import '~@riapacheco/yutes/variables.scss';
```

---

# Latest Updates

## **New Inter Optimized Stylesheet**
Things like `margin-block-start` and `margin-inline-start` are impacted by typography dimensions (e.g. sometimes a lowercase `I` might be taller than a capital `G`) and line-height. 
I created a new stylesheet for my favorite font (`Inter`) called `inter-mixins.scss`. 

---

<small> **Warning**: I do <strong>NOT</strong> use the `<p>` element in my work and instead add text to `<div>` elements I adjust later. Applying body text to `<p>` elements will not likely render the properties derived from `@mixin inter-body-text` <i>unless</i> applied directly to the `<p>` element. </small>

---

### What it does
Provides `@mixins` for the following classes:
* CSS import for `Inter` font from Google's API
* `html`: given a `10px` base font-size to better control all elements that use `rem` for sizing
* `body`: given a `1.6rem` base font-size to ensure actual body font-sizing is readable / ideal
* `h1` to `h6`

### Mobile Adjustments
The `body`, and headers `h1` to `h4` have associated mobile versions. These are new `@mixins` which have the same name but include `-mobile` as suffix. 
Easiest way to use these (apart from programmatically detecting resizing in your app's framework) is to import the `breakpoints.scss` stylesheet to apply them in the same place that you apply the original `@mixins`. 

Here's an example of how one might set up their `styles.scss` (main SCSS file):
```SCSS
@import '~@riapacheco/yutes/main.scss';           // resets, smoothing, and utility shorthand classes access
@import '~@riapacheco/yutes/breakpoints.scss';    // access breakpoint logic
@import '~@riapacheco/yutes/inter-mixins.scss';   // new sizing/adjustments for "Inter" font

html {
  @include inter-html-text;
}

body {
  @include inter-body-text;
  @include if-viewport(small) { @include inter-body-text-mobile; }
}

h1 {
  @include inter-h1;
  @include if-viewport(small) { @include inter-h1-mobile; }
}

// and so on and so forth -- EXCLUDING h5 and h6 for mobile versions

```