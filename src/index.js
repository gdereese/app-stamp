#!/usr/bin/env node

const chalk = require('chalk');
const jsonfile = require('jsonfile');
const path = require('path');
const program = require('commander');

const createLogger = require('./create-logger');
const infoProviders = require('./info-providers');
const parseArgs = require('./parse-args');
const validateArgs = require('./validate-args');

async function main() {
  const args = parseArgs({
    availableSources: Object.keys(infoProviders),
    program
  });

  validateArgs({ args });

  const logger = createLogger({
    chalk,
    isVerbose: args.verbose
  });

  logger.info();

  // assemble stamp object from selected sources
  const argsKeys = Object.keys(args);
  const selectedInfoProviders = Object.keys(infoProviders).filter(
    k => argsKeys.includes(k) && args[k]
  );
  const infoSlices = await Promise.all(
    selectedInfoProviders.map(k => {
      const infoArgs = args[k];
      return infoProviders[k](infoArgs, logger);
    })
  );
  const stamp = infoSlices.reduce((s, o) => Object.assign(s, o), {});

  // write stamp values to console
  const stampKeys = Object.keys(stamp);
  stampKeys.sort();
  stampKeys.map(k => `${k} = ${stamp[k]}`).forEach(s => {
    logger.info(s);
  });

  await writeStampFile(stamp, args.outputPath);

  logger.success(`Stamp file written to ${path.resolve(args.outputPath)}.`);
  logger.info();
}

function writeStampFile(stamp, path) {
  // file is indented using spaces; come fight me
  const indentLength = 2;

  return new Promise((resolve, reject) => {
    jsonfile.writeFile(path, stamp, { spaces: indentLength }, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve();
    });
  });
}

main();
