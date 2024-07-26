import {expect, test} from '@playwright/test';

test('component Availability', async ({page}) => {
    await page.goto('/');

    const title = page.getByText('Safety');

    await expect(title).toBeVisible();
});

test('Can change lighting status', async ({page}) => {
    await page.goto('/');

    const inputs = page.locator('lmb-safety').locator('input');

    const statusBefore = await inputs.first().getAttribute('appearance');

    await expect(inputs).toHaveCount(4);

    await inputs.first().check();

    const statusNow = await inputs.first().getAttribute('appearance');

    expect(statusBefore !== statusNow);
});
