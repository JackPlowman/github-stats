"""Application entry point."""

from .statistics import create_statistics


def main() -> None:
    """Entrypoint for Application."""
    try:
        create_statistics()
    except Exception as error:
        print(f"An error occurred during the execution of the analyser. {error}")
        raise


if __name__ == "__main__":
    main()
