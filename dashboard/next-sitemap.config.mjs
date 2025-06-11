/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://jackplowman.github.io/github-stats",
  generateRobotsTxt: true,
  output: "export",
};

export default config;
