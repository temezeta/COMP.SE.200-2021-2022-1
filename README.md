[![Coverage Status](https://coveralls.io/repos/github/temezeta/COMP.SE.200-2021-2022-1/badge.svg?branch=master)](https://coveralls.io/github/temezeta/COMP.SE.200-2021-2022-1?branch=master)
[![Build Status](https://app.travis-ci.com/temezeta/COMP.SE.200-2021-2022-1.svg?branch=master)](https://app.travis-ci.com/temezeta/COMP.SE.200-2021-2022-1)

## Prerequisites

1.  Install NodeJS and NPM
2.  Clone repository
3.  Run `npm install` in root folder

## Running tests

1.  Run `npm test`
2.  Individual test reports are generated to `mochawesome-report` folder using mochawesome
3.  Test coverage summary can be found in console

## Additional notes

- TravisCI pipeline is only run on `master` branch
- TravisCI generates coverage report to Coveralls using `npm run coverage`
- Coverage is reported relative to `all functions` in the library (might be changed in the future)

## Purpose of this repository

This is a project template for students participating in Software Testing course
at Tampere University.

The repository only contains the source code that is under testing, `package.json` skeleton
and LICENSE file.

Source code folder contains a separate license file that must **NOT** be removed under any circumstances!
Removing this license file directly violates terms and conditions of the software under testing.
Individuals who remove or modify the license file will also carry the consequences.
