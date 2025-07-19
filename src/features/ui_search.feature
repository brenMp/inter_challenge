@ui @smoke
Feature: Personalized iPhone 13 Search in Mercado Libre (MLA)
  As a user interested in purchasing an iPhone 13 in a specific storage size
  I want to search on Mercado Libre Argentina and refine results
  So that I can evaluate buying options

  Background:
    Given I am on the Mercado Libre Argentina home page

  @storage
  Scenario Outline: Search iPhone 13 by storage size
    When I search for "iPhone 13 <storage>"
    Then I should see search results that contain "iPhone 13"

    Examples:
      | storage |
      | 128 GB  |
      | 256 GB  |

  @negative @intentional-failure
  Scenario: Intentional failure – expect wrong message for nonsense search
    When I search for "ZZZ-Phone-Does-Not-Exist"
    Then I should see search results that contain "iPhone 133"
