$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GetCountryValidation.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#author: RAJESHA KUMAR MOHARANA"
    }
  ],
  "line": 2,
  "name": "As a automation developer",
  "description": "",
  "id": "as-a-automation-developer",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Validate user get all countries and validate",
  "description": "",
  "id": "as-a-automation-developer;validate-user-get-all-countries-and-validate",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User has access to valid API",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User send GET request to access countries",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User get OK response for given parameter",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Country \"\u003ccountryname\u003e\" is in response",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "as-a-automation-developer;validate-user-get-all-countries-and-validate;",
  "rows": [
    {
      "cells": [
        "countryname"
      ],
      "line": 11,
      "id": "as-a-automation-developer;validate-user-get-all-countries-and-validate;;1"
    },
    {
      "cells": [
        "United States of America"
      ],
      "line": 12,
      "id": "as-a-automation-developer;validate-user-get-all-countries-and-validate;;2"
    },
    {
      "cells": [
        "Germany"
      ],
      "line": 13,
      "id": "as-a-automation-developer;validate-user-get-all-countries-and-validate;;3"
    },
    {
      "cells": [
        "United Kingdom of Great Britain and Northern Ireland"
      ],
      "line": 14,
      "id": "as-a-automation-developer;validate-user-get-all-countries-and-validate;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Validate user get all countries and validate",
  "description": "",
  "id": "as-a-automation-developer;validate-user-get-all-countries-and-validate;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User has access to valid API",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User send GET request to access countries",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User get OK response for given parameter",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Country \"United States of America\" is in response",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "GetCountrySteps.user_has_access_to_valid_API()"
});
formatter.result({
  "duration": 588402863,
  "status": "passed"
});
formatter.match({
  "location": "GetCountrySteps.user_send_GET_request_to_access_countries()"
});
formatter.result({
  "duration": 1534025704,
  "status": "passed"
});
formatter.match({
  "location": "GetCountrySteps.user_get_OK_response_for_given_parameter()"
});
formatter.result({
  "duration": 183091,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United States of America",
      "offset": 9
    }
  ],
  "location": "GetCountrySteps.country_is_in_response(String)"
});
formatter.result({
  "duration": 523027306,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Validate user get all countries and validate",
  "description": "",
  "id": "as-a-automation-developer;validate-user-get-all-countries-and-validate;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User has access to valid API",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User send GET request to access countries",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User get OK response for given parameter",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Country \"Germany\" is in response",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "GetCountrySteps.user_has_access_to_valid_API()"
});
formatter.result({
  "duration": 2707965,
  "status": "passed"
});
formatter.match({
  "location": "GetCountrySteps.user_send_GET_request_to_access_countries()"
});
formatter.result({
  "duration": 450742613,
  "status": "passed"
});
formatter.match({
  "location": "GetCountrySteps.user_get_OK_response_for_given_parameter()"
});
formatter.result({
  "duration": 96678,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Germany",
      "offset": 9
    }
  ],
  "location": "GetCountrySteps.country_is_in_response(String)"
});
formatter.result({
  "duration": 266749638,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Validate user get all countries and validate",
  "description": "",
  "id": "as-a-automation-developer;validate-user-get-all-countries-and-validate;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User has access to valid API",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User send GET request to access countries",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User get OK response for given parameter",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Country \"United Kingdom of Great Britain and Northern Ireland\" is in response",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "GetCountrySteps.user_has_access_to_valid_API()"
});
formatter.result({
  "duration": 2665586,
  "status": "passed"
});
formatter.match({
  "location": "GetCountrySteps.user_send_GET_request_to_access_countries()"
});
formatter.result({
  "duration": 450963117,
  "status": "passed"
});
formatter.match({
  "location": "GetCountrySteps.user_get_OK_response_for_given_parameter()"
});
formatter.result({
  "duration": 240038,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United Kingdom of Great Britain and Northern Ireland",
      "offset": 9
    }
  ],
  "location": "GetCountrySteps.country_is_in_response(String)"
});
formatter.result({
  "duration": 241439648,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Validate user get single country and response",
  "description": "",
  "id": "as-a-automation-developer;validate-user-get-single-country-and-response",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "User has access to valid API",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User send GET request with country code \"\u003ccountrycode\u003e\" to access single country",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User get OK response for given parameter",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User get above country \"\u003ccountryname\u003e\" in response",
  "keyword": "And "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "as-a-automation-developer;validate-user-get-single-country-and-response;",
  "rows": [
    {
      "cells": [
        "countrycode",
        "countryname"
      ],
      "line": 23,
      "id": "as-a-automation-developer;validate-user-get-single-country-and-response;;1"
    },
    {
      "cells": [
        "US",
        "United States of America"
      ],
      "line": 24,
      "id": "as-a-automation-developer;validate-user-get-single-country-and-response;;2"
    },
    {
      "cells": [
        "DE",
        "Germany"
      ],
      "line": 25,
      "id": "as-a-automation-developer;validate-user-get-single-country-and-response;;3"
    },
    {
      "cells": [
        "GB",
        "United Kingdom of Great Britain and Northern Ireland"
      ],
      "line": 26,
      "id": "as-a-automation-developer;validate-user-get-single-country-and-response;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Validate user get single country and response",
  "description": "",
  "id": "as-a-automation-developer;validate-user-get-single-country-and-response;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "User has access to valid API",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User send GET request with country code \"US\" to access single country",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User get OK response for given parameter",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User get above country \"United States of America\" in response",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "GetCountrySteps.user_has_access_to_valid_API()"
});
formatter.result({
  "duration": 2333506,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "US",
      "offset": 41
    }
  ],
  "location": "GetCountrySteps.user_send_GET_request_with_country_code_to_access_single_country(String)"
});
formatter.result({
  "duration": 454473307,
  "status": "passed"
});
formatter.match({
  "location": "GetCountrySteps.user_get_OK_response_for_given_parameter()"
});
formatter.result({
  "duration": 189713,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United States of America",
      "offset": 24
    }
  ],
  "location": "GetCountrySteps.user_get_above_country_in_response(String)"
});
formatter.result({
  "duration": 31637735,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Validate user get single country and response",
  "description": "",
  "id": "as-a-automation-developer;validate-user-get-single-country-and-response;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "User has access to valid API",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User send GET request with country code \"DE\" to access single country",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User get OK response for given parameter",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User get above country \"Germany\" in response",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "GetCountrySteps.user_has_access_to_valid_API()"
});
formatter.result({
  "duration": 2120616,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DE",
      "offset": 41
    }
  ],
  "location": "GetCountrySteps.user_send_GET_request_with_country_code_to_access_single_country(String)"
});
formatter.result({
  "duration": 438825779,
  "status": "passed"
});
formatter.match({
  "location": "GetCountrySteps.user_get_OK_response_for_given_parameter()"
});
formatter.result({
  "duration": 155942,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Germany",
      "offset": 24
    }
  ],
  "location": "GetCountrySteps.user_get_above_country_in_response(String)"
});
formatter.result({
  "duration": 24656091,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Validate user get single country and response",
  "description": "",
  "id": "as-a-automation-developer;validate-user-get-single-country-and-response;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "User has access to valid API",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User send GET request with country code \"GB\" to access single country",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User get OK response for given parameter",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User get above country \"United Kingdom of Great Britain and Northern Ireland\" in response",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "GetCountrySteps.user_has_access_to_valid_API()"
});
formatter.result({
  "duration": 4991476,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GB",
      "offset": 41
    }
  ],
  "location": "GetCountrySteps.user_send_GET_request_with_country_code_to_access_single_country(String)"
});
formatter.result({
  "duration": 499969705,
  "status": "passed"
});
formatter.match({
  "location": "GetCountrySteps.user_get_OK_response_for_given_parameter()"
});
formatter.result({
  "duration": 82109,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United Kingdom of Great Britain and Northern Ireland",
      "offset": 24
    }
  ],
  "location": "GetCountrySteps.user_get_above_country_in_response(String)"
});
formatter.result({
  "duration": 16248453,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Validate response for inexistent country",
  "description": "",
  "id": "as-a-automation-developer;validate-response-for-inexistent-country",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "User has access to valid API",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User send GET request to access countries",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User get OK response for given parameter",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User get response to inexistent country \"\u003ccountryname\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "as-a-automation-developer;validate-response-for-inexistent-country;",
  "rows": [
    {
      "cells": [
        "countryname"
      ],
      "line": 35,
      "id": "as-a-automation-developer;validate-response-for-inexistent-country;;1"
    },
    {
      "cells": [
        "Bangalore"
      ],
      "line": 36,
      "id": "as-a-automation-developer;validate-response-for-inexistent-country;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 36,
  "name": "Validate response for inexistent country",
  "description": "",
  "id": "as-a-automation-developer;validate-response-for-inexistent-country;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "User has access to valid API",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User send GET request to access countries",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User get OK response for given parameter",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User get response to inexistent country \"Bangalore\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "GetCountrySteps.user_has_access_to_valid_API()"
});
formatter.result({
  "duration": 1976593,
  "status": "passed"
});
formatter.match({
  "location": "GetCountrySteps.user_send_GET_request_to_access_countries()"
});
formatter.result({
  "duration": 508607118,
  "status": "passed"
});
formatter.match({
  "location": "GetCountrySteps.user_get_OK_response_for_given_parameter()"
});
formatter.result({
  "duration": 87739,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bangalore",
      "offset": 41
    }
  ],
  "location": "GetCountrySteps.user_get_response_to_inexistent_country(String)"
});
formatter.result({
  "duration": 286596681,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nJSON path RestResponse.result.find{res-\u003eres.name \u003d\u003d \"Bangalore\"}.name doesn\u0027t match.\nExpected: Bangalore\n  Actual: null\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:238)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:250)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:483)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:655)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:169)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.content(ResponseSpecificationImpl.groovy:275)\r\n\tat io.restassured.specification.ResponseSpecification$content$0.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:258)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.body(ValidatableResponseOptionsImpl.java:274)\r\n\tat TestApi.GetCountryTest.verify_AllCountry(GetCountryTest.java:70)\r\n\tat StepDefinitions.GetCountrySteps.user_get_response_to_inexistent_country(GetCountrySteps.java:74)\r\n\tat ✽.And User get response to inexistent country \"Bangalore\"(GetCountryValidation.feature:32)\r\n",
  "status": "failed"
});
formatter.uri("PostCountryValidation.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#author: Rajesha Kumar Moharana"
    }
  ],
  "line": 2,
  "name": "New Country addition",
  "description": "",
  "id": "new-country-addition",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Validate use can add new country to list",
  "description": "",
  "id": "new-country-addition;validate-use-can-add-new-country-to-list",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User has POST api key",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User sends POST request with new country",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User receives OK response for given params",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User validate response",
  "keyword": "And "
});
formatter.match({
  "location": "PostCountrySteps.user_has_POST_api_key()"
});
formatter.result({
  "duration": 7717651,
  "status": "passed"
});
formatter.match({
  "location": "PostCountrySteps.user_sends_POST_request_with_new_country()"
});
formatter.result({
  "duration": 574396204,
  "status": "passed"
});
formatter.match({
  "location": "PostCountrySteps.user_receives_OK_response_for_given_params()"
});
formatter.result({
  "duration": 344000,
  "status": "passed"
});
formatter.match({
  "location": "PostCountrySteps.user_validate_response()"
});
formatter.result({
  "duration": 262261083,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nXML path RestResponse.messages doesn\u0027t match.\nExpected: New Country created successfully\n  Actual: \n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:250)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:483)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:655)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:169)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.content(ResponseSpecificationImpl.groovy:275)\r\n\tat io.restassured.specification.ResponseSpecification$content$0.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:258)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.body(ValidatableResponseOptionsImpl.java:274)\r\n\tat TestApi.PostCountryTest.verify_PostResponse(PostCountryTest.java:65)\r\n\tat StepDefinitions.PostCountrySteps.user_validate_response(PostCountrySteps.java:48)\r\n\tat ✽.And User validate response(PostCountryValidation.feature:8)\r\n",
  "status": "failed"
});
});