#!/usr/bin/env node

const chalk = require('chalk');
const fs = require('fs');
const program = require('commander');

const infoProviders = require('./info-providers');
const parseArgs = require('./parse-args');
const validateArgs = require('./validate-args');

chalk.default();

const parseOptions = {
  availableSources: Object.keys(infoProviders),
  program
};
const args = parseArgs(parseOptions);

const validationOptions = {
  args
};
validateArgs(validationOptions);

const infoSlices = (program.include || []).map(k => infoProviders[k]());
const stamp = Object.assign({}, infoSlices);

fs.writeFileSync(program.outputPath, JSON.stringify(stamp));

chalk.default();
