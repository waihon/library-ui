# library-ui

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd library-ui`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint`
* `npm run lint:fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## Terminal Commands

### 2. Creating an Ember Project

* `ember new library-ui`
* `cd library-ui`
* `ember install embercasts-library-styles`
* `emebr serve`
* `ember g ember-cli-sass`

### 5. Ember Handlebars Templates

* `ember generate route index`

### 6. Ember Route Basics

* `ember g route author`

### 9. Presentation Components

* `ember g component author-list-item -gc`

### 10. Ember Data Find All

* `ember g model author first last`
* `ember g adapter application`

### 11. Route Paths

* `ember g route author/detail`

### 16. Actions Three Ways

* `ember g controller author/detail`

### 18. Inputs

* `ember g route author/create`
* `ember g controller author/create`

### 21. Edit Author Template

* `ember g route author/edit`
* `ember g controller author/edit`

### 22. Author Edit Form

* `ember g component author-form -gc`

### 24. Route Query Params

* `ember g controller author`

### 24. Testing

* `ember install ember-cli-mirage`
* `ember install ember-test-selectors`
* `ember g mirage-model author`
* `ember g acceptance-test authors`

### 26. Ember Power Select

* `ember install ember-power-select`
* `ember g route book`
* `ember g route book/create`
* `ember g controller book/create`

### 28. Ember Save Related

* `ember g model book title isbn publishDate`

### 29. Ember CRUD Resources Review

* `ember g route book/detail`
* `ember g controller book/detail`

### 30. Ember Data and Components

* `ember g component new-author-modal -gc`
