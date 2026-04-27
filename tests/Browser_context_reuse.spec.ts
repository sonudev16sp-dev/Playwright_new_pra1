import { test, expect } from '@playwright/test';
test.describe('Shared context tests', () => {
    test.use({ 
        viewport: { width: 1920, height: 1080 },
        locale: 'en-US',
     });
     test('Test 1: ',   async ({ page }) => {
        await page.goto("https://app.vwo.com/#login");
     });
        test('Test 2: ',   async ({ page }) => {
            await page.goto("https://app.vwo.com/#login");
        });
});
