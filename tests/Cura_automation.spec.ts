import {test, expect} from '@playwright/test';
test('automate Cura website', async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    //click on make appointment
    let makeAppointment = page.locator("#btn-make-appointment");
    let username = page.locator("txt-username");
    let password = page.locator("#txt-password");
    let login = page.locator("#btn-login");
    await expect(makeAppointment).toBeVisible();
    await makeAppointment.click();
    //fill the login form
  
    await username.fill("John Doe");
    await password.fill("ThisIsNotAPassword");
    await login.click();
    console.log("Login completed");
    await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment");
    await expect(page.locator(".text-center")).toHaveText("Make Appointment");

});