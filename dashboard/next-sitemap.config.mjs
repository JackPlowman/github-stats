/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://jackplowman.github.io/github-stats",
  generateRobotsTxt: true,
  output: "export",
};
