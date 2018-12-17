# HelloFresh-Task-2

# Project Summary:

This framework uses Selenium WebDriver-Cucumber-Junit-Maven with Page Object Model.

•	Src/main/java- contain all framework related file such as API action(logic & POJO), PageObjectLibrary, FileReaderLibrary, ConfigFileReader,TestFileReader(to read json file), API utilities

•	Test data logic is present inside Src/main/java > TestApi package for given GET & POST api.

•	Src/test/java- contain framework runner class and step definition files.

•	APIFeatures folder contain feature file, which is used to write business scenarios.

•	Config folder contain properties file & POST body josn files.


### Feature File:
•	Cucumber feature file "GetCountryValidation.feature" has all GET api related scenarios.

•	Cucumber feature file "PostCountryValidation.feature" has all POST api related scenarios.


# How to Execute Test:

### Option#1:
•	Clone the project from GitHub: https://github.com/rajesha2016/HelloFresh-Task-2.git to your IDE( I have used Eclipse) 

•	Go to \src\test\java\Runner package

•	Right click on TestRunner.java file and run as junit


### Option#2:
•	Open command prompt

•	Go to project directory

•	Type mvn install, once completed type mvn test


# Parallel Execution:

•	Cucumber plugin- replace the maven-surefire plugin with below and it will run parallelly. 

<plugin>
  
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-surefire-plugin</artifactId>
    <version>2.19</version>
    <configuration>
        <forkCount>10</forkCount>
        <reuseForks>true</reuseForks>
        <includes>
            <include>**/TestRunner.java</include>
        </includes>
    </configuration>
</plugin>

### Report:

•	Cucumber will generate report after execution inside "\com.hellofresh.api.test\Test-Output" in index.html
