"""Application entry point."""

from pathlib import Path
from shutil import rmtree

from structlog import get_logger, stdlib

from .statistics import create_statistics

logger: stdlib.BoundLogger = get_logger()


def main() -> None:
    """Entrypoint for Application."""
    try:
        create_statistics()
        clean_up()
    except Exception as error:
        logger.exception("An error occurred during the execution of the analyser.", error=error)
        raise


def clean_up() -> None:
    """Clean up."""
    objects = Path("cloned_repositories")
    to_delete = [obj for obj in objects.iterdir() if obj.is_dir()]
    for repository in to_delete:
        logger.debug("Removing directory", directory_path=repository)
        rmtree(repository)


if __name__ == "__main__":
    main()
