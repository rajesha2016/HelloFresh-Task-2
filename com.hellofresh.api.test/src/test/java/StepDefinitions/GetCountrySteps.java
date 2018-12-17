package StepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import TestApi.GetCountryTest;


/**
 * @author r.moharana
 * GET all country steps class
 */
public class GetCountrySteps {
	
	GetCountryTest getCountryTest;
	
	public GetCountrySteps() {
		
		getCountryTest=new GetCountryTest();
	}
	
	
	@Given("^User has access to valid API$")
	public void user_has_access_to_valid_API() throws Throwable {
	    
		getCountryTest.setup_GetAPI();
		System.out.println("GET api set up successful");	    
	}

	@When("^User send GET request to access countries$")
	public void user_send_GET_request_to_access_countries() throws Throwable {
	    
	    getCountryTest.get_AllCountry();
	    System.out.println("GET api request to access all countries");
	    
	}

	@Then("^User get OK response for given parameter$")
	public void user_get_OK_response_for_given_parameter() throws Throwable {
	    
		getCountryTest.verify_StatusCode();
		System.out.println("GET api request return status 200");
	    
	}

	@And("^Country \"([^\"]*)\" is in response$")
	public void country_is_in_response(String countryName) throws Throwable {
		
	    getCountryTest.verify_AllCountry(countryName); 
	    System.out.println("GET request for list of countries validated successfully ");
	}

	
	@When("^User send GET request with country code \"([^\"]*)\" to access single country$")
	public void user_send_GET_request_with_country_code_to_access_single_country(String singleCountry) throws Throwable {
	    
	    getCountryTest.get_SingleCountry(singleCountry);
	    System.out.println("GET api request to single country sucessfull");
	    
	}

	@And("^User get above country \"([^\"]*)\" in response$")
	public void user_get_above_country_in_response(String singleCountryName) throws Throwable {
	    
		getCountryTest.verify_SingleCountry(singleCountryName);
		System.out.println("GET api request validated single provided country");
		
	}

	@And("^User get response to inexistent country \"([^\"]*)\"$")
	public void user_get_response_to_inexistent_country(String inexistentCountryName) throws Throwable {
	    
		getCountryTest.verify_AllCountry(inexistentCountryName);
		System.out.println("GET api request to inexistent country and it will throw error");
	}

}
