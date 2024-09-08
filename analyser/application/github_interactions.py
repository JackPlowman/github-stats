from __future__ import annotations

from os import getenv
from pathlib import Path

from git import Repo
from github import Github, PaginatedList, Repository


def clone_repo(owner_name: str, repository_name: str) -> str:
    """Clone the repository and return the path to the repository.

    Uses existing clone if available in analyser/cloned_repositories.

    Args:
        owner_name (str): The owner name of the repository.
        repository_name (str): The repository name.

    Returns:
        str: The path to the repository.
    """
    file_path = f"repos/{repository_name}"
    if not Path.exists(Path(file_path)):
        repo_url = f"https://github.com/{owner_name}/{repository_name}.git"
        Repo.clone_from(repo_url, Path(file_path))
        print(f"Cloned repository {owner_name}/{repository_name}")

    return file_path


def retrieve_repositories() -> PaginatedList[Repository]:
    """Retrieve the list of repositories to analyse.

    Returns:
        PaginatedList[Repository]: The list of repositories.
    """
    user = getenv("REPOSITORY_OWNER", "")
    if user == "":
        msg = "REPOSITORY_OWNER environment variable is not set."
        raise ValueError(msg)
    token = getenv("GITHUB_TOKEN", "")
    if token == "":
        github = Github()
        print("Using unauthenticated GitHub API")
    else:
        github = Github(token)
        print("Using authenticated GitHub API")
    repositories = github.search_repositories(query=f"user:{user} archived:false")
    print(
        f"Repositories found repositories_count={repositories.totalCount}, "
        f"repositories={[repository.full_name for repository in repositories]}"
    )
    return repositories
