/* eslint-disable */
import {defineConfig, devices} from '@playwright/test';

import {workspaceRoot} from '@nx/devkit';

const baseURL = process.env['BASE_URL'] || 'http://localhost:4200';

/**
 * Visual regression baseline for the renovation (see RENOVATION_PLAN.md).
 * Chromium only: screenshots are compared between upgrade steps, not across browsers.
 */
export default defineConfig({
    testDir: './visual',
    outputDir: '../../dist/.playwright/visual',
    fullyParallel: true,
    reporter: [
        ['list'],
        ['html', {outputFolder: '../../dist/.playwright/visual-report', open: 'never'}],
    ],
    expect: {
        toHaveScreenshot: {
            animations: 'disabled',
            caret: 'hide',
            // Absolute limit: white-on-white cards differ only by text pixels, a ratio hides them
            maxDiffPixels: 50,
        },
    },
    use: {
        baseURL,
        viewport: {width: 1440, height: 900},
    },
    webServer: {
        command: 'npx nx serve taiga-lumbermill',
        url: 'http://localhost:4200',
        reuseExistingServer: !process.env['CI'],
        cwd: workspaceRoot,
    },
    projects: [
        {
            name: 'chromium',
            use: {...devices['Desktop Chrome'], viewport: {width: 1440, height: 900}},
        },
    ],
});
