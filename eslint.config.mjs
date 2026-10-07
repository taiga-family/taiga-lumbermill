import taiga from '@taiga-ui/eslint-plugin-experience-next';

export default [
    {
        ignores: ['dist/**', 'coverage/**', '.angular/**', '.nx/**', '.agents/**', '.claude/**', 'agent/**'],
    },
    ...taiga.configs.recommended,
];
