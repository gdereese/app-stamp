const md5File = require('md5-file/promise');

async function getFileHashInfo(filePath) {
  return {
    hash_md5: await md5File(filePath)
  };
}

module.exports = getFileHashInfo;
