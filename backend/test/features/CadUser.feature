Feature: Create new users
As a user
I want register in the app

Scenario: Show success message after create a user
    Given I am at the register page
    And I provide below information during registeration:
    |name   |age |phone           | email            |password1 |password2  |text                           |
    |teste1 |11  |(11) 11111-1111 |teste@hotmail.com |1         |1          |Usuário cadastrado com sucesso!|
    When I submit the data
    Then I should see a text "Usuário cadastrado com sucesso!"