const config = require("@commitlint/config-conventional");
const types = config.rules["type-enum"][2];

/*
 * config: should be used when you add or change project configurations. For example, adding a linter, change
 * code formatter, etc.
 * */
config.rules["type-enum"][2] = ["config"].concat(types);

module.exports = config;
