from logging import getLogger

from pytest_bdd import scenarios, then, when
from requests import Response, get

from end_to_end.utils.variables import EXPECTED_WEBMANIFEST_JSON_CONTENT_TYPE, PROJECT_URL

scenarios("../features/web_manifest.feature")

logger = getLogger(__name__)


@when("I request the web manifest with .webmanifest extension", target_fixture="web_manifest_webmanifest_response")
def step_impl() -> Response:
    """Checks the web manifest with .webmanifest extension.

    Returns:
        Response: The response from the request.
    """
    response = get(f"{PROJECT_URL}/manifest.webmanifest", timeout=10)
    assert response.status_code == 200
    return response


@then("the web manifest with .webmanifest extension should be json")
def step_impl(web_manifest_webmanifest_response: Response) -> None:
    """Checks the web manifest with .webmanifest extension is json.

    Args:
        web_manifest_webmanifest_response (Response): The response from the request.
    """
    assert web_manifest_webmanifest_response.headers["Content-Type"] == EXPECTED_WEBMANIFEST_JSON_CONTENT_TYPE
