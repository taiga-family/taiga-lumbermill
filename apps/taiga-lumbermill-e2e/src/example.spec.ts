import {expect, test} from '@playwright/test';

test('has title', async ({page}) => {
    await page.goto('/dashboards/iot');

    // Expect h2 to contain a substring.
    expect(await page.locator('h2').first().innerText()).toContain('Safety');
});
