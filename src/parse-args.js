function parseArgs(options) {
  options.program
    .option(
      '--date [value]',
      'Include timestamp; accepts any valid numeric or string date representation (default: current date/time)'
    )
    .option(
      '--hash <file-path>',
      "Include MD5 hash of the specified file's contents"
    )
    .option(
      '--npm [package-json-path]',
      'Include info from NPM package.json (default: package.json in current directory)'
    )
    .option('--format <format>', 'Format for output stamp file', 'json')
    .option('--output-path <path>', 'Path to output file', 'stamp.json')
    .parse(process.argv);

  return options.program;
}

module.exports = parseArgs;
