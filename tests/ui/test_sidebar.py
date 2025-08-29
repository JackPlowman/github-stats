from playwright.sync_api import Page, expect

from ui.utils.variables import PROJECT_URL


def test_sidebar_navigation_links(page: Page) -> None:
    """Test that sidebar navigation links are visible and correct."""
    # Act
    page.goto(PROJECT_URL)
    # Assert
    for section in ["Application", "Summary", "User", "Repositories"]:
        # Sidebar main sections
        expect(page.get_by_text(section, exact=True)).to_be_visible()


def test_sidebar_repositories_list(page: Page) -> None:
    """Test that the sidebar lists repositories and they are clickable."""
    # Act
    page.goto(PROJECT_URL)
    # Assert
    for repo in [
        "actions-status",
        "aws-timing-scripts",
        "coding-metrics",
        "create-repository-tasks",
        "DependabotTrigger",
        "development-environment",
        "development-ideas",
        "exercism",
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
        "remove-pr-bot-collaborators",
        "repo_standards_validator",
        "repo-overseer",
        "RepoOrchestrator",
        "repository-template",
        "repository-visualiser",
        "RepoSync",
        "reusable-workflows",
        "screenshot_mailinator_email",
        "SlocCount",
        "status-sentinel",
        "tech-radar",
        "TechInsight",
        "TechScanner",
        "test-coding-metrics",
        "test-project-status-checker",
        "travel-map",
        "useful-commands",
        "windows-development-environment",
    ]:
        expect(page.get_by_role("link", name=repo, exact=True)).to_be_visible()
