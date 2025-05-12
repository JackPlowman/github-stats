from requests import get
from pathlib import Path
from ui.utils.variables import (
    PROJECT_URL,
)


def test_robots_txt() -> None:
    """Test the robots.txt file."""
    # Act
    robots_response = get(f"{PROJECT_URL}/robots.txt", timeout=5)
    assert robots_response.status_code == 200
    # Assert
    assert robots_response.headers["Content-Type"] == "text/plain; charset=utf-8"
    with Path("ui/data/expected_robots.txt").open() as file:
        expected_robots = file.read()
    assert robots_response.text == expected_robots
