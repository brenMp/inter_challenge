@ui @buy
Feature: Attempt to buy iPhone 13 prompts login
  In order to purchase an iPhone 13
  A guest user should be prompted to log in when trying to buy

  Background:
    Given I am on the Mercado Libre Argentina home page

  Scenario: Guest user starts purchase flow
  When I search for "iPhone 13"
  And I filter results by storage "{ENV}"
  And I open the first result
  And I click Buy Now
  Then I should be asked to log in
