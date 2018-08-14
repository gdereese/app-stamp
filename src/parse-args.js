function parseArgs(options) {
  options.program
    .option('--date [value]', 'Include timestamp')
    .option(
      '--npm [package-json-path]',
      'Include info from NPM package.json',
      'package.json'
    )
    .option('--format <format>', 'Format for output stamp file', 'json')
    .option('--output-path <path>', 'Path to output file', 'stamp.json')
    .parse(process.argv);

  return options.program;
}

module.exports = parseArgs;
