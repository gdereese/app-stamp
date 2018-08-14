function parseArgs(options) {
  const includePattern = new RegExp(
    `^(${options.availableSources.join('|')})$`,
    'i'
  );

  options.program
    .option(
      '-i, --include <sources>',
      'List of sources to include in stamp',
      val => val.split(',')
    )
    .option('-f, --format', 'Format for output stamp', includePattern, 'json')
    .option('-o, --output-path <path>', 'Path to output file', 'stamp.json')
    .parse(process.argv);

  return options.program;
}

module.exports = parseArgs;
