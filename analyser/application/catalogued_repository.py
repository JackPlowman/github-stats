from dataclasses import dataclass

from .analysis.repository_languages import RepositoryLanguages


@dataclass
class CataloguedRepository:
    """A catalogued repository."""

    repository_name: str
    total_files: int
    total_commits: int
    languages: RepositoryLanguages
