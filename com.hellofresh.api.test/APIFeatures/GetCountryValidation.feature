#author: RAJESHA KUMAR MOHARANA
Feature: As a automation developer

Scenario Outline: Validate user get all countries and validate
	Given User has access to valid API
	When User send GET request to access countries
	Then User get OK response for given parameter
	And Country "<countryname>" is in response
	
	Examples:
	|countryname|
	|United States of America|
	|Germany|
	|United Kingdom of Great Britain and Northern Ireland|
	
Scenario Outline: Validate user get single country and response
	Given User has access to valid API
	When User send GET request with country code "<countrycode>" to access single country
	Then User get OK response for given parameter
	And User get above country "<countryname>" in response
	
	Examples:
	|countrycode|countryname|
	|US|United States of America|
	|DE|Germany|
	|GB|United Kingdom of Great Britain and Northern Ireland|
	
Scenario Outline: Validate response for inexistent country
	Given User has access to valid API
	When User send GET request to access countries
	Then User get OK response for given parameter
	And User get response to inexistent country "<countryname>"
	
	Examples:
	|countryname|
	|Bangalore|