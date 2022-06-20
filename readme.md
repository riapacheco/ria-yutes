# Yutes [Utilities]

The `@riapacheco/yutes` package is a _really_ lightweight `SCSS` pack of stylesheets intended to provide **utilities** similar to those found in common frameworks like [**Bootstrap**](https://getbootstrap.com/docs/4.0/utilities/spacing/) (with some slight differences) but without the rigidness that limits fluid design.

<br><br>

Contents ⤵️

- [Installation](#installation)
- [Usage](#usage)
- [Config and Override Variables **(New!)**](#config-and-override-variables)

<br><br>

# Installation

Install from [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) with command

```bash
  npm install @riapacheco/yutes
```

Import to your main `SCSS` file\*\*

```scss
@import "~@riapacheco/yutes/main.scss";
@import "~@riapacheco/yutes/breakpoints.scss";
```

<small>

\*\*The `breakpoints.scss` import is optional. See the [breakpoints](#breakpoints) section for more details.
</small>

<br><br><br><br>

# Usage

- [Padding](#padding)
- [Headings](#headings)
- [Margins](#margins)
- [Horizontal Centering **(New!)**](#horizontal-centering-new)
- [Flexbox](#flexbox)
- [Breakpoints **(New!)**](#breakpoints)
- [Colors](#colors)
- [Buttons](#buttons)
- [Forms](#forms)
- [Resets](#resets)

<br><br><br><br>

<!-- --------------------------- Padding | START --------------------------- -->

# Padding

Add padding to an element with shorthand classes that specify padding with a `p` followed by direction and size.

##### SYNTAX

```html
<div class="p{direction}-{size}"></div>
```

##### EXAMPLE

```html
<!-- Adds `padding-top: 8rem;` to this element -->
<div class="pt-8"></div>
```

##### COMPILES TO

```scss
div {
  // padding-{direction}: {size};
  padding-top: 8rem;
}
```

##### VALUES

Padding `size` is any number between the range of `1` through `30`. These represent multiples of your app's baseline font-size (`rem`) which enables better responsivity.

Set `direction` with one of the following properties:
| Property | Compiled value |
|:-:|:-:|
| `t` | top |
| `b` | bottom |
| `l` | left |
| `r` | right |

<div class="space-sm"></div>

##### CONFIG FILE

<code>@import '~@riapacheco/yutes/helper_files/\_utilities.scss';</code>

<div class="space-sm"></div>

<!-- ---------------------------- Padding | END ---------------------------- -->

<div class="space-sm"></div>

<br><br><br><br>

<small>[_↑ Back to List_](#usage)</small>&nbsp;&nbsp;&nbsp;
<small>[_↓ Skip to: Margins_](#margins)</small>

<!-- -------------------------- Headings | START --------------------------- -->

# Headings

##### SYNTAX

The `headings.scss` file contains variables for styling each heading from `h1` through `h6`. Each heading has a variable that represents it's `font-size`, `line-height`, `letter-spacing`, `font-weight`, and `transform` properties. They're written like this:

```scss
${heading#}-size: 2rem;
${heading#}-height: 2rem;
${heading#}-spacing: -0.05rem;
${heading#}-weight: 700;
${heading#}-transform: uppercase;
```

##### EXAMPLE

```scss
$h1-size: 2rem !default;
$h1-height: 2rem !default;
$h1-spacing: -0.1rem !default;
$h1-weight: 700 !default;
$h1-transform: none !default;
```

##### TO OVERRIDE

To override these `!default` styles, simply assign a new value to the variable immediately followed by an import of that stylesheet like this:

```scss
$h1-size: 3rem;
@import "~@riapacheco/yutes/headings.scss";
```

<!-- --------------------------- Headings | END ---------------------------- -->
<div class="space-sm"></div>

<br><br><br><br>

<small>[_↑ Back to List_](#usage)</small>&nbsp;&nbsp;&nbsp;
<small>[_↓ Skip to: Horizontal Centering_](#horizontal-centering-new)</small>

<!-- --------------------------- Margin | START ---------------------------- -->

# Margins

Add margin values to an element with shorthand classes that specify margin with a `m` followed by direction and size.
<br><br>

##### SYNTAX

```html
<div class="m{direction}-{size}"></div>
```

##### EXAMPLE

```html
<!-- Adds `margin-right: 2rem;` to this element -->
<div class="mr-2"></div>
```

##### COMPILES TO

```scss
div {
  // margin-{direction}: {size};
  margin-right: 2rem;
}
```

##### VALUES

Padding `size` is any number between the range of `1` through `30`. These represent multiples of your app's baseline font-size (`rem`) which enables better responsivity.

Set `direction` with one of the following properties:
| Property | Compiled value |
|:-:|:-:|
| `t` | top |
| `b` | bottom |
| `l` | left |
| `r` | right |

<div class="space-sm"></div>

##### CONFIG FILE

<code>@import '~@riapacheco/yutes/helper_files/\_utilities.scss';</code>

<div class="space-sm"></div>

<!-- ---------------------------- Margin | END ----------------------------- -->

<div class="space-sm"></div>

<br><br><br><br>

<small>[_↑ Back to List_](#usage)</small>&nbsp;&nbsp;&nbsp;
<small>[_↓ Skip to: Flexbox_](#flexbox)</small>

<!-- -------------------- Horizontal Centering | START --------------------- -->

# Horizontal Centering (New)

Assign a width to an element (e.g. wrappers) that centers horizontally with a shorthand class that adds `mx-auto-` followed by the width `size` in pixels.

##### SYNTAX

```html
<div class="mx-auto-{size}px"></div>
```

##### EXAMPLE

```html
<div class="mx-auto-650px">This is a good width for tablets</div>
```

##### COMPILES TO

```scss
div {
  // width: {size};
  width: 650px;
  margin: auto;
}
```

##### VALUES

Supports width between `1` and `3000` pixels.

<div class="space-sm"></div>

##### CONFIG FILE

<code>@import '~@riapacheco/yutes/helper_files/\_utilities.scss';</code>

<div class="space-sm"></div>

<!-- --------------------- Horizontal Centering | END ---------------------- -->

<div class="space-sm"></div>

<br><br><br><br>

<small>[_↑ Back to List_](#usage)</small>&nbsp;&nbsp;&nbsp;
<small>[_↓ Skip to: Breakpoints_](#breakpoints)</small>

<!-- --------------------------- Flexbox | START --------------------------- -->

# Flexbox

Apply flexbox styles to elements with shorthand classes that specify direction, wrapping, item alignment, and contents justification. For refresher on flexbox, visit [this link](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

##### SYNTAX

Add 3 - 4 classes to an element

```html
<div class="{direction} {nowrap*} {align} {justify}">
  <div class="element-1"></div>
  <div class="element-2"></div>
</div>
```

<small>\* By default, the element has `flex-wrap: wrap` value and requires a `nowrap` class to override</small>

##### EXAMPLE

Two buttons should push to opposite directions within a container modal:

```html
<div class="flex-row nowrap align-end justify-between">
  <a class="cancel-btn"> Cancel </a>

  <a class="save-btn"> Save Changes </a>
</div>

<!-- The above specifies: 
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-end;
  justify-content: space-between;
-->
```

Result <br>
![Buttons justify-between](https://ik.imagekit.io/fuc9k9ckt2b/yutes_README/tr:q-100,w-600/justify-between_sELzDFTQf.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655500435763)

<div class="space"></div>

Two buttons should push to the right:

```html
<div class="flex-row nowrap align-end justify-end">
  <a class="cancel-btn"> Cancel </a>

  <a class="save-btn"> Save Changes </a>
</div>

<!-- The above specifies: 
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-end;
  justify-content: flex-end; 
-->
```

Result: <br>
![Buttons flex-end](https://ik.imagekit.io/fuc9k9ckt2b/yutes_README/tr:q-100,w-600/flex-end_IH68y_3fs.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655500435765)

<!-- ---------------------------- Flexbox | END ---------------------------- -->

<div class="space-sm"></div>

<br><br><br><br>

<small>[_↑ Back to List_](#usage)</small>&nbsp;&nbsp;&nbsp;
<small>[_↓ Skip to: Colors_](#colors)</small>

<!-- ------------------------- Breakpoints | START ------------------------- -->

# Breakpoints

Add styles to existing classes that only apply when specific `size` is specified.

##### IMPORT FIRST

Since this is a special `mixin`, you'll have to import the `breakpoints.scss` file to the desired stylesheet.

```scss
// Top of your stylesheet
@import "~@riapacheco/yutes/breakpoints.scss";
```

##### SYNTAX

```scss
.your-class {
  @include if-viewport({size}) {
    // do something
  }
}
```

##### EXAMPLE

Let's say we have a div that contains two anchors (acting as buttons) like this:

```html
<div class="btn-group">
  <a>Cancel</a>
  <a>Save Changes<a>
</div>
```

<div class="space-sm"></div>

On bigger screens the buttons are side-by-side, but on smaller screens we want to **stack** them and have each button fill the **full width** of the viewport.

```scss
@import "~@riapacheco/yutes/breakpoints.scss";

.btn-group {
  display: flex;
  flex-direction: row; // keeps the buttons side-by-side

  @include if-viewport(small) {
    // Stacks the elements
    flex-direction: column;
    // Accesses the nested anchors and applies a 100% width
    a {
      width: 100%;
    }
  }
}
```

##### VALUES

|   Arg    | Breakpoint value                     |
| :------: | :----------------------------------- |
| `small`  | Area is within `375px`               |
| `medium` | Area is between `376px` and `1200px` |

##### OVERRIDE BREAKPOINTS

To override the breakpoint values with your own, simply assign new values to the breakpoint variables (`$mobile` and `$desktop`) followed immediately by an import of the `breakpoints.scss` file:

```scss
$mobile: 400px;
@import "~@riapacheco/yutes/breakpoints.scss";
```

<!-- -------------------------- Breakpoints | END -------------------------- -->

<div class="space-sm"></div>

<br><br><br><br>

<small>[_↑ Back to List_](#usage)</small>&nbsp;&nbsp;&nbsp;
<small>[_↓ Skip to: Buttons_](#buttons)</small>

<!-- --------------------------- Colors | START ---------------------------- -->

# Colors

Access colors from the `colors.scss` file to change the variables below:

##### OVERRIDE COLORS

To override any of the below variables: assign the variable with a new value followed by an immediate import of the `colors.scss` stylesheet like so:

```scss
$primary-color: #999898;
@import "~@riapacheco/yutes/colors.scss";
```

##### COLOR VARIABLES ⤵️

#### Primary, Secondary, and Accent

```scss
$primary-color: #ff5630;
$primary-light-color: #ff8f73;
$primary-medium-color: #ff7452;
$primary-dark-color: #de350b;

$secondary-color: #ff991f;
$secondary-light-color: #ffa333;
$secondary-medium-color: #ec870c;
$secondary-dark-color: #d67b0c;

$accent-color: #999898;
$accent-light-color: #e9e9e9;
$accent-medium-color: #727272;
$accent-dark-color: #414141;
$accent-darkest-color: #262626;
```

#### State Colors

```scss
$success: #2ecc71;
$success-light: #7be9a9;
$success-dark: #156f3b;

$warning: #ffcd28;
$warning-light: #fce69d;
$warning-dark: #ac8b1c;

$danger: #ff554c;
$danger-light: #ffb3af;
$danger-dark: #a2322c;
```

#### Input Field Color

```scss
$form-input-field-bg: #e8e8e8;
```

#### As Color Classes

```scss
.primary-color {
  color: $primary-color;
  &.light { color: $primary-light-color }
  &.medium { color: $primary-medium-color }
  &.dark { color: $primary-dark-color }
}
.primary-bg {
  background-color: $primary-color;
  &.light { background-color: $primary-light-color };
  &.medium { background-color: $primary-medium-color }
  &.dark { background-color: $primary-dark-color }
}

.secondary-color {
  color: $secondary-color;
  &.light { color: $secondary-light-color }
  &.medium { color: $secondary-medium-color }
  &.dark { color: $secondary-dark-color }
}
.secondary-bg {
  background-color: $secondary-color;
  &.light { background-color: $secondary-light-color }
  &.medium { background-color: $secondary-medium-color }
  &
```

<!-- ---------------------------- Colors | END ----------------------------- -->

<div class="space-sm"></div>

<br><br><br><br>

<small>[_↑ Back to List_](#usage)</small>&nbsp;&nbsp;&nbsp;
<small>[_↓ Skip to: Forms_](#forms)</small>

<!-- --------------------------- Buttons | START --------------------------- -->

# Buttons

Immediately add responsive padding and color to `<button>` and `<a>` elements with shorthand classes that chain additional styles to the element.

##### SYNTAX

```html
<a class="{initializer class} {background color} {additional styles}">
  Click me
  <a></a
></a>
```

##### EXAMPLE

```html
<a class="btn primary rounded raised"> Click me </a>
```

<div class="space-sm"></div>

Result: <br>
![Rounded Raised Button](https://ik.imagekit.io/fuc9k9ckt2b/yutes_README/tr:q-100/raised-rounded_1__rSTWAjIBr.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655502002113)

<div class="space-sm"></div>

##### VALUES

Initializer class will always be `btn`

|    Class    | Value                                                     |
| :---------: | :-------------------------------------------------------- |
|    `btn`    | Required initializer class                                |
|  `primary`  | Changes `background-color` to `$primary-color`            |
| `secondary` | Changes `background-color` to `$secondary-color`          |
|  `rounded`  | Changes `border-radius` to `$base-border-radius`\*        |
|  `raised`   | Changes `box-shadow` to `4px 6px 12px rgba(0, 0, 0, 0.4)` |

<small>\* Value can be changed within the file</small>

<!-- ---------------------------- Buttons | END ---------------------------- -->

<div class="space-sm"></div>

<br><br><br><br>

<small>[_↑ Back to List_](#usage)</small>&nbsp;&nbsp;&nbsp;
<small>[_↓ Skip to: Resets_](#resets)</small>

<!-- ---------------------------- Forms | START ---------------------------- -->

# Forms

Stack labels on top of inputs with simple `input` background colors by using the `form-group` class on each group that contains a `<label>` and `<input>` element.

##### SYNTAX

```html
<div class="form-group">
  <label>First Name</label>
  <input type="text" name="firstName" />
</div>
```

##### EXAMPLE

```html
<div class="form-group">
  <label>First Name</label>
  <input type="text" name="firstName" />
</div>

<div class="form-group">
  <label>Last Name</label>
  <input type="text" name="lastName" />
</div>
```

Result: <br>
![Example Form Group](https://ik.imagekit.io/fuc9k9ckt2b/yutes_README/tr:q-100,w-700/register_o4EqihR97.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655503032055)

##### OVERRIDE INPUT COLOR

To override input color: assign a new value to the variable `$form-input-field-bg` immediately followed by an import of the `colors.scss` stylesheet:

```scss
$form-input-field-bg: #ffffff;
@import "~@riapacheco/yutes/colors.scss";
```

<!-- ----------------------------- Forms | END ----------------------------- -->
<div class="space-sm"></div>

<div class="space dotted"></div>

<div style="
  width: 100%;
  display: flex;
  flex-flow: row-reverse nowrap;
  align-items: flex-start;
  justify-content: space-between;">
  <div>
  
  <small>[_↑ Back to List_](#usage)</small>
  </div>

  <!-- <small>[_↓ Next item_](#forms)</small> -->
</div>

<!-- --------------------------- Resets | START ---------------------------- -->

# Resets

The `resets` stylesheet was created to override default webkit / browser styles. It applies the following:

- All elements' `box-sizing` properties are set to `border-box`
- All elements have `antialiased` applied to them for smoother appearance
- All default `focus` styles (light blue outlines, etc) have been removed
- All items have been reset to have `height: 100%` and `width: 100%` for uniformity
- All `img` elements have `width: 100%;` and height `auto` for more predictable sizing
- All default `button` appearances have been stripped
- All default `button` and `anchor`s' `focus` styles have been unset
- All default `input` styles have been unset
- The `small` element has been stripped of margin and padding
- All default `select`, `textarea`, and `nav` elements have been unset

Note: You can apply `list-unstyled` class to any `ul` or `ol` elements you wish to have styling removed from

<br><br><br><br>

<small>[_↑ Back to List_](#usage)</small>

<br><br><br><br>

# Config and Override Variables
You can override any variables found in this package. To do so, simply assign a new value to the variable (that's consistent to the property type it was created for) and immediately follow this with an import of the stylesheet it's stored in.

##### Example
```scss
$primary-color: #123456;
$secondary-color: #654321;
@import '~@riapacheco/yutes/colors.scss';
```

## Variables List
* For list of all `$color` variables, see the [colors](#colors) section
* For list of all `$headings` variables, see [headings](#headings) section
* Note: I'll clean all this up eventually.

| Var | Type | Description | Import after Re-Assignment |
| :-: | :-: | :- | :- |
| `$mobile` | `px` | The mobile breakpoint if using [breakpoint mixins](#breakpoints) [default: `375px`] | `@import '~@riapacheco/yutes/breakpoints.scss` |
| `$desktop` | `px` | The desktop breakpoint if using [breakpoint mixins](#breakpoints) [default: `1200px`] | `@import '~@riapacheco/yutes/breakpoints.scss` |
| `$base-font-size` | `number` | **Base font size** used in all body text, representing the first multiple of `rem` | `@import '~@riapacheco/yutes/helper_files/_resets.scss';` |
| `$base-font-family` | `string` | The **base font family for all text** (default: `"Inter", sans-serif;`) | `@import '~@riapacheco/yutes/helper_files/_resets.scss';` |
| `$input-field-border-radius` | `rem` | The border radius used for all **form inputs** (if used) [Default: `0.2rem`] | `@import '~@riapacheco/yutes/helper_files/_forms.scss';` |
| `$base-size` | `px` | This is a base size used to calculate **input padding** (`$base-size / 1.3`), `input` / `select` element font size, and `select` height. | `@import '~@riapacheco/yutes/helper_files/_forms.scss';` |
| `$label-font-size` | `rem` | The font size of **input labels** | `@import '~@riapacheco/yutes/helper_files/_forms.scss';` |
| `$label-padding-left` | `rem` | Padding added to the left of **input labels** | `@import '~@riapacheco/yutes/helper_files/_forms.scss';` |
| `$label-padding-bottom` | `rem` | Padding added to the bottom of **input labels** | `@import '~@riapacheco/yutes/helper_files/_forms.scss';` |
| `$base-border-radius` | `rem` | The border radius of all **buttons** (if used) | `@import '~@riapacheco/yutes/helper_files/_buttons.scss;` |
| `$base-font-size` | `rem` | The base **font size of all buttons** (if used) | `@import '~@riapacheco/yutes/helper_files/_buttons.scss;` |
| `$rounded-border-radius` | `rem` | The border radius of **all _rounded_ buttons** (if used) | `@import '~@riapacheco/yutes/helper_files/_buttons.scss;` |
| `$button-padding-tb-lr` | `rem` (chained) | Padding applied to all buttons expressed with two `rem` values, whereby the first value represents the `top` and `bottom` padding; and the second value represents the `left` and `right` value | `@import '~@riapacheco/yutes/helper_files/_buttons.scss;`

