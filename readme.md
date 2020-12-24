# Yutes Website
 



![documentation](https://github.com/patkellydesigns/ria-yutes/workflows/documentation/badge.svg?branch=documentation)

This branch is where our website lives. Simply pushing or pulling this repo will trigger a **GitHub Action**

This [documentation.yml](.github/workflows/documentation.yml) file gives instructions on how to i.e

  - Run Tests
  - Check Code for errors
  - Enforce a style guide
  - Build the production app
  - Deploy to hosting

In this cse we're using [GitHub Pages](https://pages.github.com/)

There are many static hosting providers to chose from and most will have a free option. 


This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.


### Installation

- We use yarn here so if you don't have it you can install the  [Yarn Package Manager](https://yarnpkg.org)

or using NPM

`
sudo npm install -g yarn
`

```
$ yarn
```

### Local Development of this site

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment


## [Yutes Website is currently being hosted here](https://patkellydesigns.github.io/ria-yutes/)
 
<button onclick="https://patkellydesigns.github.io/ria-yutes/">
Go to Yutes App
</button>

We have Continuous integration set up for this and more can be found in the wiki.


<style>
button {
    color:#f9f9f9;
    border:none;
    border-radius:12px;
    background-color:#8e67ba;
    padding:12px;
}
</style>



<!-- readme: contributors -start -->
<!-- readme: contributors -end -->