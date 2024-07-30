import {expect, test} from '@playwright/test';

test('component Availability', async ({page}) => {
    await page.goto('/dashboards/iot');

    const title = page.getByText('Cleaning schedule');

    await expect(title).toBeVisible();
});

test('Have 1 cleaning date', async ({page}) => {
    await page.goto('/dashboards/iot');

    const inputs = page.locator('tui-input-date');

    await expect(inputs).toHaveCount(1);
});

test('Can add new cleaning date', async ({page}) => {
    await page.goto('/dashboards/iot');

    const inputs = page.locator('tui-input-date');

    await expect(inputs).toHaveCount(1);

    const button = page.locator('.add-button').first();

    button.click();

    await expect(inputs).toHaveCount(2);
});
