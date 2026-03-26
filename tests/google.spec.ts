import {test, expect} from '@playwright/test';
test ('truy cập google', async ({page}) => {
  //step: go to homepage
  await page.goto ("https://www.google.com");
  await expect (page).toHaveTitle(/Google/);
  //step: nhập từ khóa vào ô tìm kiếm
  await page.getByRole('combobox').fill('Playwright Automation');
  await page.keyboard.press('Enter');
  //step: kiểm tra URL có chứa từ khóa
  await expect (page).toHaveURL(/Playwright/);
  await expect (page).toHaveTitle(/Playwright/);
  // huong test

  // huong test merge PR
});