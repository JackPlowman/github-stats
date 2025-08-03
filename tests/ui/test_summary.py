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
        "Commits Over Time",
        "Files Over Time",
        "Top Contributors by Commits",
        "Top Contributors by Files",
    ]:
        expect(
            page.locator('div[data-slot="card-header"]', has_text=graph)
        ).to_be_visible()
