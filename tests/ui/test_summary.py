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
    expect(page.locator("p", has_text="Total Commits")).to_be_visible()
    expect(page.locator("p", has_text="Total Files")).to_be_visible()
    expect(page.locator("p", has_text="Contributors")).to_be_visible()
    expect(page.locator("p", has_text="Languages Used")).to_be_visible()

    # Graphs
    expect(
        page.locator('div[data-slot="card-header"]', has_text="Total Commits")
    ).to_be_visible()
    expect(
        page.locator('div[data-slot="card-header"]', has_text="File Count Per Type")
    ).to_be_visible()
    expect(
        page.locator(
            'div[data-slot="card-header"]', has_text="Top Repositories by Commits"
        )
    ).to_be_visible()
    expect(
        page.locator(
            'div[data-slot="card-header"]', has_text="Top Repositories by Files"
        )
    ).to_be_visible()
