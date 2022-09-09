const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './' // Path to the Next.js app to load next.config.js and .env files
})

// Custom configurations to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom'
}

module.exports = createJestConfig(customJestConfig)