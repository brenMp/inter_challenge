# Mercado Libre iPhone Search E2E Automation (MLA)

Customized **iPhone 13** search automation on Mercado Libre **Argentina (MLA)**  
**Stack:** TypeScript + Playwright + Cucumber (Gherkin) + Chai + Allure

## Installation

```bash
npm install
cp .env.example .env
Edit .env (browser, headless, storage, etc.)

**Run options**

npm run test:ui      # Run UI tests only
npm run test:api     # Run API tests only
npm run test:all     # Run both UI and API suites
npm run test:smoke   # Run only smoke tests
npm run report       # Generate and open Allure report
