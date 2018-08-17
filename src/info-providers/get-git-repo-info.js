const path = require('path');

const getRepoInfo = require('git-repo-info');

async function getGitRepoInfo(value, logger) {
  const repoPath = value === true ? '.' : value;

  const repoInfo = getRepoInfo(repoPath);
  if (!repoInfo.sha) {
    logger.warn(`WARNING: Git repository not found: ${path.resolve(repoPath)}`);
    return null;
  }

  return {
    git_author: repoInfo.author,
    git_branch: repoInfo.branch,
    git_commit: repoInfo.sha,
    git_commit_date: repoInfo.committerDate
  };
}

module.exports = getGitRepoInfo;
