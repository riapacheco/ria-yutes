(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),s=(n(0),n(99)),i={id:"usage",title:"Usage"},r={unversionedId:"usage",id:"usage",isDocsHomePage:!1,title:"Usage",description:"Usage:",source:"@site/docs/usage.md",slug:"/usage",permalink:"/ria-yutes/docs/usage",editUrl:"https://github.com/riapacheco/ria-yutes/edit/master/documentation/docs/usage.md",version:"current",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/ria-yutes/docs/installation"},next:{title:"Features",permalink:"/ria-yutes/docs/features"}},c=[{value:"Usage:",id:"usage",children:[{value:"Margins &amp; Padding Syntax",id:"margins--padding-syntax",children:[]},{value:"Container",id:"container",children:[]},{value:"Buttons",id:"buttons",children:[]},{value:"Experiment with Theme Colors",id:"experiment-with-theme-colors",children:[]},{value:"Experiment with Breakpoints",id:"experiment-with-breakpoints",children:[]}]},{value:"Basic Schema",id:"basic-schema",children:[{value:"Notes for usage",id:"notes-for-usage",children:[]}]},{value:"The <code>alt-colors.scss</code> and <code>themes.scss</code> files: Just an FYI",id:"the-alt-colorsscss-and-themesscss-files-just-an-fyi",children:[{value:"If you&#39;re curious about this:",id:"if-youre-curious-about-this",children:[]}]},{value:"Flexbox (mostly) not included",id:"flexbox-mostly-not-included",children:[]}],l={toc:c};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"usage"},"Usage:"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"This was made for me to personally get up and running faster. If you're just looking for basic utility scss, copy it from the files (I don't care). E.g. take padding and margin arguments from ",Object(s.b)("inlineCode",{parentName:"p"},"scss/_foundation/utilities.scss"))),Object(s.b)("h3",{id:"margins--padding-syntax"},"Margins & Padding Syntax"),Object(s.b)("p",null,"Add margins and padding with syntax that's similar to all bootstrap frameworks; where the first letter defines if it's a margin or padding property, the second letter defines the direction of that property, and a dash numeric value defines how many rems (1 rem = base body text size)."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<div class="pt-1 pl-1">\n  This div has a padding-top of 1rem and padding-left of 1rem.\n</div>\n')),Object(s.b)("h3",{id:"container"},"Container"),Object(s.b)("p",null,"Though I'm not messing around too much with set layout structures, the ",Object(s.b)("inlineCode",{parentName:"p"},".container")," class is always helpful, since it helps you automatically center your content with decent responsive re-sizing. You can find the class in the ",Object(s.b)("inlineCode",{parentName:"p"},"scss/_foundation/utilities.scss")," file and can change it to whatever you like:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scss"}),".container {\n  width: 65%;\n  margin: auto;\n\n  @include respond-to(tablets) {\n    width: 80%;\n  }\n  @include respond-to(smartphones) {\n    width: 95%;\n  }\n}\n")),Object(s.b)("h3",{id:"buttons"},"Buttons"),Object(s.b)("p",null,"Life is just easier with pre-created ",Object(s.b)("inlineCode",{parentName:"p"},".btn")," classes. You can find them in ",Object(s.b)("inlineCode",{parentName:"p"},"scss/_user-controls/buttons.scss"),"; and can be used like this:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'\x3c!-- Basic button (no borders just padding)--\x3e\n<button class="btn">Click!</button>\n\n\x3c!--use .btn-sm or .btn-lg for size--\x3e\n<button class="btn btn-sm">Click!</button>\n\n\x3c!--use colors (and their variations) to add background-color--\x3e\n<button class="btn btn-sm primary">Click!</button>\n\n\x3c!--or--\x3e\n<button class="btn btn-sm primary light">Click again!</button>\n')),Object(s.b)("h3",{id:"experiment-with-theme-colors"},"Experiment with Theme Colors"),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"scss/_foundation/color.scss")," file contains a simple theme of 3 different colors (with 4 shades each). Though these variables do impact more feature-focused classes like ",Object(s.b)("inlineCode",{parentName:"p"},".btn"),", the bottom of the file shows how they can be applied anywhere for quick styling (as you discover what you like):"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scss"}),".primary-color {\n  color: $primary-color;\n  &.light {\n    color: $primary-light-color;\n  }\n  &.medium {\n    color: $primary-medium-color;\n  }\n  &.dark {\n    color: $primary-dark-color;\n  }\n\n  // And background\n  &.bg {\n    color: $primary-text-color;\n    background-color: $primary-color;\n  }\n  &.light-bg {\n    color: $primary-text-color;\n    background-color: $primary-light-color;\n  }\n  &.medium-bg {\n    color: $primary-text-color;\n    background-color: $primary-medium-color;\n  }\n  &.dark-bg {\n    color: $primary-text-color;\n    background-color: $primary-dark-color;\n  }\n}\n")),Object(s.b)("p",null,"An example of using this would be"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<div class="primary-color">This div\'s TEXT will be primary</div>\n\n<div class="primary-color bg">\n  This div\'s BACKGROUND will be primary, with the color\'s text color.\n</div>\n')),Object(s.b)("h3",{id:"experiment-with-breakpoints"},"Experiment with Breakpoints"),Object(s.b)("p",null,"Add media queries to specific classes as you go:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scss"}),".some-element {\n  width: 300px;\n  margin: auto;\n\n  @include respond-to(smartphones) {\n    width: 100%;\n  }\n}\n")),Object(s.b)("p",null,"Based on your own style, change breakpoints in ",Object(s.b)("inlineCode",{parentName:"p"},"scss/_foundation/utilities.scss")," Go to ",Object(s.b)("inlineCode",{parentName:"p"},"scss/_foundation/utilities.scss")," to change the three different breakpoints:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scss"}),"$break-small: 370px;\n$break-medium: 920px;\n$break-large: 1024px;\n")),Object(s.b)("h2",{id:"basic-schema"},"Basic Schema"),Object(s.b)("p",null,"All styles are contained with the file having its associated name. i.e. All typography (including the base HTML body size) will be in ",Object(s.b)("inlineCode",{parentName:"p"},"scss/_foundation/typography.scss"),", since it's pulled as a variable into the main scss file with the sass decoration ",Object(s.b)("inlineCode",{parentName:"p"},"@import"),"."),Object(s.b)("h3",{id:"notes-for-usage"},"Notes for usage"),Object(s.b)("p",null,"If certain scss styles aren't being picked up, you can import the files directly into your local scss file. For example, if you want to import a color variable:"),Object(s.b)("code",null,"@import '~@riapacheco/yutes/_foundation/colors.scss';"),Object(s.b)("h4",{id:"recommendation-sasss-use-decorator"},"Recommendation: SASS's ",Object(s.b)("inlineCode",{parentName:"h4"},"@use")," decorator"),Object(s.b)("p",null,"Jussayin: to keep things tidy, so that you know where things come from when reading the code (or someone else is reading your code), I suggest using SASS's ",Object(s.b)("inlineCode",{parentName:"p"},"@use")," decorator over the (soon to be deprecated) ",Object(s.b)("inlineCode",{parentName:"p"},"@import"),". This is because it creates a ",Object(s.b)("strong",null,"namespace")," for easier origin tracing. E.g: ",Object(s.b)("inlineCode",{parentName:"p"},"src/components/some-component.scss"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scss"}),"@use `~@riapacheco/yutes/_foundation/colors.scss' as _color;\n\n.some-element {\n  background-color: _color.$primary-color;\n}\n")),Object(s.b)("p",null,"(just looking out)"),Object(s.b)("hr",null),Object(s.b)("h2",{id:"the-alt-colorsscss-and-themesscss-files-just-an-fyi"},"The ",Object(s.b)("inlineCode",{parentName:"h2"},"alt-colors.scss")," and ",Object(s.b)("inlineCode",{parentName:"h2"},"themes.scss")," files: Just an FYI"),Object(s.b)("p",null,"These are experimental files, where you can add custom alternative colors and apply them as a theme later with your own actual programming logic. The idea is that when a class (at the top of each component) is changed to a different boolean outcome (e.g. ",Object(s.b)("inlineCode",{parentName:"p"},"isDarkTheme = true"),"), you can add ",Object(s.b)("inlineCode",{parentName:"p"},".dark-theme")," globally to apply an alternative dark-theme style."),Object(s.b)("p",null,"Again, this was meant for the 'discover as you go' model; whereby I tend to design components one-by-one. One component might look similar to another, but might require a different interpretation of a 'dark' version."),Object(s.b)("p",null,"To change it up, the ",Object(s.b)("inlineCode",{parentName:"p"},".dark-theme")," class is found at the bottom of ",Object(s.b)("inlineCode",{parentName:"p"},"yutes.scss"),"."),Object(s.b)("h3",{id:"if-youre-curious-about-this"},"If you're curious about this:"),Object(s.b)("p",null,"Using Angular, I'm creating a light and dark version of each component as I create them. Their different versions can be turned on or off using the ",Object(s.b)("inlineCode",{parentName:"p"},"[ngClass]")," directive. Later, when the app is more complete, I pull out the directives' input properties (that decide this default state) and put them into a global service. This way, the whole app can have a dark-mode switched on all at once, but with a thoughtful design that wasn't a half-assed \"black versus white\". HTML:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"\x3c!--A component's super div--\x3e\n<div [ngClass]=\"isDarkMode ? 'dark-theme' : 'some-normal-class'\">\n  Where the component goes\n</div>\n")),Object(s.b)("p",null,"TS:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export class SomeComponent implements OnInit {\n  isDarkMode = false;\n}\n")),Object(s.b)("h2",{id:"flexbox-mostly-not-included"},"Flexbox (mostly) not included"),Object(s.b)("p",null,"Since I usually work with packages like ",Object(s.b)("inlineCode",{parentName:"p"},"@angular/flex-box")," from ",Object(s.b)("inlineCode",{parentName:"p"},"@angular/cdk"),", I did not include flex boxes that much in here."))}d.isMDXComponent=!0}}]);