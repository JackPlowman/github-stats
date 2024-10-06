from selenium.webdriver import Chrome

from end_to_end.utils.variables import PROJECT_URL


class Homepage:
    """The homepage page."""

    def __init__(self, driver: Chrome) -> None:
        """Initialises the homepage page.

        Args:
            driver (Chrome): The webdriver.
        """
        self.driver = driver

    def navigate_to_homepage(self) -> None:
        """Navigates to the homepage."""
        self.driver.get(PROJECT_URL)
