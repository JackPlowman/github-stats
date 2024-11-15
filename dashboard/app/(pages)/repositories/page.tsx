import Link from "next/link";

import repositories from "../../../data/repository_statistics.json";

export default function RepositoriesPage() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "33%", textAlign: "left" }}>
        <h1 style={{ fontSize: "2em", fontWeight: "bold", color: "#0070f3" }}>
          Repositories
        </h1>
        <ul style={{ listStyleType: "disc" }}>
          {repositories.map((repository) => (
            <li key={repository.repository}>
              <Link
                href={`/repository/${repository.repository}`}
                style={{
                  color: "#0070f3",
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
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
