const infoProviders = {
  date: require('./get-date-info'),
  hash: require('./get-file-hash-info'),
  npm: require('./get-npm-package-info')
};

module.exports = infoProviders;
