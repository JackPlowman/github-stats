"use client"
import { Octokit } from "octokit";
import { useEffect, useState } from "react";

export default function UserPage() {
  const [profile, setProfile] = useState<{ name: string; bio: string; avatar_url: string } | null>(null);

  useEffect(() => {
    const octokit = new Octokit();
    octokit.request('GET /users/{username}', {
      username: 'JackPlowman'
    }).then(response => {
      setProfile({
        name: response.data.name || '',
        bio: response.data.bio || '',
        avatar_url: response.data.avatar_url
      });
    });
  }, []);

  if (!profile) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{profile.name}</h1>
      <p>{profile.bio}</p>
      <img src={profile.avatar_url} alt={`${profile.name}'s avatar`} width="100" />
    </>
  );
}
