@create_medical_record @javascript
Feature: Create new medical record
As a Admin
I want to create a medical record

Background: 
    Given I am at the register of the medical record
    And I insert all the medical record data 

Scenario: Show success message after create a new medical record
    When I submit the data 
    Then I should see a success message

Scenario: Show error message after create a new medical record
    When I submit the data missing one input
    Then I should see a error message
    