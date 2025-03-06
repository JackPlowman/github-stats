from playwright.sync_api import Page

from ui.utils.variables import PROJECT_URL


def test_homepage(page: Page) -> None:
    # Act
    page.goto(PROJECT_URL)
    # Assert
    assert page.title() == "GitHub Stats Dashboard"
