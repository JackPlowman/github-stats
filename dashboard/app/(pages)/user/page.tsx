"use client";

import { marked } from "marked";
import { Octokit } from "octokit";
import { useEffect, useState } from "react";

import Bio from "./Bio";

export default function UserPage() {
  const [profile, setProfile] = useState<{
    name: string;
    bio: string;
    avatar_url: string;
  } | null>(null);
  const [readme, setReadme] = useState<string | null>(null);

  useEffect(() => {
    const octokit = new Octokit();
    octokit
      .request("GET /users/{username}", {
        username: "JackPlowman",
      })
      .then((response) => {
        setProfile({
          name: response.data.name || "",
          bio: response.data.bio || "",
          avatar_url: response.data.avatar_url,
        });
      });

    octokit
      .request("GET /repos/{owner}/{repo}/readme", {
        owner: "JackPlowman",
        repo: "JackPlowman",
      })
      .then((response) => {
        let readmeContent = atob(response.data.content);
        readmeContent = readmeContent.replace(
          /!\[Metrics\]\(\.\/github-metrics\.svg\)/g,
          "![Metrics](https://raw.githubusercontent.com/JackPlowman/JackPlowman/refs/heads/main/github-metrics.svg)",
        );
        console.log(readmeContent);
        const htmlContent = marked(readmeContent) as string;
        setReadme(htmlContent);
      });
  }, []);

  if (!profile || !readme) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{profile.name}</h1>
      {profile.bio && <Bio bio={profile.bio} />}
      <div
        dangerouslySetInnerHTML={{ __html: readme }}
        style={{
          textAlign: "left",
          display: "inline-block",
          maxWidth: "800px",
          width: "100%",
        }}
      />
    </div>
  );
}
