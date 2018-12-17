package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

/**
 * @author r.moharana
 * this is main runner class for API Test
 */
@RunWith(Cucumber.class)
@CucumberOptions(features="APIFeatures", 
				glue={"StepDefinitions"},
				plugin={"pretty", "html:Test-Output"},
				monochrome=true)

public class TestRunner {	
	
   
}
