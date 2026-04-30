import {test, expect} from '@playwright/test';
//input type="email" 
// class="text-input W(100%)" 
// name="username" vwo-html-translate-attr="placeholder" vwo-html-translate-placeholder="login:enterEmailID" 
// id="login-username" 
// data-qa="hocewoqisi" 
// placeholder="Enter email ID"
test('Locators are lazy, strict and autowait', async ({ page }) => {
    await page.goto("https://vwo.com/login/");
    //Lazy loading
    let username = page.locator("#login-username");
    let password = page.locator("#login-password");
    let submit = page.locator("#js-login-btn");
    await username.fill("Admin");
    await password.fill("Admin123");
    await submit.click();
    console.log("all locator completed");
    let error = page.locator('#js-notification-box-msg');
    await expect(error).toContainText("Your email, password, IP address or location did not match");
});