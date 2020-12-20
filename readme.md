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
<code>
  npm install @riapacheco/yutes
</code>

<br><br>
In your apps json file, (e.g. `angular.json` for angular apps), add the file path to the styles object. <br>
`"projects" > "your-project" > "architect" > "build" > "options" > "styles" > "node_modules/@riapacheco/yutes/yutes.scss"`


<br>
<br>
<br>

## Usage:

> Note: Again, this was made for me to personally get up and running faster.<br> If you're just looking for some scss code to get you started, you can take them from the files. <br> E.g. take padding and margin arguments from `scss/_foundation/utilities.scss`

### Margins & Padding
Add margins through classes (like all bootstrap) with 'mb-1' [meaning margin-bottom: 1 rem] or 'pl-2' [meaning paddling-left: 2rem]; and so on.

### Containers
Put contents in containers [`.container`] for added automatic margins to the left and right of content

### Experiment with Theme Colors
Go to `scss/_foundation/colors.scss` to play with a simple theme of primary, secondary, and accent colors. 

### Experiement with Breakpoints
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
If a certain scss file's styles aren't showing, you can `@import` or `@use` the file at the top of the scss file you're trying to bring it into.<br><br>
Again, I made this so that I could personally get up and running fast; and my thought is that even if I still need to import paths, predictable file paths from the node_modules folder is a lot easier with the complexity of the component system.
<br><br> This wasn't meant for public use... but why not!

<br><br><br>


## Flexbox Not included
Since I usually work with packages like `@angular/flex-box` from `@angular/cdk`, I did not include flex boxes that much in here. 