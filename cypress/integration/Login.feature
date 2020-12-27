Feature: Login As a User

    I want to login as a user

    Scenario: Login As a User
        Given I navigate to the website
        When I click on User Login Button
                | username | password |
                | farukakyol3480@gmail.com | admin123|
        And Validate the page title
