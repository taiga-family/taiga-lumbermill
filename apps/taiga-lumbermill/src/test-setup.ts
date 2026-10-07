import {setupZoneTestEnv} from 'jest-preset-angular/setup-env/zone';

setupZoneTestEnv();
// @ts-expect-error https://thymikee.github.io/jest-preset-angular/docs/getting-started/test-environment
globalThis.ngJest = {
    testEnvironmentOptions: {
        errorOnUnknownElements: true,
        errorOnUnknownProperties: true,
    },
};

// jsdom has no matchMedia, Taiga UI reads it for TUI_DARK_MODE
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string): Partial<MediaQueryList> => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        // No Angular imports here: they would load before setupZoneTestEnv()

        dispatchEvent: () => false,
    }),
});
