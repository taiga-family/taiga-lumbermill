import {expect, test} from '@playwright/test';

const PAGES = [
    {name: 'home', path: '/'},
    {name: 'dashboards', path: '/dashboards'},
    {name: 'iot', path: '/dashboards/iot'},
    {name: 'crypto', path: '/dashboards/crypto'},
    {name: 'settings-profile', path: '/dashboards/settings/profile'},
    {name: 'settings-notifications', path: '/dashboards/settings/notifications'},
    {name: 'settings-appearance', path: '/dashboards/settings/appearance'},
    {name: 'pages', path: '/pages'},
    {name: 'login', path: '/pages/login'},
    {name: 'sign-up', path: '/pages/sign-up'},
    {name: 'color-generator', path: '/color-generator'},
];

const THEMES = ['light', 'dark'] as const;

test.beforeEach(async ({page}) => {
    // Charts and dates depend on "now" and Math.random — pin both
    await page.clock.setFixedTime(new Date('2025-06-15T12:00:00Z'));
    await page.addInitScript(() => {
        let seed = 42;

        Math.random = () => {
            seed = (seed * 16807) % 2147483647;

            return (seed - 1) / 2147483646;
        };
    });

    // External APIs (coincap, weatherapi, coin icons) make screenshots flaky
    await page.route(
        (url) => url.hostname !== 'localhost',
        async (route) => route.abort(),
    );
});

THEMES.forEach((theme) => {
    PAGES.forEach(({name, path}) => {
        test(`${name} (${theme})`, async ({page}) => {
            await page.addInitScript((dark) => {
                localStorage.setItem('tuiDark', String(dark));
            }, theme === 'dark');

            await page.goto(path);
            await page.waitForLoadState('networkidle');
            await page.evaluate(async () => document.fonts.ready);

            await expect(page).toHaveScreenshot(`${name}-${theme}.png`, {fullPage: true});
        });
    });
});
