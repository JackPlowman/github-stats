"use client";

export default function Bio({ bio }: Readonly<{ bio: string }>) {
  return (
    <>
      <h2>Bio</h2>
      <p>{bio}</p>
    </>
  );
}
