package TestApi;

import java.util.HashMap;
import java.util.Map;

import org.hamcrest.Matchers;

import FrameworkLibraries.FileReaderLibrary;
import Utilities.ApiUtilities;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import static io.restassured.RestAssured.given;

/**
 * @author r.moharana
 * this class helps in doing all POST api activities
 * rest assured POJO
 */
public class PostCountryTest {
	
	private Response apiResponse;
	private String baseURI=FileReaderLibrary.getInstance().getConfigReader().getBaseURI();
	private String postPath=FileReaderLibrary.getInstance().getConfigReader().getPostPath();
	
	Map<String, String> headerParameter=new HashMap<String, String>();
	ApiUtilities apiUtil=new ApiUtilities();
	
	public void set_BasePostPath(){
		
		RestAssured.baseURI=baseURI;
		RestAssured.basePath=postPath;
	}
	
	//set the POST method params
	public void set_HeaderParams(){
		
		given().
		headers("Content-Type", "application/json");
	}
	
	//set request body of POST method
	public void set_RequestBody(){
		
		given().
		body(apiUtil.getPostRequestBody("PostBody.json"));
	}
	
	//keep the POST response
	public void postResponse(){
		
		apiResponse=given().post(baseURI+postPath);
	}
	
	//validate POST status 
	public boolean verify_PostStatus(){
		
		if(apiResponse.getStatusCode()==200) return true;
		else return false;
	}

	//validate POST method response
	//it will fail as the text is not present. I am expecting this kind of message
	public void verify_PostResponse(){
		
		apiResponse.then().assertThat().body("RestResponse.messages", Matchers.equalTo("New Country created successfully"));
	}
}
