# Yutes [utilities]



#### Skip Ahead
- [Purpose](#purpose)
- [TLDR version](#tldr)
- [Installation](#installation)
- [Included Files](#included-files)
- [Config and Usage Examples](#config-and-usage-examples)
  - [utilities](#utilities)
  - [colors](#colors)
  - [forms](#forms)
  - [buttons](#buttons)

---


# Purpose
The `@riapacheco/yutes` package is a (_really really_) lightweight (and agnostic) `SCSS` pack intended to provide **utilities** similar to those found in common frameworks like `Bootstrap`, but without the rigidness that limits fluid design. 

These utilities are made possible by `Sass` features like `@each` & `@for`, and through intentional design of classes, like the time-intensive [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) classes.
![Padding and Margin](/media/carbon_utilities.svg)

# TLDR
This package expedites your workflow with:
* Ready-made utility classes (e.g. `mr-2` for `margin-right: 2rem;`)
* Complete **Browser / Webkit** default style <u>overrides</u>, including: 
  * Blue outlines on inputs
  * Weird text sizing; and
  * General element `width`/`height` behaviors that prohibit consistency
* Freedom to start with bare-bones utilities first, to enable _structure_, before allowing you to evolve personality-driven styles through (optional):
	* 3-color schemes (`/yutes/colors.scss`)
	* Button adjustments for`border-radius` and responsive sizing

![Example of Flexbox Classes](/media/flexbox_carbon.svg)

---


# Installation


To install from NPM
```bash
$ npm install @riapacheco/yutes
```
In your main SCSS file, add:
```scss
  @import '~@riapacheco/yutes/yutes.scss';
  @import '~@riapacheco/yutes/colors.scss';
```

---

# Included Files

| File | Features | Usage Example Links |
|:--------:| :-------------| :---- |
| yutes.scss | 👉  Imports for all helper stylesheets <br> 👉  **Overrides for all browser/webkit default styles from browser:** Unsets `button`, unsets `input`, fixes `img` weird sizing, removes `scrollbar`, removes **active** styles for anchors [`a`], removes padding/margin on `<small>` elements, removes styles on `select` and `textarea`, removes margin/padding from `<nav>` element | <small>none</small> |
| utilities.scss | 👉  Dynamic `padding` and `margin` classes <br> 👉  Optional containers: (e.g. `.container-sm`, `.container`) for centered narrow content <br> 👉  Flexbox classes for in-template structuring | [utilities](#utilities) |
| colors.scss | 👉  Three color scheme with various shades <br> 👉  State colors including `$success`, `$warning`, `$danger`, and `$info` (with 3 shades each) <br> 👉  Straight color classes of all, allowing you to change colors and background colors in the HTML template <br> 👉 Note: includes `$form-input-field-bg` for `forms.scss` file | [colors](#colors) |
|forms.scss | 👉  Enables `form-group` elements to contain stacked groups of labels and inputs or controls <br> 👉 Adjusts `select` element to match rest of styling and dynamically change with `rem` calculations | [forms](#forms) |
|buttons.scss | 👉  Configurable vars (`$base-border-radius`, `$base-font-size`, and `$rounded-border-radius` <br> 👉  pseudo selectors that enable `hover` effects of brightening or darkening (for flexibility) <br> 👉  Bootstrap-like classes for creating buttons quickly with configuration via chained classes | [buttons](#buttons)

---

# Config and Usage Examples
## utilities
In the template ⤵️
![Utilities.scss in HTML](/media/utilitiesHtml.svg)

## colors
Change colors ⤵️
![Colors file](/media/colorsStateFile.svg)
Use classes in your template ⤵️
![Color Classes](/media/colorClasses.svg)

## forms
In the template ⤵️
![form in template](/media/formGroup.svg)

## buttons
Configurable in the `buttons.scss` file ⤵️
![button config section](/media/buttonConfigs.svg)
Usage in the `html` template ⤵️
![button usage in templates](/media/buttonHtml.svg)



---

<small> Remember... it's just a bunch of SCSS files. You always have the option of going into the `node_modules/@riapacheco` file to make all the changes you need!
</small>
