@api @smoke
Feature: Mercado Libre public catalog endpoints sanity
  Validate configuration, currencies and countries endpoints respond correctly.

  Scenario: Validate MLA site data
    When I GET the MLA site configuration
    Then the site id should be "MLA"
    And the default currency id should be "ARS"

  Scenario: Validate currencies list is not empty
    When I GET the list of currencies
    Then the response should contain currency code "ARS"

  Scenario: Validate countries list is not empty
    When I GET the list of countries
    Then the response should contain country id "AR"
