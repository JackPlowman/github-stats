import Link from "next/link";

import repositories from "../lib/repository_statistics";

export default function RepositoriesPage() {
  const sortedRepositories = repositories.toSorted((a, b) =>
    a.repository.localeCompare(b.repository),
  );
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "33%", textAlign: "left" }}>
        <h1 style={{ fontSize: "2em", fontWeight: "bold", color: "#0070f3" }}>
          Repositories
        </h1>
        <ul style={{ listStyleType: "disc" }}>
          {sortedRepositories.map((repository) => (
            <li key={repository.repository}>
              <Link
                href={`/repository/${repository.repository}`}
                style={{
                  color: "#0070f3",
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
                data-testid="repository-link"
              >
                {repository.repository}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
