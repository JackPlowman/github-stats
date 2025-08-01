import repositoryData from "../data/repository_statistics.json";

export interface Repository {
  repository: string;
  total_files: number;
  total_commits: number;
  commits: Record<string, number | undefined>;
  languages: {
    count: Record<string, number | undefined>;
    sloc: Record<string, number | undefined>;
  };
}

export interface RepositoryStatistics {
  repository_owner: string;
  overall_statistics: {
    total_files: number;
    total_commits: number;
  };
  repositories: Repository[];
}

const repositories = repositoryData as RepositoryStatistics;

export default repositories.repositories;
export { repositories as repositoryStatistics };
