import {expect, test} from '@playwright/test';

test('Сomponent Availability', async ({page}) => {
    await page.goto('/');

    const title = page.getByText('Weather');

    await expect(title).toBeVisible();
});

test('Component got the data from the api', async ({page}) => {
    await page.goto('/');

    const city = page.locator('lmb-weather').locator('.tui-text_body-m');

    expect(city !== null && city !== undefined && (await city.innerText()).length > 0);
});
