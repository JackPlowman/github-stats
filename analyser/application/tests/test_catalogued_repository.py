from analyser.application.catalogued_repository import CataloguedRepository


def test_catalogued_repository() -> None:
    # Arrange
    repository_name = "Test1/Test2"
    total_files = 10
    # Act
    catalogued_repository = CataloguedRepository(repository_name, total_files)
    # Assert
    assert catalogued_repository.repository_name == repository_name
    assert catalogued_repository.total_files == total_files
