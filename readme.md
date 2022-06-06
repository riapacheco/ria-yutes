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
![Padding and Margin](https://ik.imagekit.io/fuc9k9ckt2b/yutes_README/utilities_yutes_Z2nJPrMxi.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654488698871)

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

![Example of Flexbox Classes](https://ik.imagekit.io/fuc9k9ckt2b/yutes_README/carbon_flexbox_0i-zF_D84.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654489041732)

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
> <small> Note: some of the below images did not render correctly resulting in some spaces missing between element selectors and the class, disregard and assume typical application of directive (element) behavior :)  </small>

## utilities
In the template ⤵️
![Utilities.scss in HTML](https://ik.imagekit.io/fuc9k9ckt2b/yutes_README/utilitiesHtml_boKxlhxZu.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654488880634)

## colors
Change colors ⤵️
![Colors file](https://ik.imagekit.io/fuc9k9ckt2b/yutes_README/colorsStateFile_cePCLrHd8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654489086879)
Use classes in your template ⤵️
![Color Classes](https://ik.imagekit.io/fuc9k9ckt2b/yutes_README/colorClasses_DUKwrD7mO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654489120721)

## forms
In the template ⤵️
![form in template](https://ik.imagekit.io/fuc9k9ckt2b/yutes_README/formGroup_guygngTEE.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654489168336)

## buttons
Configurable in the `buttons.scss` file ⤵️
![button config section](https://ik.imagekit.io/fuc9k9ckt2b/yutes_README/buttonConfigs_an7kAt1uz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654489297185)
Usage in the `html` template ⤵️
![button usage in templates](https://ik.imagekit.io/fuc9k9ckt2b/yutes_README/buttonHtml_zJGQx5-p7.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654489328307)



---

<small> Remember... it's just a bunch of SCSS files. You always have the option of going into the `node_modules/@riapacheco` file to make all the changes you need!
</small>
