@create_users @javascript
Feature: Create new users
As a user
I want register in the app

Background:
    Given I am at the register page
    And I insert all the user data

Scenario: Show success message after create a user
    When I submit the data
    And I successfully register an user
    Then I should see a success messsage

Scenario: Show an error message after put an invalid email
    And I put the wrong email
    When I submit the data
    Then I should see an error message
