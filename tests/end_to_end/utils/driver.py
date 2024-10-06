from os import getenv

from selenium import webdriver
from selenium.webdriver import Chrome


def get_driver() -> Chrome:
    """Gets the webdriver.

    Returns:
        driver: The webdriver.
    """
    options = webdriver.ChromeOptions()
    if getenv("HEADLESS") == "true":
        options.add_argument("--headless")
    return webdriver.Chrome(options=options)
