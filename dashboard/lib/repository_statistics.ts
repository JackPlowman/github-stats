import repositories from "../data/repository_statistics.json";

export interface Repository {
  repository: string;
  total_files: number;
  total_commits: number;
  commits: Record<string, number | undefined>;
  languages: Record<string, number | undefined>;
}

export default repositories as Repository[];
