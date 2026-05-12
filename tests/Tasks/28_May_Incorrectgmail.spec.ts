import { test, expect } from '@playwright/test';

test('Verify error message for incorrect Gmail ID on VWO free trial page', async ({ page }) => {
  // Step 1: Navigate to the VWO free trial page
  // This opens the browser and loads the specified URL where the free trial signup form is located.
  await page.goto('https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage');

  // Step 2: Enter an incorrect Gmail ID in the Business Email field
  // We fill the email input field with an invalid email format (missing @ symbol) to simulate an incorrect Gmail ID.
  // The locator targets the specific email input field by its ID.
    await page.getByRole('textbox', { name: 'Business Email' }).click();
    await page.getByRole('textbox', { name: 'Business Email' }).fill('testgmail');
    // We also check the privacy agreement checkbox and click the button to submit the form, which should trigger the validation for the email field.
    await page.getByRole('checkbox', { name: 'I agree to VWO\'s Privacy' }).check();
    await page.getByRole('button', { name: 'Create a Free Trial Account' }).click();
  // Step 3: Verify the error message is displayed
 // After entering the incorrect email, we check for the presence of an error message that indicates the email format is invalid.  
    await expect(page.locator('#page-free-trial-signup-form-step1 > div > div')).toContainText('The email address you entered is incorrect.');
});
  