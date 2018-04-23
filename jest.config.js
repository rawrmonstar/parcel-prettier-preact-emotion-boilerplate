module.exports = {
  verbose: true,
  setupTestFrameworkScriptFile: "./test/setupTestFrameworkScript.js",
  snapshotSerializers: ["preact-render-spy/snapshot"],
  testURL: "http://localhost:1234",
  moduleFileExtensions: ["js"],
  moduleDirectories: ["node_modules"],
  moduleNameMapper: {
    "^preact$": "<rootDir>/node_modules/preact/dist/preact.min.js",
    "^react$": "preact-compat",
    "^react-dom$": "preact-compat"
  }
};
