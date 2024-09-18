import {expect, test} from '@playwright/test';

test('component Availability', async ({page}) => {
    await page.goto('/dashboards/iot');

    const title = page.getByText('Weather');

    await expect(title).toBeVisible();
});
