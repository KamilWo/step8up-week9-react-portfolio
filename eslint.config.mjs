/** @type {import('next').NextConfig} */
import js from '@eslint/js'
import globals from 'globals'
import prettierConfig from 'eslint-config-prettier'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import nextConfig from 'eslint-config-next'
import {defineConfig, globalIgnores} from 'eslint/config'

export default defineConfig([
  globalIgnores(['node_modules', 'build', 'coverage', 'dist', 'other', '.next']),
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    ...nextConfig,
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.node, // Enables Node.js global variables
        ...globals.jest, // Enables Jest global variables
        ...globals.browser, // Enables Browser global variables
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {jsx: true},
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', {varsIgnorePattern: '^[A-Z_]'}],
      ...nextConfig.rules,
    },
  },

  // Prettier configuration must be last to override other formatting rules
  prettierConfig,
])
