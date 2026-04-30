import { test, expect } from '@playwright/test';
test('Simple Go To Commands-by defaults to load', async ({ page }) => {
    //no waitUntil specified, defaults to load-
    await page.goto("https://example.com");

    let title = await page.title();
    console.log("Title: ",  title);
    await expect(page).toHaveURL("https://example.com/");
    console.log("URL Verified");
});
    //Go to another page with waitUntil specified as networkidle