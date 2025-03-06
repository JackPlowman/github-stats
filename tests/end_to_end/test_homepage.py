from end_to_end.utils.driver import get_driver
from end_to_end.utils.variables import PROJECT_URL


def test_homepage() -> None:
    # Act
    driver = get_driver()
    driver.get(PROJECT_URL)
