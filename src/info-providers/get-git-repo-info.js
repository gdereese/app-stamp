const getRepoInfo = require('git-repo-info');

async function getGitRepoInfo(value) {
  const repoPath = value === true ? '.' : value;

  const repoInfo = getRepoInfo(repoPath);

  return {
    git_author: repoInfo.author,
    git_branch: repoInfo.branch,
    git_commit: repoInfo.sha,
    git_commit_date: repoInfo.committerDate
  };
}

module.exports = getGitRepoInfo;
