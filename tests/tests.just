install:
    poetry install

run:
    poetry run pytest --gherkin-terminal-reporter -vv
