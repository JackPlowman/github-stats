from os import getenv

PROJECT_URL = getenv("PROJECT_URL") if getenv("PROJECT_URL") else "https://jackplowman.github.io/github-stats"


def docker_translation(url: str) -> str:
    """Translates a url from the host machine to the docker container.

    Args:
        url (str): The url to translate.

    Returns:
        str: The translated url.
    """
    if "host.docker.internal" not in url and "localhost" not in url:
        return url
    if "host.docker.internal" in url:
        return url.replace("host.docker.internal", "localhost")
    return url.replace("localhost", "host.docker.internal")
