from dataclasses import dataclass


@dataclass
class CataloguedRepository:
    """A catalogued repository."""

    repository_name: str
    total_files: int
    total_commits: int
