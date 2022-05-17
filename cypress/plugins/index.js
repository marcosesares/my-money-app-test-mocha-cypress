/// <reference types="cypress" />

const deepmerge = require("deepmerge");
const path = require("path");

function loadConfig(filename) {
  const configJson = require(filename);
  if (configJson.extends) {
    const baseConfigFilename = path.join(
      path.dirname(filename),
      configJson.extends
    );
    const baseConfig = loadConfig(baseConfigFilename);
    return deepmerge(baseConfig, configJson);
  } else {
    return configJson;
  }
}

module.exports = (on, config) => {
  return loadConfig(config.configFile);
};
