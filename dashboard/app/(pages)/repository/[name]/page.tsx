import Link from "next/link";

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
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "33%", textAlign: "left" }}>
        <h1 style={{ fontSize: "2em", fontWeight: "bold", color: "#0070f3" }}>
          Repository Name {repository.repository}
        </h1>
        <h2>Total Files {repository.total_files}</h2>
        <h2>Total Commits {repository.total_commits}</h2>
        <CommitsPieChart
          chartData={{ user: "Jack", total: repository.total_commits }}
        />
        <ul>
          <li>
            <Link
              href="#"
              style={{
                color: "#0070f3",
                textDecoration: "underline",
                fontWeight: "bold",
              }}
            >
              Link 1
            </Link>
          </li>
          <li>
            <Link
              href="#"
              style={{
                color: "#0070f3",
                textDecoration: "underline",
                fontWeight: "bold",
              }}
            >
              Link 2
            </Link>
          </li>
          <li>
            <Link
              href="#"
              style={{
                color: "#0070f3",
                textDecoration: "underline",
                fontWeight: "bold",
              }}
            >
              Link 3
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
