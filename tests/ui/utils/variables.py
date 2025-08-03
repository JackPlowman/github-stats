from os import getenv

GITHUB_PAGES_URL = "https://jackplowman.github.io/github-stats"

PROJECT_URL = getenv("PROJECT_URL") if getenv("PROJECT_URL") else GITHUB_PAGES_URL
if not PROJECT_URL:
    raise ValueError("PROJECT_URL environment variable is not set.")

SITEMAP_URL_PREFIX = GITHUB_PAGES_URL
EXPECTED_XML_CONTENT_TYPE = (
    "text/xml" if getenv("ENVIRONMENT") == "local" else "application/xml"
)
