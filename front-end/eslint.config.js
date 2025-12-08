import react from 'eslint-plugin-react';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import stylisticJs from '@stylistic/eslint-plugin';

export default defineConfig([
    js.configs.recommended,
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            sourceType: 'module',
            globals: { ...globals.browser, ...globals.vitest },
            ecmaVersion: 'latest',
            parserOptions: {
                ecmaFeatures: { jsx: true },
            },
        },
        plugins: {
            '@stylistic/js': stylisticJs,
            prettier: eslintPluginPrettier,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            react,
        },
        rules: {
            ...react.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            ...reactRefresh.configs.vite.rules,
            'prettier/prettier': [
                'error',
                {
                    singleQuote: true,
                    semi: true,
                    tabWidth: 4,
                    endOfLine: 'lf',
                },
            ],
        },
    },
    eslintConfigPrettier,
    {
        ignores: ['dist/**'],
    },
]);
