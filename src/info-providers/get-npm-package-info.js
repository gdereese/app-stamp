const jsonfile = require('jsonfile');

async function getNpmPackageInfo(value, logger) {
  const packageJsonPath = value === true ? 'package.json' : value;

  return new Promise((resolve, reject) => {
    jsonfile.readFile(packageJsonPath, (err, obj) => {
      if (err) {
        if (err.code === 'ENOENT') {
          logger.warn(`WARNING: NPM package not found: ${packageJsonPath}`);
          resolve(null);
          return;
        }

        reject(err);
        return;
      }

      const propsToInclude = ['author', 'name', 'version'];
      const info = propsToInclude.reduce((i, k) => {
        if (obj[k]) {
          const infoPropName = `npm_${k}`;
          i[infoPropName] = obj[k];
        }
        return i;
      }, {});

      resolve(info);
    });
  });
}

module.exports = getNpmPackageInfo;
