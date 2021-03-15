Feature: Check the installation of the protractor framework

    @PlanetSearchWithFullName
    Scenario: Planet Search with Full keyword
        Given The app is open on "localhost"
        And the heading must be displayed in the homepage
        And the heading must have the text as "The Star Wars Search"
        When planet option is selected
        And "Felucia" is input in the search box
        And the search button is clicked
        Then the planet name "Felucia" must be displayed in the result set
        Then the planet population must be present
        Then the planet climate must be present
        Then the planet gravity must be present

    @PlanetSearchWithPartialName
    Scenario: Planet Search with Partial Search
        Given The app is open on "localhost"
        And the heading must be displayed in the homepage
        And the heading must have the text as "The Star Wars Search"
        When planet option is selected
        And "b" is input in the search box
        And the search button is clicked
        Then the no of planet in result set must be "5" in number

    @PlanetSearchWithNotFound
    Scenario: Planet not found
        Given The app is open on "localhost"
        And the heading must be displayed in the homepage
        And the heading must have the text as "The Star Wars Search"
        When planet option is selected
        And "x" is input in the search box
        And the search button is clicked
        Then the planet name not found text is displayed

    Scenario: After clearing the search the planet result set must not dispalyed
        Given The app is open on "localhost"
        And the heading must be displayed in the homepage
        And the heading must have the text as "The Star Wars Search"
        When planet option is selected
        And "Felucia" is input in the search box
        And the search button is clicked
        When the planet name "Felucia" must be displayed in the result set
        And the remove the text from searchBox
        And the search button is clicked
        Then the result set must not be displayed

Scenario: People not found with same name as planet
        Given The app is open on "localhost"
        And the heading must be displayed in the homepage
        And the heading must have the text as "The Star Wars Search"
        When planet option is selected
        And "Bespin" is input in the search box
        And the search button is clicked
        Then the planet name "Bespin" must be displayed in the result set
        When people option is selected
        And the search button is clicked
        Then the people name not found text is displayed
