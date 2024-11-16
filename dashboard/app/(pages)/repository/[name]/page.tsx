import Link from "next/link";

import { CommitsPieChart } from "@/components/PieChart";

import repositories from "../../../../data/repository_statistics.json";

interface Repository {
  repository: string;
  total_files: number;
  total_commits: number;
  commits: Record<string, number | undefined>;
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
  const colors = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff8042",
    "#8dd1e1",
    "#a4de6c",
    "#d0ed57",
  ];
  const chartData = Object.entries(repository.commits).map(
    ([user, total], index) => ({
      user,
      total: total ?? 0,
      fill: colors[index % colors.length],
    }),
  );
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        color: "var(--color-foreground)",
      }}
    >
      <div style={{ width: "33%", textAlign: "left" }}>
        <h1
          style={{
            fontSize: "2em",
            fontWeight: "bold",
            color: "var(--color-primary)",
          }}
        >
          Repository Name {repository.repository}
        </h1>
        <h2>Total Files {repository.total_files}</h2>
        <h2>Total Commits {repository.total_commits}</h2>
        <CommitsPieChart chartData={chartData} />
      </div>
    </div>
  );
}
