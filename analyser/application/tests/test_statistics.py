from ..statistics import create_statistics, create_repository_statistics
from unittest.mock import MagicMock, patch
FILE_PATH = "analyser.application.statistics"


@patch(f"{FILE_PATH}.retrieve_repositories")
@patch(f"{FILE_PATH}.clone_repo")
@patch(f"{FILE_PATH}.create_repository_statistics")
@patch(f"{FILE_PATH}.DataFrame")
def test_create_statistics(
    mock_data_frame: MagicMock,
    mock_create_repository_statistics: MagicMock,
    mock_clone_repo: MagicMock,
    mock_retrieve_repositories: MagicMock,
) -> None:
    # Arrange
    repository=MagicMock()
    repository.owner.login =owner= "JackPlowman"
    repository.name =repo_name= "github-stats-prototype"
    mock_retrieve_repositories.return_value = [repository]
    mock_clone_repo.return_value = "TestPath"
    mock_create_repository_statistics.return_value = MagicMock(repository_name="Test1", total_files=10)
    # Act
    create_statistics()
    # Assert
    mock_retrieve_repositories.assert_called_once_with()
    mock_clone_repo.assert_called_once_with(owner, repo_name)
    mock_create_repository_statistics.assert_called_once_with(repo_name, "TestPath")
    mock_data_frame.assert_called_once_with(
        {
            "repository_name": ["Test1"],
            "total_files": [10],
        }
    )


def test_create_repository_statistics() -> None:
    # Arrange
    repository_name = "Test1"
    path_to_repo = "TestPath"
    # Act
    catalogued_repository = create_repository_statistics(repository_name, path_to_repo)
    # Assert
    assert catalogued_repository.repository_name == repository_name
    assert catalogued_repository.total_files == 0
