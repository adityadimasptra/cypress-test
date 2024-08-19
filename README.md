
# Introduction
Hello, my name is Aditya Dimas Saputra and i'am a candidate for QA Engineer in Paper.id. please feel free to review my test automation
# Cypress Project

This repository contains end-to-end tests for [Your Application Name] using Cypress. Cypress is a powerful testing framework that provides fast, reliable testing for anything that runs in a browser.

## Table of Contents

- [Installation](#installation)
- [Running Tests](#running-tests)
- [Writing Tests](#writing-tests)

## Installation

1. Clone the repository:

    ```bash
    https://github.com/adityadimasptra/cypress-test.git
    ```

2. Go to repo name:
    ```bash 
    cd cypress-test
    ```
3. Install the dependencies:

    ```bash
    npm install
    ```

## Running Tests

To run the Cypress tests, use the following command:

```bash
npm run test
```

To run the Cypress tests with GUI, use the following command:

```bash
npm run test:open
```

### Writing Tests
Tests are located in the cypress/integration directory. Each test file should have a .cy.js extension.

A basic test example:
```javascript
describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
  })
})
```