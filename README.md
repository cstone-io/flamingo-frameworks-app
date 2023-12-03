# Vitamin

[![codecov](https://codecov.io/gh/wtchnm/Vitamin/branch/main/graph/badge.svg?token=H9BBAKGYI0)](https://codecov.io/gh/wtchnm/Vitamin) ![Test workflow](https://github.com/wtchnm/Vitamin/actions/workflows/test.yml/badge.svg) ![CodeQL workflow](https://github.com/wtchnm/Vitamin/actions/workflows/codeql-analysis.yml/badge.svg) [![Total alerts](https://img.shields.io/lgtm/alerts/g/wtchnm/Vitamin.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/wtchnm/Vitamin/alerts/) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/wtchnm/Vitamin.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/wtchnm/Vitamin/context:javascript) [![Vitamin](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/etow1b&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/etow1b/runs) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/wtchnm/Vitamin/blob/main/LICENSE)

Opinionated Vite starter template.

## Scripts

- `pnpm dev` - start a development server with hot reload.
- `pnpm build` - build for production. The generated files will be on the `dist` folder.
- `pnpm preview` - locally preview the production build.
- `pnpm test` - run unit and integration tests related to changed files based on git.
- `pnpm test:ci` - run all unit and integration tests in CI mode.
- `pnpm test:e2e` - run all e2e tests with the Cypress Test Runner.
- `pnpm test:e2e:headless` - run all e2e tests headlessly.
- `pnpm format` - format all files with Prettier.
- `pnpm lint` - runs TypeScript, ESLint and Stylelint.
- `pnpm validate` - runs `lint`, `test:ci` and `test:e2e:ci`.
