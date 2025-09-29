import { defineConfig, devices } from '@playwright/test';

// Allow CI to set the target server:
//  - BASE_URL: full URL (e.g. https://staging.example.com)
//  - HEADLESS: "true" | "false" (optional, defaults true in CI)
//  - RETRIES: number (optional)
const BASE_URL = process.env.BASE_URL || 'https://bms-centos-3.leafnode.io';
const HEADLESS = process.env.HEADLESS ? process.env.HEADLESS === 'true' : true;
const RETRIES = process.env.RETRIES ? Number(process.env.RETRIES) : 1;

export default defineConfig({
   testDir: './tests',
  fullyParallel: true,
  retries: RETRIES,
  reporter: [['html', { open: 'never' }], ['list']],
  use: {
    baseURL: BASE_URL,
    headless: HEADLESS,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
   projects: [
     { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
     { name: 'firefox',  use: { ...devices['Desktop Firefox'] } },


});
