module.exports = {
  extends: ['eslint:recommended', 'plugin:storybook/recommended'],
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  plugins: ['unused-imports', 'react', '@typescript-eslint', '@iameax'],
  parser: '@typescript-eslint/parser',
  rules: {
    /**
     * Base code style rules
     */
    'no-multi-spaces': 'error',
    'curly': ['warn'],
    'quotes': ['warn', 'single'],
    'semi': ['warn', 'always'],
    'comma-dangle': ['warn', {
      functions: 'always-multiline',
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline'
    }],
    'object-curly-spacing': ['warn', 'always'],
    // no need to use these rules for typescript
    'no-undef': 'off',
    'indent': 'off',
    /**
     * Code quality rules
    */
    'max-statements-per-line': ['warn', {
      max: 1
    }],
    'max-depth': ['warn', 2],
    'max-lines': ['warn', 200],
    'max-lines-per-function': ['warn', 60],
    /**
     * Clean code rules
     */
    '@iameax/empty-lines': ['warn'],
    'no-unused-vars': 'off',
    'unused-imports/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'warn',
    /**
     * Typescript
    */
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    /**
     * React
     */
    'react/prop-types': [0],
    'react/display-name': 'off',
    'react/self-closing-comp': ['error', {
      component: true
    }],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-indent': [2, 2],
    'react/jsx-curly-spacing': [2, {
      when: 'never',
      children: {
        when: 'always'
      },
      attributes: false,
      spacing: {
        objectLiterals: 'never'
      }
    }],
    'react/jsx-tag-spacing': ['error', {
      beforeSelfClosing: 'always'
    }],
    'react/jsx-max-props-per-line': [1, {
      'when': 'multiline'
    }],
    'react/jsx-wrap-multilines': [1, {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'ignore',
      logical: 'ignore',
      prop: 'ignore'
    }],
    'react/jsx-first-prop-new-line': [1, 'multiline'],
    'react/jsx-closing-tag-location': [1],
    'react/jsx-one-expression-per-line': [1, {
      allow: 'literal'
    }],
    'react/jsx-closing-bracket-location': [1, {
      selfClosing: 'tag-aligned',
      nonEmpty: 'tag-aligned'
    }]
  },
  settings: {
    'import/resolver': 'typescript',
    react: {
      pragma: 'h',
      // We use "react 16.0" to avoid pushing folks to UNSAFE_ methods.
      version: '16.0'
    }
  }
};