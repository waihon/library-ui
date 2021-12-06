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

### 24. Testing Authors

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

### 31. Ember Reusable Form Components

* `ember g route book/edit`
* `ember g controller book/edit`
* `ember g component book-form -gc`

### 33. Ember Nested Routes and Model For

* `ember g route author/detail/new-book`
* `ember g controller author/detail/new-book`

### 33. Testing Books

* `ember g mirage-model book`
* `ember g acceptance-test books`

### 35. Ember Reviews Nested Resource

* `ember g model review`
* `ember g route book/detail/index`
* `ember g route book/detail/new-review`
* `ember g controller book/detail/new-review`
* `ember g component review-form -gc`
* ` ember t -s -m="Unit | Helper | pluralize"` (for testing a group of tests that are specified in `module()` in QUnit)
* `ember t -s -f="pluralize"` (for testing a group of tests with modules or test descriptions matching a phrase)
* `ember g helper-test pluralize`

### 35. Ember Mirage for Development

* `npm install faker`
* `ember g mirage-model review`

### 36. Data Formatting with Ember Moment

* `ember install ember-moment`

### 37. Ember Liquid Fire Basics

* `ember install liquid-fire`
* `ember feature:enable jquery-integration`
* `ember install @ember/jquery`

### 43. Ember Data Handling Validation Errors

* `npm update embercasts-library-styles`
* `ember g route register`
* `ember g controller register`
* `ember g component register-form`
* `ember g model user email username password passwordConfirmation`
* `ember g component-class register-form`
