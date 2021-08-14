@Edit_medical_record @javascript
Feature: Edit medical record
As a Admin
I want to edit an existent medical record

Scenario: Show a message of success after edit a medical record
    Given I am at medical records page
    And I clicked on the medical record that a want to edit
    When I change what i want 
    Then I should see a message of success