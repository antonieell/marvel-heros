module.exports = {
  moduleNameMapper: {
    "@/components/*": "<rootDir>/components",
    "@/api/*": "<rootDir>/api/index.ts",
    "@/types/*": "<rootDir>/types",
    "@/hooks/*": "<rootDir>/hooks",
    "@/utils/*": "<rootDir>/utils",
    "@/styles/*": "<rootDir>/styles",

    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
  },
  setupFiles: ["<rootDir>/__tests__/setup.js"],
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  testPathIgnorePatterns: ["/.next/", "/node_modules/", "/coverage/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
};
