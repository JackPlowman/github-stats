from pathlib import Path

from polars import DataFrame
from structlog import get_logger, stdlib

from .catalogued_repository import CataloguedRepository
from .github_interactions import clone_repo, retrieve_repositories

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
            "repository_name": [repository.repository_name for repository in list_of_repositories],
            "total_files": [repository.total_files for repository in list_of_repositories],
        }
    ).write_csv("statistics/repository_statistics.csv")


def create_repository_statistics(repository_name: str, path_to_repo: str) -> CataloguedRepository:
    """Create statistics for a repository."""
    logger.info("Analysing repository", repository_name=repository_name)
    file_count = 0
    iterator = Path(path_to_repo).walk()
    for root, _dirs, files in iterator:
        for file in files:
            file_count += 1
            file_path = f"{root.__str__()}/{file}"
            logger.debug("Analysing file", file_path=file_path)
    return CataloguedRepository(repository_name, file_count)
