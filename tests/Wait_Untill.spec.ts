import { test, expect } from '@playwright/test';
test('Different wait times', async ({ page }) => {

    await page.goto('https://app.vwo.com/#login', { waitUntil: 'commit' });
    console.log("commit: Server responded event");

    // Wait for HTML  to be passed
    await page.goto('https://app.vwo.com/#login', { waitUntil: 'domcontentloaded' });
    console.log("domcontentloaded: HTML parsed and DOM tree built");

    //wait dor default load- CSS,img,script
    await page.goto('https://app.vwo.com/#login', { waitUntil: "load" });
    console.log("load: All resources finished loading");

    //Slowest one-wait for network idle- no network connections for at least 500 ms
    await page.goto('https://app.vwo.com/#login', { waitUntil: "networkidle" });
    console.log("networkidle: No network connections for at least 500 ms");
});

