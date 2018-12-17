package DataProviders;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

/**
 * @author r.moharana
 * this class is used to read JSON file
 */
public class TestFileReader {
	
	
	@SuppressWarnings("resource")
	public String readFromJsonFile(String filePath){
		
		BufferedReader reader =null;
		try {
			
			reader=new BufferedReader(new FileReader(new File(filePath)));
		
			StringBuilder sb = new StringBuilder();
			String line = reader.readLine();

			while (line != null) {
				sb.append(line);
				sb.append("\n");
				line = reader.readLine();
			}
			
			return sb.toString();
			
		} catch (IOException e) {
			
			e.printStackTrace();
			throw new RuntimeException(filePath+" not found in the project path");
		}
	}

}
