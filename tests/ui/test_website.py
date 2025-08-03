from logging import getLogger

from playwright.sync_api import Page

from ui.utils.variables import PROJECT_URL

logger = getLogger(__name__)


def test_title(page: Page) -> None:
    """Test the website title."""
    # Act
    page.goto(PROJECT_URL)
    # Assert
    assert page.title() == "GitHub Stats Dashboard"
