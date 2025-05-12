
from requests import get

from ui.utils.variables import (
    PROJECT_URL,
)


def test_robots_txt() -> None:
    """Test the robots.txt file."""
    # Act
    robots_response = get(f"{PROJECT_URL}/robots.txt", timeout=5)
    assert robots_response.status_code == 200
    # Assert
    assert robots_response.headers["Content-Type"] == "text/plain"
    assert "User-agent: *" in robots_response.text
    assert "Disallow: /admin/" in robots_response.text
    assert "Allow: /admin/admin-ajax.php" in robots_response.text
