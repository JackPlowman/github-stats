import React from "react";
import { Repository } from "@/lib/repository_statistics";

export function RepositoryKeyFacts({ repository }: Readonly<{ repository: Repository }>) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "1.5rem",
        margin: "2rem 0",
      }}
    >
      <div
        style={{
          backgroundColor: "var(--color-card)",
          color: "var(--color-card-foreground)",
          border: "1px solid var(--color-border)",
          borderRadius: "0.75rem",
          padding: "1.5rem",
          textAlign: "center",
          boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        }}
      >
        <div
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "hsl(var(--chart-1))",
            marginBottom: "0.5rem",
          }}
        >
          {repository.total_commits}
        </div>
        <div
          style={{
            fontSize: "0.875rem",
            color: "var(--color-muted-foreground)",
            fontWeight: "500",
          }}
        >
          Total Commits
        </div>
      </div>

      <div
        style={{
          backgroundColor: "var(--color-card)",
          color: "var(--color-card-foreground)",
          border: "1px solid var(--color-border)",
          borderRadius: "0.75rem",
          padding: "1.5rem",
          textAlign: "center",
          boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        }}
      >
        <div
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "hsl(var(--chart-2))",
            marginBottom: "0.5rem",
          }}
        >
          {repository.total_files}
        </div>
        <div
          style={{
            fontSize: "0.875rem",
            color: "var(--color-muted-foreground)",
            fontWeight: "500",
          }}
        >
          Total Files
        </div>
      </div>

      <div
        style={{
          backgroundColor: "var(--color-card)",
          color: "var(--color-card-foreground)",
          border: "1px solid var(--color-border)",
          borderRadius: "0.75rem",
          padding: "1.5rem",
          textAlign: "center",
          boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        }}
      >
        <div
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "hsl(var(--chart-3))",
            marginBottom: "0.5rem",
          }}
        >
          {Object.keys(repository.commits).length}
        </div>
        <div
          style={{
            fontSize: "0.875rem",
            color: "var(--color-muted-foreground)",
            fontWeight: "500",
          }}
        >
          Contributors
        </div>
      </div>

      <div
        style={{
          backgroundColor: "var(--color-card)",
          color: "var(--color-card-foreground)",
          border: "1px solid var(--color-border)",
          borderRadius: "0.75rem",
          padding: "1.5rem",
          textAlign: "center",
          boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        }}
      >
        <div
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "hsl(var(--chart-4))",
            marginBottom: "0.5rem",
          }}
        >
          {Object.keys(repository.languages).length}
        </div>
        <div
          style={{
            fontSize: "0.875rem",
            color: "var(--color-muted-foreground)",
            fontWeight: "500",
          }}
        >
          Languages Used
        </div>
      </div>
    </div>
  );
}
