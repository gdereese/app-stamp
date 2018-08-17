const sut = require('../../src/info-providers/get-npm-package-info');

describe('getNpmPackageInfo', () => {
  it('returns package info if package.json is found', async () => {
    const packageJsonPath = 'package.json';
    const logger = {};

    const actualResult = await sut(packageJsonPath, logger);

    expect(actualResult).toBeTruthy();
    expect(actualResult.npm_version).not.toBeNull();
    expect(actualResult.npm_version).not.toBe('');
  });

  it('returns null if package.json is not found', async () => {
    const packageJsonPath = 'xxx.xxx';
    const logger = { warn() {} };

    const actualResult = await sut(packageJsonPath, logger);

    expect(actualResult).toBeNull();
  });
});
