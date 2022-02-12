module.exports = {
  displayName: 'plus',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      useESM: true,
    },
  },
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  extensionsToTreatAsEsm: ['.ts'],
  coverageDirectory: '../../coverage/packages/plus',
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
};
