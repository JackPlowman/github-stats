"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface OverviewKeyFactsProps {
  totalRepositories: number;
  totalFiles: number;
  totalCommits: number;
  totalContributors: number;
  totalLanguages: number;
}

export function OverviewKeyFacts({
  totalRepositories,
  totalFiles,
  totalCommits,
  totalContributors,
  totalLanguages,
}: Readonly<OverviewKeyFactsProps>) {
  const stats = [
    { label: "Total Commits", value: totalCommits.toLocaleString() },
    { label: "Total Files", value: totalFiles.toLocaleString() },
    { label: "Contributors", value: totalContributors.toLocaleString() },
    { label: "Languages Used", value: totalLanguages.toLocaleString() },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "1rem",
        marginBottom: "2rem",
      }}
    >
      {stats.map((stat) => (
        <Card key={stat.label} className="text-center">
          <CardHeader className="pb-2">
            <CardTitle className="text-4xl font-bold text-white">
              {stat.value}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">{stat.label}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
