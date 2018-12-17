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
  "duration": 579262529,
  "status": "passed"
});
formatter.match({
  "location": "GetCountrySteps.user_send_GET_request_to_access_countries()"
});
formatter.result({
  "duration": 1556514827,
  "status": "passed"
});
formatter.match({
  "location": "GetCountrySteps.user_get_OK_response_for_given_parameter()"
});
formatter.result({
  "duration": 154287,
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
  "duration": 575524882,
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
  "duration": 2919199,
  "status": "passed"
});
formatter.match({
  "location": "GetCountrySteps.user_send_GET_request_to_access_countries()"
});
formatter.result({
  "duration": 461463228,
  "status": "passed"
});
formatter.match({
  "location": "GetCountrySteps.user_get_OK_response_for_given_parameter()"
});
formatter.result({
  "duration": 98333,
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
  "duration": 271637151,
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
  "duration": 2183522,
  "status": "passed"
});
formatter.match({
  "location": "GetCountrySteps.user_send_GET_request_to_access_countries()"
});
formatter.result({
  "duration": 456219463,
  "status": "passed"
});
formatter.match({
  "location": "GetCountrySteps.user_get_OK_response_for_given_parameter()"
});
formatter.result({
  "duration": 353933,
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
  "duration": 259871293,
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
  "duration": 3850549,
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
  "duration": 460063390,
  "status": "passed"
});
formatter.match({
  "location": "GetCountrySteps.user_get_OK_response_for_given_parameter()"
});
formatter.result({
  "duration": 388365,
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
  "duration": 41064459,
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
  "duration": 1997783,
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
  "duration": 450785323,
  "status": "passed"
});
formatter.match({
  "location": "GetCountrySteps.user_get_OK_response_for_given_parameter()"
});
formatter.result({
  "duration": 63568,
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
  "duration": 12958105,
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
  "duration": 2223584,
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
  "duration": 450394971,
  "status": "passed"
});
formatter.match({
  "location": "GetCountrySteps.user_get_OK_response_for_given_parameter()"
});
formatter.result({
  "duration": 537355,
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
  "duration": 35599528,
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
  "duration": 1436589,
  "status": "passed"
});
formatter.match({
  "location": "GetCountrySteps.user_send_GET_request_to_access_countries()"
});
formatter.result({
  "duration": 447560861,
  "status": "passed"
});
formatter.match({
  "location": "GetCountrySteps.user_get_OK_response_for_given_parameter()"
});
formatter.result({
  "duration": 214876,
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
  "duration": 271075627,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nJSON path RestResponse.result.find{res-\u003eres.name \u003d\u003d \"Bangalore\"}.name doesn\u0027t match.\nExpected: Bangalore\n  Actual: null\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:60)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:235)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:451)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:613)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.content(ResponseSpecificationImpl.groovy:251)\r\n\tat io.restassured.specification.ResponseSpecification$content$0.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:234)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.body(ValidatableResponseOptionsImpl.java:268)\r\n\tat TestApi.GetCountryTest.verify_AllCountry(GetCountryTest.java:70)\r\n\tat StepDefinitions.GetCountrySteps.user_get_response_to_inexistent_country(GetCountrySteps.java:74)\r\n\tat ✽.And User get response to inexistent country \"Bangalore\"(GetCountryValidation.feature:32)\r\n",
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
  "duration": 1933883,
  "status": "passed"
});
formatter.match({
  "location": "PostCountrySteps.user_sends_POST_request_with_new_country()"
});
formatter.result({
  "duration": 632933810,
  "status": "passed"
});
formatter.match({
  "location": "PostCountrySteps.user_receives_OK_response_for_given_params()"
});
formatter.result({
  "duration": 189051,
  "status": "passed"
});
formatter.match({
  "location": "PostCountrySteps.user_validate_response()"
});
formatter.result({
  "duration": 296485605,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nXML path RestResponse.messages doesn\u0027t match.\nExpected: New Country created successfully\n  Actual: \n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:451)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:613)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.content(ResponseSpecificationImpl.groovy:251)\r\n\tat io.restassured.specification.ResponseSpecification$content$0.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:234)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.body(ValidatableResponseOptionsImpl.java:268)\r\n\tat TestApi.PostCountryTest.verify_PostResponse(PostCountryTest.java:65)\r\n\tat StepDefinitions.PostCountrySteps.user_validate_response(PostCountrySteps.java:48)\r\n\tat ✽.And User validate response(PostCountryValidation.feature:8)\r\n",
  "status": "failed"
});
});