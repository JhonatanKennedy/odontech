Feature: Create new users
As a user
I want register in the app

Scenario: Show success message after create a user
    Given I am at the register page
    And I insert all the user data
    When I submit the data
    And I successfully register an user
    Then I should see a success messsage
