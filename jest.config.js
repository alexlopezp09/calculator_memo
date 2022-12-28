const config = {
  collectCoverage: true,
  collectCoverageFrom: ["./src/**"],
  rootDir: "../.",
  coverageThreshold: {
    global: {
      branches: "50",
      functions: "65",
      lines: "65",
      statements: "65",
    },
  },
};

module.exports = config;
