import { test, chromium } from "@playwright/test";

test('Multiple Tabs Test', async () => {
    let browser = await chromium.launch({ headless: false });
    let context = await browser.newContext();

    // Tab1
    let page1 = await context.newPage();
    await page1.goto("https://app.vwo.com/#login");
    console.log("Tab1: Login page");

    // Tab2
    let page2 = await context.newPage();
    await page2.goto("https://app.vwo.com/#dashboard");
    console.log("Tab2: Dashboard");

    await browser.close();
});
     
