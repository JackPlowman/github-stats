import { CommitsPieChart } from "@/components/CommitsPieChart";
import { LanguagesBarChart } from "@/components/LanguagesBarChart";
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
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff8042",
    "#8dd1e1",
    "#a4de6c",
    "#d0ed57",
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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1rem",
        }}
      >
        <CommitsPieChart chartData={pieChartData} />
        <LanguagesBarChart chartData={languageChartData} />
        <CommitsPieChart chartData={pieChartData} />
        <LanguagesBarChart chartData={languageChartData} />
      </div>
    </div>
  );
}
