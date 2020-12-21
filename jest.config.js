module.exports = {
  clearMocks: true,
  coverageProvider: 'babel',
  coverageDirectory: 'coverage',
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/main/**'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  }
};
