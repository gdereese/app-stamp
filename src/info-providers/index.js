const infoProviders = {
  date: require('./get-date-info'),
  npm: require('./get-npm-package-info')
};

module.exports = infoProviders;
