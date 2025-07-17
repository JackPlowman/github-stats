from logging import getLogger

from playwright.sync_api import Page

from ui.utils.variables import REPOSITORIES_URL

logger = getLogger(__name__)


def test_title(page: Page) -> None:
    """Test the repositories title."""
    # Act
    page.goto(REPOSITORIES_URL)
    # Assert
    assert page.title() == "GitHub Stats Dashboard"


def test_repositories_content(page: Page) -> None:
    """Test the repositories content."""
    # Act
    page.goto(REPOSITORIES_URL)
    # Assert
    assert page.locator("h1").text_content() == "Repositories"
    repository_links = page.locator("[data-testid='repository-link']")
    assert repository_links.count() == 33
    assert (
        repository_links.first.get_attribute("href")
        == "/github-stats/repository/actions-status"
    )
    assert [link.text_content() for link in repository_links.element_handles()] == [
        "actions-status",
        "aws-timing-scripts",
        "create-repository-tasks",
        "DependabotTrigger",
        "development-environment",
        "development-ideas",
        "gitdash",
        "github-pr-analyser",
        "github-stats",
        "github-stats-analyser",
        "JackPlowman",
        "one-time-scripts",
        "project-links",
        "project-status-checker",
        "projects",
        "python-practise",
        "repo_standards_validator",
        "repo-overseer",
        "RepoOrchestrator",
        "repository-template",
        "repository-visualiser",
        "RepoSync",
        "reusable-workflows",
        "screenshot_mailinator_email",
        "SlocCount",
        "source_scan",
        "status-sentinel",
        "tech-radar",
        "TechInsight",
        "TechScanner",
        "test-project-status-checker",
        "travel-map",
        "useful-commands",
        "windows-development-environment",
    ]
