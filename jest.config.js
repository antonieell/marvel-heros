module.exports = {
  moduleNameMapper: {
    "@/components/*": "<rootDir>/components",
    "@/api/*": "<rootDir>/api/index.ts",
    "@/types/*": "<rootDir>/types",
    "@/hooks/*": "<rootDir>/hooks",
    "@/utils/*": "<rootDir>/utils",
    "@/styles/*": "<rootDir>/styles",
  },
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  setupFiles: ["<rootDir>/__tests__/setup.js"],
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  testPathIgnorePatterns: ["/.next/", "/node_modules/", "/coverage/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
};
