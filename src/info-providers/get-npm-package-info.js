const jsonfile = require('jsonfile');

async function getNpmPackageInfo(value) {
  const packageJsonPath = value === true ? 'package.json' : value;

  return new Promise((resolve, reject) => {
    jsonfile.readFile(packageJsonPath, (err, obj) => {
      if (err) {
        reject(err);
        return;
      }

      const propsToInclude = ['author', 'name', 'version'];
      const info = propsToInclude.reduce((i, k) => {
        if (obj[k]) {
          i[k] = obj[k];
        }
        return i;
      }, {});

      resolve(info);
    });
  });
}

module.exports = getNpmPackageInfo;
