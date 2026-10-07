import taiga from '@taiga-ui/eslint-plugin-experience-next';

export default [
    {
        ignores: ['dist/**', 'coverage/**', '.angular/**', '.nx/**', '.agents/**', '.claude/**'],
    },
    ...taiga.configs.recommended,
    {
        files: ['package.json'],
        rules: {
            // "nx.includedScripts": [] stops Nx from inferring a recursive root `test` target from npm scripts
            'package-json/no-empty-fields': ['error', {ignoreProperties: ['files', 'nx']}],
        },
    },
];
