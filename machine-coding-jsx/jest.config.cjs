module.exports = {
   roots: ['<rootDir>/src'],
     testEnvironment: 'jest-environment-jsdom',
     transform: {
       '^.+\\.[jt]sx?$': 'babel-jest'
     },
     moduleNameMapper: {
       '\\.(css|scss)$': 'identity-obj-proxy'
     },
     setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
     moduleFileExtensions: ['js', 'jsx', 'json']
  };
  