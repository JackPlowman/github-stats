#checkov:skip=CKV_DOCKER_2
#checkov:skip=CKV_DOCKER_3
FROM python:3.12-slim

WORKDIR /
COPY poetry.lock pyproject.toml ./

RUN pip install --no-cache-dir poetry==1.8.3 \
  && poetry install \
  && mkdir -p /end_to_end

