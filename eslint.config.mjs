import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    {
        files: ['src/**/*.js'],
        plugins: { js },
        extends: ['js/recommended'],
        languageOptions: {
            ecmaVersion: 2022,
            globals: globals.node,
            sourceType: 'commonjs'
        },
        rules: {
            'no-console': 0,
            'no-unused-vars': 0,
            'no-useless-escape': 0,
            'no-empty': 0,
            'no-unreachable': 1
        }
    }
]);
