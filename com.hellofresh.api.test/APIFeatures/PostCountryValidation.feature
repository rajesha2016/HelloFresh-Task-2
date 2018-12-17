#author: Rajesha Kumar Moharana
Feature: New Country addition

Scenario: Validate use can add new country to list
	Given User has POST api key
	When User sends POST request with new country
	Then User receives OK response for given params
	And User validate response