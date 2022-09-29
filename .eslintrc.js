module.exports = {
  extends: [ 'next', 'next/core-web-vitals' ],
  rules: {
    'semi': [ 'error', 'never', { 'beforeStatementContinuationChars': 'never' } ],
    'semi-spacing': [ 'error', { 'after': true, 'before': false } ],
    'semi-style': [ 'error', 'first' ],
    'no-extra-semi': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-console': [ 'warn', { allow: [ 'warn', 'error' ] } ],
    'eol-last': [ 'error', 'always' ],
    'quotes': [ 2, 'single' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'react/jsx-boolean-value': 'error',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
  }
}
