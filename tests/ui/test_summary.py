from playwright.sync_api import Page, expect

from ui.utils.variables import PROJECT_URL


def test_summary_page_layout(page: Page) -> None:
    """Test the layout of the summary page."""
    # Act
    page.goto(PROJECT_URL)

    # Assert
    # Page title
    expect(page.get_by_text("GitHub Stats Summary")).to_be_visible()

    # Key facts
    for fact in [
        "Total Commits",
        "Total Files",
        "Contributors",
        "Languages Used",
    ]:
        expect(page.locator("p", has_text=fact)).to_be_visible()

    # Graphs
    for graph in [
        "Total Commits",
        "File Count Per Type",
        "Top Repositories by Commits",
        "Top Repositories by Files",
    ]:
        expect(
            page.locator('div[data-slot="card-header"]', has_text=graph)
        ).to_be_visible()
