import { CommitsPieChart } from "@/components/PieChart";

import repositories from "../../../../data/repository_statistics.json";

interface Repository {
  repository: string;
  total_files: number;
  total_commits: number;
}

export async function generateStaticParams() {
  return repositories.map((repository: Repository) => ({
    name: repository.repository,
  }));
}

export default function RepositoryPage({
  params,
}: Readonly<{
  params: { name: string };
}>) {
  const { name } = params;
  const repository = repositories.find(
    (repository: Repository) => repository.repository === name,
  ) as Repository;
  return (
    <>
      <h1>Repository Name {repository.repository}</h1>
      <h2>Total Files {repository.total_files}</h2>
      <h2>Total Commits {repository.total_commits}</h2>
      <CommitsPieChart
        chartData={{ user: "Jack", total: repository.total_commits }}
      />
    </>
  );
}
