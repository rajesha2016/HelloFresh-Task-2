package DataProviders;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;

/**
 * @author r.moharana
 * This class helps to get properties file data and supply to API scripts
 */
public class ConfigFileReader {
	
	 private Properties properties;
	 private final String propertyFilePath= "Config//Configuration.properties";
	 
	//constructor to initialize properties
	 public ConfigFileReader(){
		 
		 BufferedReader reader;
		 try {
			 reader = new BufferedReader(new FileReader(propertyFilePath));
			 properties = new Properties();
			 try {
				 properties.load(reader);
				 reader.close();
			 } catch (IOException e) {
				 e.printStackTrace();
			 }
		 } catch (FileNotFoundException e) {
			 e.printStackTrace();
			 throw new RuntimeException("configuration.properties not found at " + propertyFilePath);
	 	 } 
	 }
	 
	 //method to get base uri
	 public String getBaseURI(){
		 
		 String uri = properties.getProperty("baseuri");
		 if(uri != null) return uri;
		 else throw new RuntimeException("baseuri not specified in the configuration.properties file.");
	 }
	 
	//method to get base path for GET
	 public String getBasePath(){
		 
		 String basePath = properties.getProperty("getPath");
		 if(basePath != null) return basePath;
		 else throw new RuntimeException("getPath not specified in the configuration.properties file.");
	 }
	 
	//method to get all country path
	 public String getAllCountryPath(){
		 
		 String allCountryPath = properties.getProperty("allCountryPath");
		 if(allCountryPath != null) return allCountryPath;
		 else throw new RuntimeException("allCountryPath not specified in the configuration.properties file.");
	 }
	 
	//method to get single country path
	 public String getSingleCountryPath(){
		 
		 String singleCountryPath = properties.getProperty("singleCountryPath");
		 if(singleCountryPath != null) return singleCountryPath;
		 else throw new RuntimeException("singleCountryPath not specified in the configuration.properties file.");
	 }
	 
	//method to get POST API path
	 public String getPostPath(){
		 
		 String postPath = properties.getProperty("postPath");
		 if(postPath != null) return postPath;
		 else throw new RuntimeException("postPath not specified in the configuration.properties file.");
	 }

}
