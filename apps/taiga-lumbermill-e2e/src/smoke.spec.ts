import {expect, test} from '@playwright/test';

const PAGES = [
    {path: '/', text: 'Taiga Lumbermill'},
    {path: '/dashboards', text: 'Settings page'},
    {path: '/dashboards/settings/profile', text: 'Update profile'},
    {path: '/dashboards/settings/notifications', text: 'Notifications'},
    {path: '/dashboards/settings/appearance', text: 'Appearance'},
    {path: '/pages', text: 'Login'},
    {path: '/pages/login', text: 'Log in'},
    {path: '/pages/sign-up', text: 'Sign up'},
    {path: '/color-generator', text: 'Colors'},
];

PAGES.forEach(({path, text}) => {
    test(`${path} renders`, async ({page}) => {
        const errors: string[] = [];

        page.on('pageerror', (error) => errors.push(error.message));

        await page.goto(path);

        // Scoped to <main>: the navigation renders hidden items with the same labels
        await expect(page.locator('main').getByText(text).first()).toBeVisible();
        expect(errors).toEqual([]);
    });
});
