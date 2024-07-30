import {expect, test} from '@playwright/test';

test('component Availability', async ({page}) => {
    await page.goto('/');

    const title = page.getByText('Climate control');

    await expect(title).toBeVisible();
});

test('Have 3 inputs', async ({page}) => {
    await page.goto('/');

    const inputs = page.locator('tui-input-number');

    await expect(inputs).toHaveCount(3);
});

test('Have right names', async ({page}) => {
    await page.goto('/');

    const inputs = page.locator('tui-input-number');

    await expect(inputs.nth(0).locator('label')).toHaveText('Room temperature С° ');
    await expect(inputs.nth(1).locator('label')).toHaveText('Water temperature ');
    await expect(inputs.nth(2).locator('label')).toHaveText('Air humidity, % ');
});

test('Numbers can increase', async ({page}) => {
    await page.goto('/');
    const inputs = page.locator('tui-input-number');
    const button = inputs.nth(0).locator('button').first();

    await expect(inputs.nth(0).locator('input')).toHaveValue('32');

    button.click();

    await expect(inputs.nth(0).locator('input')).toHaveValue('33');
});

test('Numbers can decrease', async ({page}) => {
    await page.goto('/');
    const inputs = page.locator('tui-input-number');
    const button = inputs.nth(0).locator('button').last();

    await expect(inputs.nth(0).locator('input')).toHaveValue('32');

    button.click();

    await expect(inputs.nth(0).locator('input')).toHaveValue('31');
});
