import {expect, test} from '@playwright/test';

test('Can change date', async ({page}) => {
    await page.goto('/dashboards/iot');

    const calendar = page.locator('tui-calendar').first();

    await expect(calendar).toBeHidden();

    const dataRange = page.locator('tui-input-date-range').first();

    await expect(dataRange).toBeVisible();

    dataRange.click();

    await expect(calendar).toBeVisible();
});

test('Have line chart', async ({page}) => {
    await page.goto('/dashboards/iot');

    const chart = page.locator('tui-line-days-chart');

    await expect(chart).toHaveCount(1);
});

test('Can open modal info', async ({page}) => {
    await page.goto('/dashboards/iot');

    const chart = page.locator('tui-line-days-chart').first();

    await expect(page.locator('.value').first()).toBeHidden();

    chart.hover();

    chart.focus();

    await expect(page.locator('.value').first()).toBeVisible();
});
