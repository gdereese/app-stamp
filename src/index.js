#!/usr/bin/env node

const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const program = require('commander');

const infoProviders = require('./info-providers');
const Logger = require('./logger');
const parseArgs = require('./parse-args');
const validateArgs = require('./validate-args');

const logger = new Logger(chalk);

logger.info();

const parseOptions = {
  availableSources: Object.keys(infoProviders),
  program
};
const args = parseArgs(parseOptions);

const validationOptions = {
  args
};
validateArgs(validationOptions);

const argsKeys = Object.keys(args);
const selectedInfoProviders = Object.keys(infoProviders).filter(k =>
  argsKeys.includes(k)
);
const infoSlices = selectedInfoProviders.map(k => {
  const infoArgs = args[k];
  return infoProviders[k](infoArgs);
});
const stamp = infoSlices.reduce((s, o) => Object.assign(s, o), {});

const stampKeys = Object.keys(stamp);
stampKeys.sort();
stampKeys.map(k => `${k} = ${stamp[k]}`).forEach(s => {
  logger.info(s);
});

// file is indented using spaces; come fight me
const indentLength = 2;
fs.writeFileSync(
  args.outputPath,
  JSON.stringify(stamp, null, ' '.repeat(indentLength))
);
logger.success(`Stamp file written to ${path.resolve(args.outputPath)}.`);

logger.info();
