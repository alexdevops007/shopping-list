module.exports = {
  preset: "react-native",
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  testMatch: ["<rootDir>/__tests__/**/*.test.js"],
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
  },
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"]
};