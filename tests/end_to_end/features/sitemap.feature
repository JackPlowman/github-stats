Feature: Sitemap

Scenario: Check sitemap index
  When I request the sitemap index
  Then the sitemap index should be xml
  And the sitemap index should link to the sitemap

Scenario: Check sitemap
  When I request the sitemap
  Then the sitemap should be xml
  And the sitemap should contain the project urls
  And the project urls should be valid
