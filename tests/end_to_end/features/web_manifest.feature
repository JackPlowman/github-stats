Feature: Web Manifest

  Scenario: Check web manifest with .webmanifest extension
    When I request the web manifest with .webmanifest extension
    Then the web manifest with .webmanifest extension should be json
