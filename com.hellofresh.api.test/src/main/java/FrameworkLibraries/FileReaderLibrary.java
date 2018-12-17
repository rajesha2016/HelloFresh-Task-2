package FrameworkLibraries;

import DataProviders.ConfigFileReader;
import DataProviders.TestFileReader;

/**
 * @author r.moharana
 * This class is a singleton class
 * This will help if framework has multiple external files like properties, json
 * Hold single instance of class till execution
 */
public class FileReaderLibrary {
	
	private static FileReaderLibrary fileReaderManager = new FileReaderLibrary();
	private static ConfigFileReader configFileReader;
	private static TestFileReader testFileReader;
	 
	private FileReaderLibrary() { }
	 
	public static FileReaderLibrary getInstance( ) {
		
		return fileReaderManager;
	}
	 
	//initialize ConfigFileReader object, if already present then return the current instance.
	public ConfigFileReader getConfigReader() {
		 
		 return (configFileReader == null) ? new ConfigFileReader() : configFileReader;
	}
	
	//initialize TestFileReader object, if already present then return the current instance.
	public TestFileReader getTestFileReader(){
		
		return (testFileReader == null) ? new TestFileReader() : testFileReader;
	}

}
