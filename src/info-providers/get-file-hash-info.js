const md5File = require('md5-file/promise');

async function getFileHashInfo(filePath, logger) {
  try {
    return {
      hash_md5: await md5File(filePath)
    };
  } catch (err) {
    if (err.code === 'ENOENT') {
      logger.warn(`WARNING: File not found to generate hash: ${filePath}`);
      return null;
    }

    throw err;
  }
}

module.exports = getFileHashInfo;
