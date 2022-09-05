Feature: Customer should be able to add items to the list and remove them as necessary,

    Background:
        Given I am on the heroku add elements page
        And the elements list is empty

    Scenario: Adding Items
        When I add 3 elements to the page
        Then I should see 3 elements in the list

    Scenario: Removing Items
        Given I add elements to the page
        And elements are in the list
        When I remove elements from the page
        Then I should see less elements in the list