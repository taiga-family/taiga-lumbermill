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

        dispatchEvent: () => false,
    }),
});
