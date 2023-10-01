import type { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
    preset: "ts-jest",
    testEnvironment: "node",
    verbose: true,
    automock: false,
    modulePaths: ["<rootDir>/test"],
    testRegex: "/test/.*\\.spec\\.ts$",
    coverageDirectory: "./coverage",
    coveragePathIgnorePatterns: ["/node_modules/"],
    coverageReporters: ["text", "html", "json"],
};

export default jestConfig;
