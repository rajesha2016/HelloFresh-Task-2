package Utilities;

import FrameworkLibraries.FileReaderLibrary;


/**
 * @author r.moharana
 * 
 * this class helps in getting POST request body. Read the JSON file
 */
public class ApiUtilities 
{
	public String getPostRequestBody(String fileName) {
		
		try {

			String postBody = FileReaderLibrary.getInstance().getTestFileReader().readFromJsonFile("./Config/" + fileName);
			
			return postBody;

		} catch (Exception e) {
			
			e.printStackTrace();
			throw new RuntimeException("Invalid file name ");

		}
	}
}
