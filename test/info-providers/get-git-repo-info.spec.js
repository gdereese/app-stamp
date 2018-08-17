const sut = require('../../src/info-providers/get-git-repo-info');

describe('getGitRepoInfo', () => {
  it('returns Git info if repo is found', async () => {
    const repoPath = '.';
    const logger = {};

    const actualResult = await sut(repoPath, logger);

    expect(actualResult).toBeTruthy();
    expect(actualResult.git_sha).not.toBeNull();
    expect(actualResult.hash_md5).not.toBe('');
  });

  it('returns null if repo is not found', async () => {
    const repoPath = '../';
    const logger = { warn() {} };

    const actualResult = await sut(repoPath, logger);

    expect(actualResult).toBeNull();
  });
});
