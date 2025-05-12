from logging import getLogger

from defusedxml.ElementTree import fromstring
from requests import get

from ui.utils.variables import (
    EXPECTED_XML_CONTENT_TYPE,
    PROJECT_URL,
    SITEMAP_URL_PREFIX,
)

EXPECTED_SITEMAP_PATH = "sitemap-0.xml"
EXPECTED_SITEMAP_URL = f"{PROJECT_URL}/{EXPECTED_SITEMAP_PATH}"
logger = getLogger(__name__)


def test_sitemap_index() -> None:
    """Test the sitemap index XML file."""
    # Act
    sitemap_index_response = get(f"{PROJECT_URL}/sitemap.xml", timeout=5)
    assert sitemap_index_response.status_code == 200
    # Assert
    assert sitemap_index_response.headers["Content-Type"] == EXPECTED_XML_CONTENT_TYPE
    sitemap_index_element = fromstring(sitemap_index_response.content)
    assert (
        sitemap_index_element.tag
        == "{http://www.sitemaps.org/schemas/sitemap/0.9}sitemapindex"
    )
    sitemap_element = sitemap_index_element.find(
        "{http://www.sitemaps.org/schemas/sitemap/0.9}sitemap"
    )
    loc_element = sitemap_element.find(
        "{http://www.sitemaps.org/schemas/sitemap/0.9}loc"
    ).text
    assert loc_element == f"{SITEMAP_URL_PREFIX}/{EXPECTED_SITEMAP_PATH}"


def test_sitemap() -> None:
    """Test the sitemap XML file."""
    # Act
    sitemap_response = get(EXPECTED_SITEMAP_URL, timeout=5)
    assert sitemap_response.status_code == 200
    # Assert
    assert sitemap_response.headers["Content-Type"] == EXPECTED_XML_CONTENT_TYPE
    sitemap_element = fromstring(sitemap_response.content)
    assert sitemap_element.tag == "{http://www.sitemaps.org/schemas/sitemap/0.9}urlset"


def test_sitemap_urls() -> None:
    """Test the URLs in the sitemap XML file."""
    # Act
    sitemap_response = get(EXPECTED_SITEMAP_URL, timeout=5)
    assert sitemap_response.status_code == 200

    sitemap_element = fromstring(sitemap_response.content)
    for url_element in sitemap_element.findall(
        "{http://www.sitemaps.org/schemas/sitemap/0.9}url"
    ):
        loc_element = url_element.find(
            "{http://www.sitemaps.org/schemas/sitemap/0.9}loc"
        )
        assert loc_element.text.startswith(SITEMAP_URL_PREFIX)
        response = get(loc_element.text, timeout=5)
        assert response.status_code == 200
