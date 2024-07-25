import {expect, test} from '@playwright/test';

test('Сomponent Availability', async ({page}) => {
    await page.goto('/');

    const title = page.getByText('Utility costs');

    await expect(title).toBeVisible();
});

test('Have bar chart', async ({page}) => {
    await page.goto('/');

    const chart = page.locator('tui-bar-chart');

    await expect(chart).toHaveCount(1);
});
