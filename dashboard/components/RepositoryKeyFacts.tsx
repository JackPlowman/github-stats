import React from "react";

import { Repository } from "@/lib/repository_statistics";

export function RepositoryKeyFacts({
  repository,
}: Readonly<{ repository: Repository }>) {
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
          boxShadow:
            "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        }}
      >
        <div
          style={{
            fontSize: "2.7rem",
            fontWeight: 900,
            color: "#fff",
            marginBottom: "0.5rem",
            letterSpacing: "-1px",
          }}
        >
          {repository.total_commits}
        </div>
        <div
          style={{
            fontSize: "1rem",
            color: "#fff",
            fontWeight: 700,
            letterSpacing: "0.5px",
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
          boxShadow:
            "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        }}
      >
        <div
          style={{
            fontSize: "2.7rem",
            fontWeight: 900,
            color: "#fff",
            marginBottom: "0.5rem",
            letterSpacing: "-1px",
          }}
        >
          {repository.total_files}
        </div>
        <div
          style={{
            fontSize: "1rem",
            color: "#fff",
            fontWeight: 700,
            letterSpacing: "0.5px",
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
          boxShadow:
            "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        }}
      >
        <div
          style={{
            fontSize: "2.7rem",
            fontWeight: 900,
            color: "#fff",
            marginBottom: "0.5rem",
            letterSpacing: "-1px",
          }}
        >
          {Object.keys(repository.commits).length}
        </div>
        <div
          style={{
            fontSize: "1rem",
            color: "#fff",
            fontWeight: 700,
            letterSpacing: "0.5px",
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
          boxShadow:
            "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        }}
      >
        <div
          style={{
            fontSize: "2.7rem",
            fontWeight: 900,
            color: "#fff",
            marginBottom: "0.5rem",
            letterSpacing: "-1px",
          }}
        >
          {Object.keys(repository.languages).length}
        </div>
        <div
          style={{
            fontSize: "1rem",
            color: "#fff",
            fontWeight: 700,
            letterSpacing: "0.5px",
          }}
        >
          Languages Used
        </div>
      </div>
    </div>
  );
}
