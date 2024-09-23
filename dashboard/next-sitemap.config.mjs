/** @type {import('next-sitemap').IConfig} */
export default {
  // siteUrl: process.env.SITE_URL || "https://jackplowman.github.io/github-stats",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  generateRobotsTxt: true,
  output: "export",
};
