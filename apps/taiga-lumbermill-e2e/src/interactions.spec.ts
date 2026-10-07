import {expect, test} from '@playwright/test';

// The app is zoneless: these checks make sure user actions still update the view

test('theme toggle switches dark mode', async ({page}) => {
    await page.goto('/');

    // Playwright emulates the light color scheme by default
    const root = page.locator('tui-root');

    await expect(root).not.toHaveAttribute('tuiTheme', 'dark');

    await page.getByRole('button', {name: 'Mode'}).click();

    await expect(root).toHaveAttribute('tuiTheme', 'dark');
});

test('aside expands and collapses', async ({page}) => {
    await page.goto('/');

    await page.getByRole('button', {name: 'Expand'}).click();

    await expect(page.getByRole('button', {name: 'Collapse'})).toBeVisible();
});

test('select picks an option', async ({page}) => {
    await page.goto('/dashboards/settings/profile');

    const email = page.locator('input[formControlName="email"]');

    await email.click();
    await page.getByRole('option', {name: 'ersatz@example.com'}).click();

    await expect(email).toHaveValue('ersatz@example.com');
});

test('login shows validation and redirects after submit', async ({page}) => {
    await page.goto('/pages/login');

    const email = page.locator('input[formControlName="email"]');

    await email.fill('not-an-email');
    await email.blur();

    await expect(page.getByText('Invalid email')).toBeVisible();

    await email.fill('user@example.com');
    await page.locator('input[formControlName="password"]').fill('secret');
    await page.getByRole('button', {name: 'Log in', exact: true}).click();

    await expect(page).toHaveURL(/\/$/, {timeout: 10_000});
});
