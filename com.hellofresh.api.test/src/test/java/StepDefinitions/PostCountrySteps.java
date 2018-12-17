package StepDefinitions;

import TestApi.PostCountryTest;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * @author r.moharana
 * POST country steps
 */
public class PostCountrySteps {
	
	PostCountryTest postCountryTest;
	
	public PostCountrySteps() {
		
		postCountryTest=new PostCountryTest();
	}
	
	@Given("^User has POST api key$")
	public void user_has_POST_api_key() throws Throwable {
	    
	    postCountryTest.set_BasePostPath();
	    System.out.println("POST request path set up successful");
	}

	@When("^User sends POST request with new country$")
	public void user_sends_POST_request_with_new_country() throws Throwable {
	    
	    postCountryTest.set_RequestBody();
	    postCountryTest.set_HeaderParams();
	    postCountryTest.postResponse();
	    System.out.println("POST request body, params and capturing response successful");
	}

	@Then("^User receives OK response for given params$")
	public void user_receives_OK_response_for_given_params() throws Throwable {
	    
	    postCountryTest.verify_PostStatus();
	    System.out.println("POST request status validated");
	}

	@And("^User validate response$")
	public void user_validate_response() throws Throwable {
	    
		postCountryTest.verify_PostResponse();
		System.out.println("POST request resonse validated but it will fail. Since the POST is not working now");
	}

}
