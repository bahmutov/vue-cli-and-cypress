# vue-cli-and-cypress

> A Vue project by vue-cli from `webpack-simple` template with Cypress tests

and [Cypress.io](https://www.cypress.io/) unit and e2e tests!

- [cypress/integration/app-spec.js](cypress/integration/app-spec.js) example component unit test
- [cypress/integration/e2e-spec.js](cypress/integration/e2e-spec.js) example end-to-end test (requires running dev server)

Implemented using [cypress-vue-unit-test](https://github.com/bahmutov/cypress-vue-unit-test)

## Test commands

```bash
# start dev server
npm run dev
# run Cypress without GUI
npm test
# open Cypress GUI for TDD
npm run cy:open
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
