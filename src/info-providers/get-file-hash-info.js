const md5File = require('md5-file/promise');

async function getFileHashInfo(filePath, logger) {
  try {
    return {
      hash_md5: await md5File(filePath)
    };
  } catch (err) {
    switch (err.code) {
      case 'ENOENT':
        logger.warn(`WARNING: File not found to generate hash: ${filePath}`);
        return null;
      default:
        throw err;
    }
  }
}

module.exports = getFileHashInfo;
