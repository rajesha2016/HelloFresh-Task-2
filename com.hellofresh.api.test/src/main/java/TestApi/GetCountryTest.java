package TestApi;

import FrameworkLibraries.FileReaderLibrary;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import static io.restassured.RestAssured.given;
import org.hamcrest.Matchers;

import static io.restassured.RestAssured.get;

/**
 * @author r.moharana
 * this class helps in doing all activities on GETCOUNTRYLIST api
 * rest assured POJO
 */
public class GetCountryTest {
	
	private Response apiResponse;
    private String baseURI=FileReaderLibrary.getInstance().getConfigReader().getBaseURI();
    private String getPath=FileReaderLibrary.getInstance().getConfigReader().getBasePath();
    private String allCountryPath=FileReaderLibrary.getInstance().getConfigReader().getAllCountryPath();
    private String allSingleCountryPath=FileReaderLibrary.getInstance().getConfigReader().getSingleCountryPath();
    
    public void setup_GetAPI(){
    	
    	RestAssured.baseURI=baseURI;
    	RestAssured.basePath=getPath;
    	given().contentType(ContentType.JSON);
    }
    
    //keep the response of all country list by providing proper path
    public void get_AllCountry(){
    	
    	apiResponse=get_ResponseAllCountryByPath(allCountryPath);
    }
    
    //return response for all country list
    public Response get_ResponseAllCountryByPath(String allCountry){
    	
    	return get(allCountry);
    }
    
    //keep the response of single country
    public void get_SingleCountry(String singleCountryName){
    	
    	apiResponse=get_ResponseSingleCountryByPath(allSingleCountryPath, singleCountryName);
    			
    }
    
    //return response for single country
    public Response get_ResponseSingleCountryByPath(String single, String countryName){
    	
    	return get(single+countryName);
    }
    
    //verify response status code and validate
    public boolean verify_StatusCode(){
    	
    	if(apiResponse.getStatusCode()==200) return true;
    	else return false;
    }
    
    //all country validation
    public void verify_AllCountry(String countryName){
    	    	
    	apiResponse.
    	then().
    	assertThat().
    	body("RestResponse.result.find{res->res.name == \""+ countryName +"\"}.name", Matchers.equalTo(countryName));
    }
    
    //single country validation
    public void verify_SingleCountry(String singleCountryName){
    	
    	apiResponse.
    	then().
    	assertThat().
    	body("RestResponse.result.name",Matchers.equalTo(singleCountryName));
    	System.out.println("single country validated");
    }

}
