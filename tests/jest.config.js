module.exports = {
  rootDir: "../",
  roots: [
    "<rootDir>/src",
    "<rootDir>/tests"
  ],
  testMatch: [
    "**/*.test.ts"
  ],
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  clearMocks: true,
  coverageProvider: "v8",
  testEnvironment: "node"
};
