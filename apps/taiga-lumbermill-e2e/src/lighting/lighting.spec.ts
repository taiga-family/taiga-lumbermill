import {expect, test} from '@playwright/test';

test('component Availability', async ({page}) => {
    await page.goto('/');

    const title = page.getByText('Lighting');

    await expect(title).toBeVisible();
});

test('Can change lighting status', async ({page}) => {
    await page.goto('/');

    const checked = page.locator('.checked');

    await expect(checked).toHaveCount(2);

    const checkedFirst = page.locator('.checked').first();

    checkedFirst.click();

    await expect(checked).toHaveCount(1);
});
