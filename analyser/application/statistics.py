from pathlib import Path

import git
from polars import DataFrame
from structlog import get_logger, stdlib

from .catalogued_repository import CataloguedRepository
from .utils.github_interactions import clone_repo, retrieve_repositories
from .utils.repository_actions import remove_excluded_files

logger: stdlib.BoundLogger = get_logger()


def create_statistics() -> None:
    """Create statistics."""
    # Retrieve the list of repositories to analyse
    repositories = retrieve_repositories()
    # Set up data frame
    list_of_repositories = []
    # Create statistics for each repository
    for repository in repositories:
        owner_name, repository_name = repository.owner.login, repository.name
        # Clone the repository to analyser/cloned_repositories
        path = clone_repo(owner_name, repository_name)
        # Create statistics for the repository
        catalogued_repository = create_repository_statistics(repository_name, path)
        list_of_repositories.append(catalogued_repository)
    logger.info("List of repositories", list_of_repositories=list_of_repositories)
    DataFrame(
        {
            "repository": [repository.repository_name for repository in list_of_repositories],
            "total_files": [repository.total_files for repository in list_of_repositories],
            "total_commits": [repository.total_commits for repository in list_of_repositories],
        }
    ).write_json("statistics/repository_statistics.json")


def create_repository_statistics(repository_name: str, path_to_repo: str) -> CataloguedRepository:
    """Create statistics for a repository.

    Args:
        repository_name (str): The name of the repository.
        path_to_repo (str): The path to the repository.

    Returns:
        CataloguedRepository: The catalogued repository.
    """
    logger.info("Analysing repository", repository_name=repository_name)
    file_count = 0
    # Retrieve the total number of commits
    repo = git.Repo(path_to_repo)
    total_commits = int(repo.git.rev_list("--count", "HEAD"))
    # Remove excluded files
    remove_excluded_files(path_to_repo)
    # Count the number of files
    iterator = Path(path_to_repo).walk()
    for root, _dirs, files in iterator:
        for file in files:
            file_count += 1
            file_path = f"{root.__str__()}/{file}"
            logger.debug("Analysing file", file_path=file_path)
    # Return the catalogued repository
    return CataloguedRepository(repository_name, file_count, total_commits)
