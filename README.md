# DemoQA – Cypress QA Automation Challenge

This repository contains automated end-to-end tests for the DemoQA application using Cypress and JavaScript.

## Prerequisites

Node.js (LTS recommended)

npm

## Setup

### Install project dependencies:

```bash
npm install
```
### Test Execution
Run tests in interactive mode
```bash
npx cypress open
```
### Run all tests in headless mode
```bash
npx cypress run
```
### Run a single spec
```bash
npx cypress run --spec "cypress/e2e/practiceForm.cy.js"
```

## Test Results

After executing the tests, results are captured using Mochawesome, generating an HTML report under:

`cypress/reports/`

## Notes

Tests are written following Cypress best practices.

Reporting is handled via Mochawesome.

Generated artifacts (reports, screenshots, videos) are excluded from version control.
