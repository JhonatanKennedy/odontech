@list_medical_records @javascript
Feature: List all medical record
As a user
I want to list all medical records

Background: 
    Given I am at the profile page
    And I enter at the medical record page
    When I enter it

Scenario: Show all the medical record 
    Then I should see a list of all the medical records

Scenario: Don't see any medical record
    Then I shouldn't see any medical record