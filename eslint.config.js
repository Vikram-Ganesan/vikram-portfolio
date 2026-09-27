import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import checkFile from 'eslint-plugin-check-file';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    plugins: {
      'check-file': checkFile,
    },
    rules: {
      'check-file/filename-naming-convention': [
        'error',
        {
          'src/**/*.tsx': 'PASCAL_CASE',
          'src/**/*.ts': 'KEBAB_CASE',
        },
      ],
      'check-file/folder-naming-convention': [
        'error',
        {
          'src/**/': 'KEBAB_CASE',
        },
      ],
    },
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: ['src/main.tsx'],
    rules: {
      'check-file/filename-naming-convention': [
        'error',
        {
          'src/**/main.tsx': 'CAMEL_CASE',
        },
      ],
    },
  },
]);
