import { CommitsPieChart } from "@/components/CommitsPieChart";
import { LanguagesBarChart } from "@/components/LanguagesBarChart";
import { RepositoryKeyFacts } from "@/components/RepositoryKeyFacts";
import repositories, { Repository } from "@/lib/repository_statistics";

export async function generateStaticParams() {
  return repositories.map((repository: Repository) => ({
    name: repository.repository,
  }));
}

export default async function RepositoryPage(
  props: Readonly<{
    params: Promise<{ name: string }>;
  }>,
) {
  const { name } = await props.params;
  const repository = repositories.find(
    (repository: Repository) => repository.repository === name,
  ) as Repository;
  const colors = [
    "hsl(var(--chart-1))",
    "hsl(var(--chart-2))",
    "hsl(var(--chart-3))",
    "hsl(var(--chart-4))",
    "hsl(var(--chart-5))",
    "hsl(var(--chart-6))",
    "hsl(var(--chart-7))",
    "hsl(var(--chart-8))",
    "hsl(var(--chart-9))",
    "hsl(var(--chart-10))",
  ];
  const pieChartData = Object.entries(repository.commits).map(
    ([user, total], index) => ({
      user,
      total: total ?? 0,
      fill: colors[index % colors.length],
    }),
  );
  const languageChartData = Object.entries(repository.languages).map(
    ([language, count], index) => ({
      language,
      count: count ?? 0,
      fill: colors[index % colors.length],
    }),
  );
  return (
    <div
      style={{
        width: "80%",
        margin: "0 auto",
        color: "var(--color-foreground)",
      }}
    >
      <h1
        style={{
          fontSize: "2em",
          fontWeight: "bold",
          color: "var(--color-secondary)",
        }}
        data-testid="repository-name-title"
      >
        {repository.repository}
      </h1>

      <RepositoryKeyFacts repository={repository} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1rem",
        }}
      >
        <CommitsPieChart chartData={pieChartData} />
        <LanguagesBarChart chartData={languageChartData} />
      </div>
    </div>
  );
}
