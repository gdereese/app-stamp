function createLogger(options = {}) {
  return {
    info(str) {
      if (options.isVerbose) {
        log(str || '');
      }
    },
    success(str) {
      if (options.isVerbose) {
        log(str || '', (options.chalk || {}).green);
      }
    },
    warn(str) {
      if (options.isVerbose) {
        log(str || '', (options.chalk || {}).yellow);
      }
    }
  };
}

function log(str, chalk) {
  console.log(chalk ? chalk(str) : str);
}

module.exports = createLogger;
