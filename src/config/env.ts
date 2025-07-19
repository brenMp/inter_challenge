import * as dotenv from 'dotenv';
dotenv.config();

export const ENV = {
  baseUrl: process.env.ML_BASE_URL ?? 'https://www.mercadolibre.com.ar',
  storageVariant: process.env.ML_STORAGE_VARIANT ?? '128 GB',
  browserName: (process.env.ML_BROWSER ?? 'chromium') as 'chromium'|'firefox',
  headless: (process.env.ML_HEADLESS ?? 'true') === 'true',
  slowMo: Number(process.env.ML_SLOWMO ?? 0),
  trace: process.env.ML_TRACE ?? 'retain-on-failure'
};
