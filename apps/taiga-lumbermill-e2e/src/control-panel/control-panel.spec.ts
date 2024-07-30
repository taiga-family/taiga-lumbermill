import {expect, test} from '@playwright/test';

test('Have 5 cards', async ({page}) => {
    await page.goto('/dashboards/iot');

    const cards = page.locator('.button-card');

    await expect(cards).toHaveCount(5);
});
