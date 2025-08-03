import { CommitsPieChart } from "@/components/CommitsPieChart";
import { LanguagesBarChart } from "@/components/LanguagesBarChart";
import { OverviewKeyFacts } from "@/components/OverviewKeyFacts";
import { TopRepositoriesChart } from "@/components/TopRepositoriesChart";
import { getOverviewData } from "@/lib/overview_data";

export default function OverviewPage() {
  const overviewData = getOverviewData();

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

  // Prepare chart data
  const commitsPieChartData = Object.entries(overviewData.commitsByUser).map(
    ([user, total], index) => ({
      user,
      total,
      fill: colors[index % colors.length],
    }),
  );

  const languagesBarChartData = Object.entries(overviewData.languagesByCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([language, count], index) => ({
      language,
      count,
      fill: colors[index % colors.length],
    }));

  const topRepositoriesByCommitsData = overviewData.topRepositoriesByCommits
    .slice(0, 8)
    .map((repo, index) => ({
      repository: repo.repository,
      value: repo.commits,
      fill: colors[index % colors.length],
    }));

  const topRepositoriesByFilesData = overviewData.topRepositoriesByFiles
    .slice(0, 8)
    .map((repo, index) => ({
      repository: repo.repository,
      value: repo.files,
      fill: colors[index % colors.length],
    }));

  return (
    <div
      style={{
        width: "90%",
        margin: "0 auto",
        color: "var(--color-foreground)",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          color: "#fff",
          textAlign: "center",
          marginBottom: "2rem",
          letterSpacing: "-1px",
        }}
        data-testid="overview-title"
      >
        GitHub Stats Overview
      </h1>

      <OverviewKeyFacts
        totalRepositories={overviewData.totalRepositories}
        totalFiles={overviewData.totalFiles}
        totalCommits={overviewData.totalCommits}
        totalContributors={overviewData.totalContributors}
        totalLanguages={overviewData.totalLanguages}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        <CommitsPieChart chartData={commitsPieChartData} />
        <LanguagesBarChart chartData={languagesBarChartData} />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1rem",
        }}
      >
        <TopRepositoriesChart
          chartData={topRepositoriesByCommitsData}
          title="Top Repositories by Commits"
          dataKey="commits"
        />
        <TopRepositoriesChart
          chartData={topRepositoriesByFilesData}
          title="Top Repositories by Files"
          dataKey="files"
        />
      </div>
    </div>
  );
}
