from defusedxml.ElementTree import fromstring
from pytest_bdd import scenarios, then, when
from requests import Response, get

from end_to_end.utils.variables import PROJECT_URL

scenarios("../features/sitemap.feature")

EXPECTED_SITEMAP_PATH = "sitemap-0.xml"
EXPECTED_SITEMAP_URL = f"{PROJECT_URL}/{EXPECTED_SITEMAP_PATH}"


@when("I request the sitemap index", target_fixture="sitemap_index_response")
def step_impl() -> Response:
    """Checks the sitemap.

    Returns:
        Response: The response from the request.
    """
    response = get(f"{PROJECT_URL}/sitemap-index.xml", timeout=10)
    assert response.status_code == 200
    return response


@then("the sitemap index should be xml")
def step_impl(sitemap_index_response: Response) -> None:
    """Checks the sitemap is xml.

    Args:
        sitemap_index_response (Response): The response from the request.
    """
    assert sitemap_index_response.headers["Content-Type"] == "application/xml"


@then("the sitemap index should link to the sitemap")
def step_impl(sitemap_index_response: Response) -> None:
    """Checks the sitemap is valid xml.

    Args:
        sitemap_index_response (Response): The response from the request.
    """
    assert sitemap_index_response.headers["Content-Type"] == "application/xml"
    sitemap_index_element = fromstring(sitemap_index_response.content)
    assert sitemap_index_element.tag == "{http://www.sitemaps.org/schemas/sitemap/0.9}sitemapindex"
    sitemap_element = sitemap_index_element.find("{http://www.sitemaps.org/schemas/sitemap/0.9}sitemap")
    loc_element = sitemap_element.find("{http://www.sitemaps.org/schemas/sitemap/0.9}loc").text
    assert loc_element == EXPECTED_SITEMAP_URL


@when("I request the sitemap", target_fixture="sitemap_response")
def step_impl() -> Response:
    """Checks the sitemap.

    Returns:
        Response: The response from the request.
    """
    response = get(EXPECTED_SITEMAP_URL, timeout=10)
    assert response.status_code == 200
    return response


@then("the sitemap should be xml")
def step_impl(sitemap_response: Response) -> None:
    """Checks the sitemap is xml.

    Args:
        sitemap_response (Response): The response from the request.
    """
    assert sitemap_response.headers["Content-Type"] == "application/xml"


@then("the sitemap should contain the project urls")
def step_impl(sitemap_response: Response) -> None:
    """Checks the sitemap is xml.

    Args:
        sitemap_response (Response): The response from the request.
    """
    assert sitemap_response.headers["Content-Type"] == "application/xml"
    sitemap_element = fromstring(sitemap_response.content)
    assert sitemap_element.tag == "{http://www.sitemaps.org/schemas/sitemap/0.9}urlset"
    assert len(sitemap_element.findall("{http://www.sitemaps.org/schemas/sitemap/0.9}url")) > 0


@then("the project urls should be valid")
def step_impl(sitemap_response: Response) -> None:
    """Checks the sitemap is xml.

    Args:
        sitemap_response (Response): The response from the request.
    """
    sitemap_element = fromstring(sitemap_response.content)
    assert sitemap_element.tag == "{http://www.sitemaps.org/schemas/sitemap/0.9}urlset"
    for url_element in sitemap_element.findall("{http://www.sitemaps.org/schemas/sitemap/0.9}url"):
        loc_element = url_element.find("{http://www.sitemaps.org/schemas/sitemap/0.9}loc")
        assert loc_element.text.startswith(PROJECT_URL)
        response = get(loc_element.text, timeout=10)
        assert response.status_code == 200
