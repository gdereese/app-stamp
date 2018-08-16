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
    }
  };
}

function log(str, chalk) {
  console.log(chalk ? chalk(str) : str);
}

module.exports = createLogger;
