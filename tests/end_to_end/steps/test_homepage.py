from pytest_bdd import scenarios, when
from selenium.webdriver import Chrome

from end_to_end.utils.driver import get_driver
from end_to_end.utils.variables import PROJECT_URL

scenarios("../features/homepage.feature")


@when("I have navigated to the homepage")
def step_impl() -> Chrome:
    """Navigates to the homepage.

    Returns:
        driver: The webdriver.
    """
    driver = get_driver()
    driver.get(PROJECT_URL)
