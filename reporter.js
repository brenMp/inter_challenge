// reporter.js
const path = require("path");
const { CucumberJSAllureFormatter, AllureRuntime } = require("allure-cucumberjs");

module.exports = class AllureReporter extends CucumberJSAllureFormatter {
  constructor(options) {
    super(
      options,
      new AllureRuntime({
        resultsDir: path.resolve(__dirname, "reports/allure-results")
      }),
      {
        //any extra configuration
      }
    );
  }
};
