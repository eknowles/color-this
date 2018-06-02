module.exports = {
  'moduleFileExtensions': ['ts', 'js'],
  'transform': {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  'globals': {
    'ts-jest': {
      'tsConfigFile': 'tsconfig.json'
    }
  },
  'testMatch': [
    '**/__tests__/*.spec.ts'
  ]
};
