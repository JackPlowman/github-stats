import { repositoryStatistics } from "./repository_statistics";

export interface SummaryData {
  totalRepositories: number;
  totalFiles: number;
  totalCommits: number;
  totalContributors: number;
  totalLanguages: number;
  commitsByUser: Record<string, number>;
  languagesByCount: Record<string, number>;
  languagesBySloc: Record<string, number>;
  topRepositoriesByCommits: Array<{ repository: string; commits: number }>;
  topRepositoriesByFiles: Array<{ repository: string; files: number }>;
}

export function getSummaryData(): SummaryData {
  const repositories = repositoryStatistics.repositories;

  // Use pre-aggregated data from v2 format
  const totalFiles = repositoryStatistics.overall_statistics.total_files;
  const totalCommits = repositoryStatistics.overall_statistics.total_commits;

  // Aggregate commits by user across all repositories (still needed for user breakdown)
  const commitsByUser: Record<string, number> = {};
  repositories.forEach((repo) => {
    Object.entries(repo.commits).forEach(([user, commits]) => {
      if (commits) {
        commitsByUser[user] = (commitsByUser[user] || 0) + commits;
      }
    });
  });

  // Aggregate languages by count across all repositories (still needed for language breakdown)
  const languagesByCount: Record<string, number> = {};
  repositories.forEach((repo) => {
    Object.entries(repo.languages.count).forEach(([language, count]) => {
      if (count) {
        languagesByCount[language] = (languagesByCount[language] || 0) + count;
      }
    });
  });

  // Aggregate languages by SLOC across all repositories (still needed for SLOC breakdown)
  const languagesBySloc: Record<string, number> = {};
  repositories.forEach((repo) => {
    Object.entries(repo.languages.sloc).forEach(([language, sloc]) => {
      if (sloc) {
        languagesBySloc[language] = (languagesBySloc[language] || 0) + sloc;
      }
    });
  });

  // Get top repositories by commits
  const topRepositoriesByCommits = repositories
    .map((repo) => ({
      repository: repo.repository,
      commits: repo.total_commits,
    }))
    .sort((a, b) => b.commits - a.commits)
    .slice(0, 10);

  // Get top repositories by files
  const topRepositoriesByFiles = repositories
    .map((repo) => ({ repository: repo.repository, files: repo.total_files }))
    .sort((a, b) => b.files - a.files)
    .slice(0, 10);

  return {
    totalRepositories: repositories.length,
    totalFiles,
    totalCommits,
    totalContributors: Object.keys(commitsByUser).length,
    totalLanguages: Object.keys(languagesByCount).length,
    commitsByUser,
    languagesByCount,
    languagesBySloc,
    topRepositoriesByCommits,
    topRepositoriesByFiles,
  };
}
