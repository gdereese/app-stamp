function validateArgs(options) {
  const invalidSources = (options.args.include || []).filter(
    s => !options.availableSources.includes(s)
  );
  if (invalidSources.length > 0) {
    throw new Error(
      `The following sources are unknown/not supported: ${invalidSources.join(
        ','
      )}`
    );
  }
}

module.exports = validateArgs;
