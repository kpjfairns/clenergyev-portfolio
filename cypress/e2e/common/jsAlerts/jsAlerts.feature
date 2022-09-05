Feature: Customer should be able to interact with the web alerts

    Scenario Outline: Can Interact
        Given I am on the heroku alerts page
        When I interact with the <alert> alert
        Then I should see an <alert> alert

            Scenarios:
            | alert   |
            | alert   |
            | confirm |
            | prompt  |