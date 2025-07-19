// cucumber.js
module.exports = {
  default: `
    --require-module ts-node/register
    --require src/hooks/index.ts
    --require src/steps/**/*.ts

    --format @cucumber/pretty-formatter
    --format json:reports/report.json

    --format ./reporter.js
    src/features
  `,
  ui: `
    --tags '@ui and not @wip'
    --require-module ts-node/register
    --require src/hooks/index.ts
    --require src/steps/**/*.ts

    --format json:reports/ui-report.json
    --format ./reporter.js
  `,
  api: `
    --tags '@api and not @wip'
    --require-module ts-node/register
    --require src/hooks/index.ts
    --require src/steps/**/*.ts

    --format json:reports/api-report.json
    --format ./reporter.js
  `,
  smoke: `
    --tags '@smoke and not @wip'
    --require-module ts-node/register
    --require src/hooks/index.ts
    --require src/steps/**/*.ts

    --format json:reports/smoke-report.json
    --format ./reporter.js
  `
};