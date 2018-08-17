const sut = require('../../src/info-providers/get-file-hash-info');

describe('getFileHashInfo', () => {
  it('returns hash if file is found', async () => {
    const filePath = process.argv[1];
    const logger = {};

    const actualResult = await sut(filePath, logger);

    expect(actualResult).toBeTruthy();
    expect(actualResult.hash_md5).not.toBeNull();
    expect(actualResult.hash_md5).not.toBe('');
  });

  it('returns null if file is not found', async () => {
    const filePath = 'xxx.xxx';
    const logger = { warn() {} };

    const actualResult = await sut(filePath, logger);

    expect(actualResult).toBeNull();
  });
});
