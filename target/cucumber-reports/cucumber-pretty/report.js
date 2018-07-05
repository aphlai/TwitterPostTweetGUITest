$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TweetTest.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: anthony0lai@gmail.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: Post Tweet test in Twitter"
    }
  ],
  "line": 6,
  "name": "Post new Tweet after login",
  "description": "",
  "id": "post-new-tweet-after-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 5,
      "name": "@PosLoginTest"
    }
  ]
});
formatter.before({
  "duration": 11592036841,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "User login and click compose Tweet button",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I go to the Twitter login page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I have logged in using valid credential",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click the Tweet button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Popup \"Compose new Tweet\" is shown",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "more Tweet button should be disabled as the message content is empty",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "submit Tweet button should be disabled as the message content is empty",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Twitter",
      "offset": 12
    }
  ],
  "location": "TweetTestStepDefinition.inLoginPage(String)"
});
formatter.result({
  "duration": 1187251083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 23
    }
  ],
  "location": "TweetTestStepDefinition.loginUsingCredential(String)"
});
formatter.result({
  "duration": 19814095974,
  "status": "passed"
});
formatter.match({
  "location": "TweetTestStepDefinition.clickCreateNewTweet()"
});
formatter.result({
  "duration": 549975821,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compose new Tweet",
      "offset": 7
    }
  ],
  "location": "TweetTestStepDefinition.isNewTweetPopupShown(String)"
});
formatter.result({
  "duration": 65545407,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "more Tweet",
      "offset": 0
    },
    {
      "val": "disabled",
      "offset": 28
    }
  ],
  "location": "TweetTestStepDefinition.submitTweetButtonStatus(String,String)"
});
formatter.result({
  "duration": 20782169,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit Tweet",
      "offset": 0
    },
    {
      "val": "disabled",
      "offset": 30
    }
  ],
  "location": "TweetTestStepDefinition.submitTweetButtonStatus(String,String)"
});
formatter.result({
  "duration": 21950068,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Post a single Tweet",
  "description": "",
  "id": "post-new-tweet-after-login;post-a-single-tweet",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@funcTest"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Popup \"Compose new Tweet\" is shown",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I type Tweet messsage \"My 1st Tweet\" and submit",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "there will be status message showing \"Your Tweet was sent.\"",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "# Do I need to mention that I need to click to refresh"
    }
  ],
  "line": 22,
  "name": "the new Tweet is shown in my own Tweet list",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the new Tweet is shown in the main page stream list",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Compose new Tweet",
      "offset": 7
    }
  ],
  "location": "TweetTestStepDefinition.isNewTweetPopupShown(String)"
});
formatter.result({
  "duration": 85165152,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My 1st Tweet",
      "offset": 23
    },
    {
      "val": "and",
      "offset": 37
    }
  ],
  "location": "TweetTestStepDefinition.postSingleTweet(String,String)"
});
formatter.result({
  "duration": 984117997,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 14
    },
    {
      "val": "Your Tweet was sent.",
      "offset": 38
    }
  ],
  "location": "TweetTestStepDefinition.waitForStatusMsg(String,String)"
});
formatter.result({
  "duration": 3389446317,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "my own Tweet list",
      "offset": 26
    }
  ],
  "location": "TweetTestStepDefinition.findNewTweetMsgs(String)"
});
formatter.result({
  "duration": 7113222775,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "the main page stream list",
      "offset": 26
    }
  ],
  "location": "TweetTestStepDefinition.findNewTweetMsgs(String)"
});
formatter.result({
  "duration": 9269275780,
  "status": "passed"
});
formatter.after({
  "duration": 904817900,
  "status": "passed"
});
formatter.before({
  "duration": 7306513540,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "User login and click compose Tweet button",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I go to the Twitter login page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I have logged in using valid credential",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click the Tweet button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Popup \"Compose new Tweet\" is shown",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "more Tweet button should be disabled as the message content is empty",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "submit Tweet button should be disabled as the message content is empty",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Twitter",
      "offset": 12
    }
  ],
  "location": "TweetTestStepDefinition.inLoginPage(String)"
});
formatter.result({
  "duration": 334135993,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 23
    }
  ],
  "location": "TweetTestStepDefinition.loginUsingCredential(String)"
});
formatter.result({
  "duration": 18965711468,
  "status": "passed"
});
formatter.match({
  "location": "TweetTestStepDefinition.clickCreateNewTweet()"
});
formatter.result({
  "duration": 680289845,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compose new Tweet",
      "offset": 7
    }
  ],
  "location": "TweetTestStepDefinition.isNewTweetPopupShown(String)"
});
formatter.result({
  "duration": 66693642,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "more Tweet",
      "offset": 0
    },
    {
      "val": "disabled",
      "offset": 28
    }
  ],
  "location": "TweetTestStepDefinition.submitTweetButtonStatus(String,String)"
});
formatter.result({
  "duration": 15979170,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit Tweet",
      "offset": 0
    },
    {
      "val": "disabled",
      "offset": 30
    }
  ],
  "location": "TweetTestStepDefinition.submitTweetButtonStatus(String,String)"
});
formatter.result({
  "duration": 14896323,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Post a Tweet with Hashtag in message",
  "description": "",
  "id": "post-new-tweet-after-login;post-a-tweet-with-hashtag-in-message",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@funcTest"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "Popup \"Compose new Tweet\" is shown",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I type Tweet messsage \"My #AuomationTest Tweet\" and submit",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "there will be status message showing \"Your Tweet was sent.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "the new Tweet in my own Tweet list has Hashtag",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the new Tweet in the main page stream list has Hashtag",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Compose new Tweet",
      "offset": 7
    }
  ],
  "location": "TweetTestStepDefinition.isNewTweetPopupShown(String)"
});
formatter.result({
  "duration": 56986527,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My #AuomationTest Tweet",
      "offset": 23
    },
    {
      "val": "and",
      "offset": 48
    }
  ],
  "location": "TweetTestStepDefinition.postSingleTweet(String,String)"
});
formatter.result({
  "duration": 1044578253,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 14
    },
    {
      "val": "Your Tweet was sent.",
      "offset": 38
    }
  ],
  "location": "TweetTestStepDefinition.waitForStatusMsg(String,String)"
});
formatter.result({
  "duration": 3382971331,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "my own Tweet list",
      "offset": 17
    },
    {
      "val": "Hashtag",
      "offset": 39
    }
  ],
  "location": "TweetTestStepDefinition.findNewTweetMsgLink(String,String)"
});
formatter.result({
  "duration": 5900818861,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "the main page stream list",
      "offset": 17
    },
    {
      "val": "Hashtag",
      "offset": 47
    }
  ],
  "location": "TweetTestStepDefinition.findNewTweetMsgLink(String,String)"
});
formatter.result({
  "duration": 7970667963,
  "status": "passed"
});
formatter.after({
  "duration": 801392928,
  "status": "passed"
});
formatter.before({
  "duration": 8945621514,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "User login and click compose Tweet button",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I go to the Twitter login page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I have logged in using valid credential",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click the Tweet button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Popup \"Compose new Tweet\" is shown",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "more Tweet button should be disabled as the message content is empty",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "submit Tweet button should be disabled as the message content is empty",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Twitter",
      "offset": 12
    }
  ],
  "location": "TweetTestStepDefinition.inLoginPage(String)"
});
formatter.result({
  "duration": 303655221,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 23
    }
  ],
  "location": "TweetTestStepDefinition.loginUsingCredential(String)"
});
formatter.result({
  "duration": 19004858601,
  "status": "passed"
});
formatter.match({
  "location": "TweetTestStepDefinition.clickCreateNewTweet()"
});
formatter.result({
  "duration": 577932178,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compose new Tweet",
      "offset": 7
    }
  ],
  "location": "TweetTestStepDefinition.isNewTweetPopupShown(String)"
});
formatter.result({
  "duration": 46984807,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "more Tweet",
      "offset": 0
    },
    {
      "val": "disabled",
      "offset": 28
    }
  ],
  "location": "TweetTestStepDefinition.submitTweetButtonStatus(String,String)"
});
formatter.result({
  "duration": 16245182,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit Tweet",
      "offset": 0
    },
    {
      "val": "disabled",
      "offset": 30
    }
  ],
  "location": "TweetTestStepDefinition.submitTweetButtonStatus(String,String)"
});
formatter.result({
  "duration": 14728894,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Post a Tweet mentioned another Tweet user in message",
  "description": "",
  "id": "post-new-tweet-after-login;post-a-tweet-mentioned-another-tweet-user-in-message",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@funcTest"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "Popup \"Compose new Tweet\" is shown",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I type Tweet messsage \"I watch notification from @AklTransport\" and submit",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "there will be status message showing \"Your Tweet was sent.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "the new Tweet in my own Tweet list has user mentioned",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the new Tweet in the main page stream list has user mentioned",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Compose new Tweet",
      "offset": 7
    }
  ],
  "location": "TweetTestStepDefinition.isNewTweetPopupShown(String)"
});
formatter.result({
  "duration": 52805659,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "I watch notification from @AklTransport",
      "offset": 23
    },
    {
      "val": "and",
      "offset": 64
    }
  ],
  "location": "TweetTestStepDefinition.postSingleTweet(String,String)"
});
formatter.result({
  "duration": 947628900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 14
    },
    {
      "val": "Your Tweet was sent.",
      "offset": 38
    }
  ],
  "location": "TweetTestStepDefinition.waitForStatusMsg(String,String)"
});
formatter.result({
  "duration": 3323570897,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "my own Tweet list",
      "offset": 17
    },
    {
      "val": "user mentioned",
      "offset": 39
    }
  ],
  "location": "TweetTestStepDefinition.findNewTweetMsgLink(String,String)"
});
formatter.result({
  "duration": 5740362185,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "the main page stream list",
      "offset": 17
    },
    {
      "val": "user mentioned",
      "offset": 47
    }
  ],
  "location": "TweetTestStepDefinition.findNewTweetMsgLink(String,String)"
});
formatter.result({
  "duration": 8623643436,
  "status": "passed"
});
formatter.after({
  "duration": 901528269,
  "status": "passed"
});
formatter.before({
  "duration": 7512308760,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "User login and click compose Tweet button",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I go to the Twitter login page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I have logged in using valid credential",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click the Tweet button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Popup \"Compose new Tweet\" is shown",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "more Tweet button should be disabled as the message content is empty",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "submit Tweet button should be disabled as the message content is empty",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Twitter",
      "offset": 12
    }
  ],
  "location": "TweetTestStepDefinition.inLoginPage(String)"
});
formatter.result({
  "duration": 310440760,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 23
    }
  ],
  "location": "TweetTestStepDefinition.loginUsingCredential(String)"
});
formatter.result({
  "duration": 18988526881,
  "status": "passed"
});
formatter.match({
  "location": "TweetTestStepDefinition.clickCreateNewTweet()"
});
formatter.result({
  "duration": 538581368,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compose new Tweet",
      "offset": 7
    }
  ],
  "location": "TweetTestStepDefinition.isNewTweetPopupShown(String)"
});
formatter.result({
  "duration": 47601469,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "more Tweet",
      "offset": 0
    },
    {
      "val": "disabled",
      "offset": 28
    }
  ],
  "location": "TweetTestStepDefinition.submitTweetButtonStatus(String,String)"
});
formatter.result({
  "duration": 14293822,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit Tweet",
      "offset": 0
    },
    {
      "val": "disabled",
      "offset": 30
    }
  ],
  "location": "TweetTestStepDefinition.submitTweetButtonStatus(String,String)"
});
formatter.result({
  "duration": 12323975,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Cancel posting a Tweet",
  "description": "",
  "id": "post-new-tweet-after-login;cancel-posting-a-tweet",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@negTest"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "Popup \"Compose new Tweet\" is shown",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I type Tweet messsage \"Message to be cancelled\" but not submit",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "I click close tweet popup button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "there will be dialog box with header \"Discard this Tweet?\"",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I click confirm button in dialog box",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Compose new Tweet",
      "offset": 7
    }
  ],
  "location": "TweetTestStepDefinition.isNewTweetPopupShown(String)"
});
formatter.result({
  "duration": 53352713,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Message to be cancelled",
      "offset": 23
    },
    {
      "val": "but not",
      "offset": 48
    }
  ],
  "location": "TweetTestStepDefinition.postSingleTweet(String,String)"
});
formatter.result({
  "duration": 480833789,
  "status": "passed"
});
formatter.match({
  "location": "TweetTestStepDefinition.closeTweetPopup()"
});
formatter.result({
  "duration": 356480497,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Discard this Tweet?",
      "offset": 38
    }
  ],
  "location": "TweetTestStepDefinition.waitForDialogbox(String)"
});
formatter.result({
  "duration": 66055575,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "confirm",
      "offset": 8
    }
  ],
  "location": "TweetTestStepDefinition.clickDialogBoxButton(String)"
});
formatter.result({
  "duration": 340694387,
  "status": "passed"
});
formatter.after({
  "duration": 791810596,
  "status": "passed"
});
formatter.before({
  "duration": 6955944966,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "User login and click compose Tweet button",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I go to the Twitter login page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I have logged in using valid credential",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click the Tweet button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Popup \"Compose new Tweet\" is shown",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "more Tweet button should be disabled as the message content is empty",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "submit Tweet button should be disabled as the message content is empty",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Twitter",
      "offset": 12
    }
  ],
  "location": "TweetTestStepDefinition.inLoginPage(String)"
});
formatter.result({
  "duration": 319391842,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 23
    }
  ],
  "location": "TweetTestStepDefinition.loginUsingCredential(String)"
});
formatter.result({
  "duration": 18967837320,
  "status": "passed"
});
formatter.match({
  "location": "TweetTestStepDefinition.clickCreateNewTweet()"
});
formatter.result({
  "duration": 570849323,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compose new Tweet",
      "offset": 7
    }
  ],
  "location": "TweetTestStepDefinition.isNewTweetPopupShown(String)"
});
formatter.result({
  "duration": 48740534,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "more Tweet",
      "offset": 0
    },
    {
      "val": "disabled",
      "offset": 28
    }
  ],
  "location": "TweetTestStepDefinition.submitTweetButtonStatus(String,String)"
});
formatter.result({
  "duration": 15594570,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit Tweet",
      "offset": 0
    },
    {
      "val": "disabled",
      "offset": 30
    }
  ],
  "location": "TweetTestStepDefinition.submitTweetButtonStatus(String,String)"
});
formatter.result({
  "duration": 13301048,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Post repeated Tweet using exactly the same message will not be allowed",
  "description": "",
  "id": "post-new-tweet-after-login;post-repeated-tweet-using-exactly-the-same-message-will-not-be-allowed",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 49,
      "name": "@negTest"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "Popup \"Compose new Tweet\" is shown",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "I type Tweet messsage \"Message to be duplicated\" and submit",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "there will be status message showing \"Your Tweet was sent.\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I post a new Tweet with duplicated message content",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "there will be persistent status message showing \"You have already sent this Tweet.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "text message in the tweet popup is maintained",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I append \"-- append message\" to my Tweet message and submit",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "there will be status message showing \"Your Tweet was sent.\"",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "the new Tweet is shown in my own Tweet list",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the new Tweet is shown in the main page stream list",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Compose new Tweet",
      "offset": 7
    }
  ],
  "location": "TweetTestStepDefinition.isNewTweetPopupShown(String)"
});
formatter.result({
  "duration": 54345768,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Message to be duplicated",
      "offset": 23
    },
    {
      "val": "and",
      "offset": 49
    }
  ],
  "location": "TweetTestStepDefinition.postSingleTweet(String,String)"
});
formatter.result({
  "duration": 830309783,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 14
    },
    {
      "val": "Your Tweet was sent.",
      "offset": 38
    }
  ],
  "location": "TweetTestStepDefinition.waitForStatusMsg(String,String)"
});
formatter.result({
  "duration": 2890905246,
  "status": "passed"
});
formatter.match({
  "location": "TweetTestStepDefinition.postDuplicatedTweet()"
});
formatter.result({
  "duration": 1299329301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "persistent ",
      "offset": 14
    },
    {
      "val": "You have already sent this Tweet.",
      "offset": 49
    }
  ],
  "location": "TweetTestStepDefinition.waitForStatusMsg(String,String)"
});
formatter.result({
  "duration": 156327062,
  "status": "passed"
});
formatter.match({
  "location": "TweetTestStepDefinition.checkTweetBoxMsgMaintained()"
});
formatter.result({
  "duration": 568381001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-- append message",
      "offset": 10
    }
  ],
  "location": "TweetTestStepDefinition.appendToExistingTweetMsg(String)"
});
formatter.result({
  "duration": 951479978,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 14
    },
    {
      "val": "Your Tweet was sent.",
      "offset": 38
    }
  ],
  "location": "TweetTestStepDefinition.waitForStatusMsg(String,String)"
});
formatter.result({
  "duration": 2861685308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "my own Tweet list",
      "offset": 26
    }
  ],
  "location": "TweetTestStepDefinition.findNewTweetMsgs(String)"
});
formatter.result({
  "duration": 8845256454,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "the main page stream list",
      "offset": 26
    }
  ],
  "location": "TweetTestStepDefinition.findNewTweetMsgs(String)"
});
formatter.result({
  "duration": 14479277431,
  "status": "passed"
});
formatter.after({
  "duration": 1138409501,
  "status": "passed"
});
formatter.before({
  "duration": 8081998795,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "User login and click compose Tweet button",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I go to the Twitter login page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I have logged in using valid credential",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click the Tweet button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Popup \"Compose new Tweet\" is shown",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "more Tweet button should be disabled as the message content is empty",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "submit Tweet button should be disabled as the message content is empty",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Twitter",
      "offset": 12
    }
  ],
  "location": "TweetTestStepDefinition.inLoginPage(String)"
});
formatter.result({
  "duration": 329673174,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 23
    }
  ],
  "location": "TweetTestStepDefinition.loginUsingCredential(String)"
});
formatter.result({
  "duration": 18831293046,
  "status": "passed"
});
formatter.match({
  "location": "TweetTestStepDefinition.clickCreateNewTweet()"
});
formatter.result({
  "duration": 624783086,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compose new Tweet",
      "offset": 7
    }
  ],
  "location": "TweetTestStepDefinition.isNewTweetPopupShown(String)"
});
formatter.result({
  "duration": 61502748,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "more Tweet",
      "offset": 0
    },
    {
      "val": "disabled",
      "offset": 28
    }
  ],
  "location": "TweetTestStepDefinition.submitTweetButtonStatus(String,String)"
});
formatter.result({
  "duration": 29605961,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit Tweet",
      "offset": 0
    },
    {
      "val": "disabled",
      "offset": 30
    }
  ],
  "location": "TweetTestStepDefinition.submitTweetButtonStatus(String,String)"
});
formatter.result({
  "duration": 23211430,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Post message chain with multiple Tweets",
  "description": "",
  "id": "post-new-tweet-after-login;post-message-chain-with-multiple-tweets",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 62,
      "name": "@funcTest"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "Popup \"Compose new Tweet\" is shown",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "I add 3 Tweets with messege \"Multiple messages\" and submit",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "there will be status message showing \"Your Tweets were sent.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "the new Tweets are shown in the main page stream list",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "the new Tweets are shown in my own Tweet list",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "new Tweet1 is shown replied by 1 follower in my own Tweet list",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "new Tweet2 is shown replied by 1 follower in my own Tweet list",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "new Tweet3 is shown replied by 0 follower in my own Tweet list",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Compose new Tweet",
      "offset": 7
    }
  ],
  "location": "TweetTestStepDefinition.isNewTweetPopupShown(String)"
});
formatter.result({
  "duration": 93070030,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 6
    },
    {
      "val": "Multiple messages",
      "offset": 29
    },
    {
      "val": "and",
      "offset": 48
    }
  ],
  "location": "TweetTestStepDefinition.postMultiTweets(int,String,String)"
});
formatter.result({
  "duration": 2804794956,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 14
    },
    {
      "val": "Your Tweets were sent.",
      "offset": 38
    }
  ],
  "location": "TweetTestStepDefinition.waitForStatusMsg(String,String)"
});
formatter.result({
  "duration": 4449980981,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "the main page stream list",
      "offset": 28
    }
  ],
  "location": "TweetTestStepDefinition.findNewTweetMsgs(String)"
});
formatter.result({
  "duration": 10064760838,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "my own Tweet list",
      "offset": 28
    }
  ],
  "location": "TweetTestStepDefinition.findNewTweetMsgs(String)"
});
formatter.result({
  "duration": 9044039316,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 31
    },
    {
      "val": "my own Tweet list",
      "offset": 45
    }
  ],
  "location": "TweetTestStepDefinition.checkReplyCount(int,int,String)"
});
formatter.result({
  "duration": 7143785845,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 31
    },
    {
      "val": "my own Tweet list",
      "offset": 45
    }
  ],
  "location": "TweetTestStepDefinition.checkReplyCount(int,int,String)"
});
formatter.result({
  "duration": 6996673357,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 9
    },
    {
      "val": "0",
      "offset": 31
    },
    {
      "val": "my own Tweet list",
      "offset": 45
    }
  ],
  "location": "TweetTestStepDefinition.checkReplyCount(int,int,String)"
});
formatter.result({
  "duration": 7069570638,
  "status": "passed"
});
formatter.after({
  "duration": 1021579385,
  "status": "passed"
});
formatter.before({
  "duration": 9394779167,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "User login and click compose Tweet button",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I go to the Twitter login page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I have logged in using valid credential",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click the Tweet button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Popup \"Compose new Tweet\" is shown",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "more Tweet button should be disabled as the message content is empty",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "submit Tweet button should be disabled as the message content is empty",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Twitter",
      "offset": 12
    }
  ],
  "location": "TweetTestStepDefinition.inLoginPage(String)"
});
formatter.result({
  "duration": 323164487,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 23
    }
  ],
  "location": "TweetTestStepDefinition.loginUsingCredential(String)"
});
formatter.result({
  "duration": 19042755169,
  "status": "passed"
});
formatter.match({
  "location": "TweetTestStepDefinition.clickCreateNewTweet()"
});
formatter.result({
  "duration": 568201008,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compose new Tweet",
      "offset": 7
    }
  ],
  "location": "TweetTestStepDefinition.isNewTweetPopupShown(String)"
});
formatter.result({
  "duration": 49836713,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "more Tweet",
      "offset": 0
    },
    {
      "val": "disabled",
      "offset": 28
    }
  ],
  "location": "TweetTestStepDefinition.submitTweetButtonStatus(String,String)"
});
formatter.result({
  "duration": 14856504,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit Tweet",
      "offset": 0
    },
    {
      "val": "disabled",
      "offset": 30
    }
  ],
  "location": "TweetTestStepDefinition.submitTweetButtonStatus(String,String)"
});
formatter.result({
  "duration": 16090295,
  "status": "passed"
});
formatter.scenario({
  "line": 74,
  "name": "Post message chain and immediately switch to another page to read the Tweets(will fail)",
  "description": "",
  "id": "post-new-tweet-after-login;post-message-chain-and-immediately-switch-to-another-page-to-read-the-tweets(will-fail)",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 73,
      "name": "@advTest"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "Popup \"Compose new Tweet\" is shown",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "I add 3 Tweets with messege \"Multiple messages\" and submit",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "the new Tweets are shown in the main page stream list",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "the new Tweets are shown in my own Tweet list",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "new Tweet1 is shown replied by 1 follower in my own Tweet list",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "new Tweet2 is shown replied by 1 follower in my own Tweet list",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "new Tweet3 is shown replied by 0 follower in my own Tweet list",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Compose new Tweet",
      "offset": 7
    }
  ],
  "location": "TweetTestStepDefinition.isNewTweetPopupShown(String)"
});
formatter.result({
  "duration": 82068665,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 6
    },
    {
      "val": "Multiple messages",
      "offset": 29
    },
    {
      "val": "and",
      "offset": 48
    }
  ],
  "location": "TweetTestStepDefinition.postMultiTweets(int,String,String)"
});
formatter.result({
  "duration": 2726724945,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "the main page stream list",
      "offset": 28
    }
  ],
  "location": "TweetTestStepDefinition.findNewTweetMsgs(String)"
});
formatter.result({
  "duration": 9811062999,
  "error_message": "java.lang.AssertionError: Newly post message should appear in the main page stream list expected [true] but found [false]\n\tat org.testng.Assert.fail(Assert.java:96)\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\n\tat org.testng.Assert.assertTrue(Assert.java:44)\n\tat StepDefinitions.TweetTestStepDefinition.findNewTweetMsgs(TweetTestStepDefinition.java:199)\n\tat ✽.And the new Tweets are shown in the main page stream list(TweetTest.feature:77)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "my own Tweet list",
      "offset": 28
    }
  ],
  "location": "TweetTestStepDefinition.findNewTweetMsgs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 31
    },
    {
      "val": "my own Tweet list",
      "offset": 45
    }
  ],
  "location": "TweetTestStepDefinition.checkReplyCount(int,int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 31
    },
    {
      "val": "my own Tweet list",
      "offset": 45
    }
  ],
  "location": "TweetTestStepDefinition.checkReplyCount(int,int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 9
    },
    {
      "val": "0",
      "offset": 31
    },
    {
      "val": "my own Tweet list",
      "offset": 45
    }
  ],
  "location": "TweetTestStepDefinition.checkReplyCount(int,int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 892870767,
  "status": "passed"
});
formatter.before({
  "duration": 10817486304,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "User login and click compose Tweet button",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I go to the Twitter login page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I have logged in using valid credential",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click the Tweet button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Popup \"Compose new Tweet\" is shown",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "more Tweet button should be disabled as the message content is empty",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "submit Tweet button should be disabled as the message content is empty",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Twitter",
      "offset": 12
    }
  ],
  "location": "TweetTestStepDefinition.inLoginPage(String)"
});
formatter.result({
  "duration": 372280846,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 23
    }
  ],
  "location": "TweetTestStepDefinition.loginUsingCredential(String)"
});
formatter.result({
  "duration": 19274877692,
  "status": "passed"
});
formatter.match({
  "location": "TweetTestStepDefinition.clickCreateNewTweet()"
});
formatter.result({
  "duration": 609050256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compose new Tweet",
      "offset": 7
    }
  ],
  "location": "TweetTestStepDefinition.isNewTweetPopupShown(String)"
});
formatter.result({
  "duration": 53647017,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "more Tweet",
      "offset": 0
    },
    {
      "val": "disabled",
      "offset": 28
    }
  ],
  "location": "TweetTestStepDefinition.submitTweetButtonStatus(String,String)"
});
formatter.result({
  "duration": 22324295,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit Tweet",
      "offset": 0
    },
    {
      "val": "disabled",
      "offset": 30
    }
  ],
  "location": "TweetTestStepDefinition.submitTweetButtonStatus(String,String)"
});
formatter.result({
  "duration": 21324176,
  "status": "passed"
});
formatter.scenario({
  "line": 84,
  "name": "Like Tweets",
  "description": "",
  "id": "post-new-tweet-after-login;like-tweets",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 83,
      "name": "@funcTest"
    }
  ]
});
formatter.step({
  "line": 85,
  "name": "Popup \"Compose new Tweet\" is shown",
  "keyword": "Given "
});
formatter.step({
  "line": 86,
  "name": "I add 3 Tweets with messege \"Like message test\" and submit",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "there will be status message showing \"Your Tweets were sent.\"",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "I click like in new Tweet1 in the main page stream list",
  "keyword": "When "
});
formatter.step({
  "line": 89,
  "name": "I click like in new Tweet3 in my own Tweet list",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "the new Tweets are shown in the main page stream list",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "new Tweet1 is shown liked by 1 follower in main page stream list",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "new Tweet3 is shown liked by 1 follower in main page stream list",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "new Tweet2 is shown liked by 0 follower in main page stream list",
  "keyword": "But "
});
formatter.step({
  "line": 94,
  "name": "the new Tweets are shown in my own Tweet list",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "new Tweet1 is shown liked by 1 follower in my own Tweet list",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "new Tweet3 is shown liked by 1 follower in my own Tweet list",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "new Tweet2 is shown liked by 0 follower in my own Tweet list",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "Compose new Tweet",
      "offset": 7
    }
  ],
  "location": "TweetTestStepDefinition.isNewTweetPopupShown(String)"
});
formatter.result({
  "duration": 71891706,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 6
    },
    {
      "val": "Like message test",
      "offset": 29
    },
    {
      "val": "and",
      "offset": 48
    }
  ],
  "location": "TweetTestStepDefinition.postMultiTweets(int,String,String)"
});
formatter.result({
  "duration": 2928380440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 14
    },
    {
      "val": "Your Tweets were sent.",
      "offset": 38
    }
  ],
  "location": "TweetTestStepDefinition.waitForStatusMsg(String,String)"
});
formatter.result({
  "duration": 4161832403,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 25
    },
    {
      "val": "the main page stream list",
      "offset": 30
    }
  ],
  "location": "TweetTestStepDefinition.likeTweetWithMsgIndex(int,String)"
});
formatter.result({
  "duration": 4836662232,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 25
    },
    {
      "val": "my own Tweet list",
      "offset": 30
    }
  ],
  "location": "TweetTestStepDefinition.likeTweetWithMsgIndex(int,String)"
});
formatter.result({
  "duration": 5554164314,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "the main page stream list",
      "offset": 28
    }
  ],
  "location": "TweetTestStepDefinition.findNewTweetMsgs(String)"
});
formatter.result({
  "duration": 9557778189,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "main page stream list",
      "offset": 43
    }
  ],
  "location": "TweetTestStepDefinition.checkTweetLikeCount(int,int,String)"
});
formatter.result({
  "duration": 5419716357,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "main page stream list",
      "offset": 43
    }
  ],
  "location": "TweetTestStepDefinition.checkTweetLikeCount(int,int,String)"
});
formatter.result({
  "duration": 7100158598,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    },
    {
      "val": "0",
      "offset": 29
    },
    {
      "val": "main page stream list",
      "offset": 43
    }
  ],
  "location": "TweetTestStepDefinition.checkTweetLikeCount(int,int,String)"
});
formatter.result({
  "duration": 7270408780,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "my own Tweet list",
      "offset": 28
    }
  ],
  "location": "TweetTestStepDefinition.findNewTweetMsgs(String)"
});
formatter.result({
  "duration": 10059932499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "my own Tweet list",
      "offset": 43
    }
  ],
  "location": "TweetTestStepDefinition.checkTweetLikeCount(int,int,String)"
});
formatter.result({
  "duration": 7227283890,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "my own Tweet list",
      "offset": 43
    }
  ],
  "location": "TweetTestStepDefinition.checkTweetLikeCount(int,int,String)"
});
formatter.result({
  "duration": 7025666419,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    },
    {
      "val": "0",
      "offset": 29
    },
    {
      "val": "my own Tweet list",
      "offset": 43
    }
  ],
  "location": "TweetTestStepDefinition.checkTweetLikeCount(int,int,String)"
});
formatter.result({
  "duration": 7168444262,
  "status": "passed"
});
formatter.after({
  "duration": 797678332,
  "status": "passed"
});
formatter.before({
  "duration": 7387666613,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "User login and click compose Tweet button",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I go to the Twitter login page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I have logged in using valid credential",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click the Tweet button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Popup \"Compose new Tweet\" is shown",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "more Tweet button should be disabled as the message content is empty",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "submit Tweet button should be disabled as the message content is empty",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Twitter",
      "offset": 12
    }
  ],
  "location": "TweetTestStepDefinition.inLoginPage(String)"
});
formatter.result({
  "duration": 302453919,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 23
    }
  ],
  "location": "TweetTestStepDefinition.loginUsingCredential(String)"
});
formatter.result({
  "duration": 18323570494,
  "status": "passed"
});
formatter.match({
  "location": "TweetTestStepDefinition.clickCreateNewTweet()"
});
formatter.result({
  "duration": 550931796,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compose new Tweet",
      "offset": 7
    }
  ],
  "location": "TweetTestStepDefinition.isNewTweetPopupShown(String)"
});
formatter.result({
  "duration": 43535361,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "more Tweet",
      "offset": 0
    },
    {
      "val": "disabled",
      "offset": 28
    }
  ],
  "location": "TweetTestStepDefinition.submitTweetButtonStatus(String,String)"
});
formatter.result({
  "duration": 12629573,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit Tweet",
      "offset": 0
    },
    {
      "val": "disabled",
      "offset": 30
    }
  ],
  "location": "TweetTestStepDefinition.submitTweetButtonStatus(String,String)"
});
formatter.result({
  "duration": 12300539,
  "status": "passed"
});
formatter.scenario({
  "line": 100,
  "name": "Unlike Tweets",
  "description": "",
  "id": "post-new-tweet-after-login;unlike-tweets",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 99,
      "name": "@funcTest"
    }
  ]
});
formatter.step({
  "line": 101,
  "name": "Popup \"Compose new Tweet\" is shown",
  "keyword": "Given "
});
formatter.step({
  "line": 102,
  "name": "I add 3 Tweets with messege \"Like and unlike messages test\" and submit",
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "there will be status message showing \"Your Tweets were sent.\"",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I click like in new Tweet1 in the main page stream list",
  "keyword": "When "
});
formatter.step({
  "line": 105,
  "name": "I click like in new Tweet2 in my own Tweet list",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "I click like in new Tweet2 in the main page stream list",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "new Tweet1 is shown liked by 1 follower in main page stream list",
  "keyword": "Then "
});
formatter.step({
  "line": 108,
  "name": "new Tweet2 is shown liked by 0 follower in main page stream list",
  "keyword": "But "
});
formatter.step({
  "line": 109,
  "name": "new Tweet1 is shown liked by 1 follower in my own Tweet list",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "new Tweet2 is shown liked by 0 follower in my own Tweet list",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "Compose new Tweet",
      "offset": 7
    }
  ],
  "location": "TweetTestStepDefinition.isNewTweetPopupShown(String)"
});
formatter.result({
  "duration": 47705888,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 6
    },
    {
      "val": "Like and unlike messages test",
      "offset": 29
    },
    {
      "val": "and",
      "offset": 60
    }
  ],
  "location": "TweetTestStepDefinition.postMultiTweets(int,String,String)"
});
formatter.result({
  "duration": 2817712074,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 14
    },
    {
      "val": "Your Tweets were sent.",
      "offset": 38
    }
  ],
  "location": "TweetTestStepDefinition.waitForStatusMsg(String,String)"
});
formatter.result({
  "duration": 7201650589,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 25
    },
    {
      "val": "the main page stream list",
      "offset": 30
    }
  ],
  "location": "TweetTestStepDefinition.likeTweetWithMsgIndex(int,String)"
});
formatter.result({
  "duration": 4894966520,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    },
    {
      "val": "my own Tweet list",
      "offset": 30
    }
  ],
  "location": "TweetTestStepDefinition.likeTweetWithMsgIndex(int,String)"
});
formatter.result({
  "duration": 5397587835,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    },
    {
      "val": "the main page stream list",
      "offset": 30
    }
  ],
  "location": "TweetTestStepDefinition.likeTweetWithMsgIndex(int,String)"
});
formatter.result({
  "duration": 5888258491,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "main page stream list",
      "offset": 43
    }
  ],
  "location": "TweetTestStepDefinition.checkTweetLikeCount(int,int,String)"
});
formatter.result({
  "duration": 5190767258,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    },
    {
      "val": "0",
      "offset": 29
    },
    {
      "val": "main page stream list",
      "offset": 43
    }
  ],
  "location": "TweetTestStepDefinition.checkTweetLikeCount(int,int,String)"
});
formatter.result({
  "duration": 7087931447,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "my own Tweet list",
      "offset": 43
    }
  ],
  "location": "TweetTestStepDefinition.checkTweetLikeCount(int,int,String)"
});
formatter.result({
  "duration": 7289865485,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    },
    {
      "val": "0",
      "offset": 29
    },
    {
      "val": "my own Tweet list",
      "offset": 43
    }
  ],
  "location": "TweetTestStepDefinition.checkTweetLikeCount(int,int,String)"
});
formatter.result({
  "duration": 7184279623,
  "status": "passed"
});
formatter.after({
  "duration": 932519718,
  "status": "passed"
});
formatter.before({
  "duration": 6446922435,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "User login and click compose Tweet button",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I go to the Twitter login page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I have logged in using valid credential",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click the Tweet button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Popup \"Compose new Tweet\" is shown",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "more Tweet button should be disabled as the message content is empty",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "submit Tweet button should be disabled as the message content is empty",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Twitter",
      "offset": 12
    }
  ],
  "location": "TweetTestStepDefinition.inLoginPage(String)"
});
formatter.result({
  "duration": 307318339,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 23
    }
  ],
  "location": "TweetTestStepDefinition.loginUsingCredential(String)"
});
formatter.result({
  "duration": 18570318920,
  "status": "passed"
});
formatter.match({
  "location": "TweetTestStepDefinition.clickCreateNewTweet()"
});
formatter.result({
  "duration": 541500942,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compose new Tweet",
      "offset": 7
    }
  ],
  "location": "TweetTestStepDefinition.isNewTweetPopupShown(String)"
});
formatter.result({
  "duration": 62819349,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "more Tweet",
      "offset": 0
    },
    {
      "val": "disabled",
      "offset": 28
    }
  ],
  "location": "TweetTestStepDefinition.submitTweetButtonStatus(String,String)"
});
formatter.result({
  "duration": 16074550,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit Tweet",
      "offset": 0
    },
    {
      "val": "disabled",
      "offset": 30
    }
  ],
  "location": "TweetTestStepDefinition.submitTweetButtonStatus(String,String)"
});
formatter.result({
  "duration": 14785807,
  "status": "passed"
});
formatter.scenario({
  "line": 113,
  "name": "Retweet an existing Tweet without further comment",
  "description": "",
  "id": "post-new-tweet-after-login;retweet-an-existing-tweet-without-further-comment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 112,
      "name": "@funcTest"
    }
  ]
});
formatter.step({
  "line": 114,
  "name": "Popup \"Compose new Tweet\" is shown",
  "keyword": "Given "
});
formatter.step({
  "line": 115,
  "name": "I add 3 Tweets with messege \"Message to retweet\" and submit",
  "keyword": "When "
});
formatter.step({
  "line": 116,
  "name": "there will be status message showing \"Your Tweets were sent.\"",
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "I click retweet in new Tweet2 in the main page stream list without comment",
  "keyword": "When "
});
formatter.step({
  "line": 118,
  "name": "new Tweet2 is shown retweeted by 1 follower in the main page stream list",
  "keyword": "Then "
});
formatter.step({
  "line": 119,
  "name": "new Tweet1 is shown retweeted by 0 follower in the main page stream list",
  "keyword": "But "
});
formatter.step({
  "line": 120,
  "name": "new Tweet3 is shown retweeted by 0 follower in the main page stream list",
  "keyword": "But "
});
formatter.step({
  "line": 121,
  "name": "new Tweet2 is shown retweeted by 1 follower in my own Tweet list",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "retweet label is shown in Tweet2 in my own Tweet list",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "new Tweet1 is shown retweeted by 0 follower in my own Tweet list",
  "keyword": "But "
});
formatter.step({
  "line": 124,
  "name": "new Tweet3 is shown retweeted by 0 follower in my own Tweet list",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "Compose new Tweet",
      "offset": 7
    }
  ],
  "location": "TweetTestStepDefinition.isNewTweetPopupShown(String)"
});
formatter.result({
  "duration": 65015732,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 6
    },
    {
      "val": "Message to retweet",
      "offset": 29
    },
    {
      "val": "and",
      "offset": 49
    }
  ],
  "location": "TweetTestStepDefinition.postMultiTweets(int,String,String)"
});
formatter.result({
  "duration": 2741280189,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 14
    },
    {
      "val": "Your Tweets were sent.",
      "offset": 38
    }
  ],
  "location": "TweetTestStepDefinition.waitForStatusMsg(String,String)"
});
formatter.result({
  "duration": 3860042326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 28
    },
    {
      "val": "the main page stream list",
      "offset": 33
    },
    {
      "val": "without",
      "offset": 59
    },
    {
      "val": "",
      "offset": 74
    }
  ],
  "location": "TweetTestStepDefinition.retweetWithMsgIndex(int,String,String,String)"
});
formatter.result({
  "duration": 5833696436,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 33
    },
    {
      "val": "the main page stream list",
      "offset": 47
    }
  ],
  "location": "TweetTestStepDefinition.checkRetweetCount(int,int,String)"
});
formatter.result({
  "duration": 4196191670,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    },
    {
      "val": "0",
      "offset": 33
    },
    {
      "val": "the main page stream list",
      "offset": 47
    }
  ],
  "location": "TweetTestStepDefinition.checkRetweetCount(int,int,String)"
});
formatter.result({
  "duration": 4143228891,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 9
    },
    {
      "val": "0",
      "offset": 33
    },
    {
      "val": "the main page stream list",
      "offset": 47
    }
  ],
  "location": "TweetTestStepDefinition.checkRetweetCount(int,int,String)"
});
formatter.result({
  "duration": 4108956827,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 33
    },
    {
      "val": "my own Tweet list",
      "offset": 47
    }
  ],
  "location": "TweetTestStepDefinition.checkRetweetCount(int,int,String)"
});
formatter.result({
  "duration": 4924611438,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "is",
      "offset": 14
    },
    {
      "val": "2",
      "offset": 31
    }
  ],
  "location": "TweetTestStepDefinition.checkRetweetLabel(String,int)"
});
formatter.result({
  "duration": 7113202612,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    },
    {
      "val": "0",
      "offset": 33
    },
    {
      "val": "my own Tweet list",
      "offset": 47
    }
  ],
  "location": "TweetTestStepDefinition.checkRetweetCount(int,int,String)"
});
formatter.result({
  "duration": 7241868038,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 9
    },
    {
      "val": "0",
      "offset": 33
    },
    {
      "val": "my own Tweet list",
      "offset": 47
    }
  ],
  "location": "TweetTestStepDefinition.checkRetweetCount(int,int,String)"
});
formatter.result({
  "duration": 7022160627,
  "status": "passed"
});
formatter.after({
  "duration": 807720910,
  "status": "passed"
});
formatter.before({
  "duration": 7853696287,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "User login and click compose Tweet button",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I go to the Twitter login page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I have logged in using valid credential",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click the Tweet button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Popup \"Compose new Tweet\" is shown",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "more Tweet button should be disabled as the message content is empty",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "submit Tweet button should be disabled as the message content is empty",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Twitter",
      "offset": 12
    }
  ],
  "location": "TweetTestStepDefinition.inLoginPage(String)"
});
formatter.result({
  "duration": 329483484,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 23
    }
  ],
  "location": "TweetTestStepDefinition.loginUsingCredential(String)"
});
formatter.result({
  "duration": 22411285682,
  "status": "passed"
});
formatter.match({
  "location": "TweetTestStepDefinition.clickCreateNewTweet()"
});
formatter.result({
  "duration": 543982221,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compose new Tweet",
      "offset": 7
    }
  ],
  "location": "TweetTestStepDefinition.isNewTweetPopupShown(String)"
});
formatter.result({
  "duration": 46999997,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "more Tweet",
      "offset": 0
    },
    {
      "val": "disabled",
      "offset": 28
    }
  ],
  "location": "TweetTestStepDefinition.submitTweetButtonStatus(String,String)"
});
formatter.result({
  "duration": 14288627,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit Tweet",
      "offset": 0
    },
    {
      "val": "disabled",
      "offset": 30
    }
  ],
  "location": "TweetTestStepDefinition.submitTweetButtonStatus(String,String)"
});
formatter.result({
  "duration": 12083674,
  "status": "passed"
});
formatter.scenario({
  "line": 127,
  "name": "Retweet an existing Tweet with more comment",
  "description": "",
  "id": "post-new-tweet-after-login;retweet-an-existing-tweet-with-more-comment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 126,
      "name": "@funcTest"
    }
  ]
});
formatter.step({
  "line": 128,
  "name": "Popup \"Compose new Tweet\" is shown",
  "keyword": "Given "
});
formatter.step({
  "line": 129,
  "name": "I add 3 Tweets with messege \"More messages to retweet\" and submit",
  "keyword": "When "
});
formatter.step({
  "line": 130,
  "name": "there will be status message showing \"Your Tweets were sent.\"",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "I click retweet in new Tweet2 in the main page stream list with comment \"[RT] test\"",
  "keyword": "When "
});
formatter.step({
  "line": 132,
  "name": "all new and retweeted messages are shown in my own Tweet list",
  "keyword": "Then "
});
formatter.step({
  "line": 133,
  "name": "all new and retweeted messages are shown in the main page stream list",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Compose new Tweet",
      "offset": 7
    }
  ],
  "location": "TweetTestStepDefinition.isNewTweetPopupShown(String)"
});
formatter.result({
  "duration": 47339066,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 6
    },
    {
      "val": "More messages to retweet",
      "offset": 29
    },
    {
      "val": "and",
      "offset": 55
    }
  ],
  "location": "TweetTestStepDefinition.postMultiTweets(int,String,String)"
});
formatter.result({
  "duration": 2707217604,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 14
    },
    {
      "val": "Your Tweets were sent.",
      "offset": 38
    }
  ],
  "location": "TweetTestStepDefinition.waitForStatusMsg(String,String)"
});
formatter.result({
  "duration": 3831826355,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 28
    },
    {
      "val": "the main page stream list",
      "offset": 33
    },
    {
      "val": "with",
      "offset": 59
    },
    {
      "val": " \"[RT] test\"",
      "offset": 71
    }
  ],
  "location": "TweetTestStepDefinition.retweetWithMsgIndex(int,String,String,String)"
});
formatter.result({
  "duration": 6089699839,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "my own Tweet list",
      "offset": 44
    }
  ],
  "location": "TweetTestStepDefinition.findNewMsgWithReplies(String)"
});
formatter.result({
  "duration": 9015211970,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "the main page stream list",
      "offset": 44
    }
  ],
  "location": "TweetTestStepDefinition.findNewMsgWithReplies(String)"
});
formatter.result({
  "duration": 12844438683,
  "status": "passed"
});
formatter.after({
  "duration": 780730050,
  "status": "passed"
});
formatter.before({
  "duration": 7271837553,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "User login and click compose Tweet button",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I go to the Twitter login page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I have logged in using valid credential",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click the Tweet button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Popup \"Compose new Tweet\" is shown",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "more Tweet button should be disabled as the message content is empty",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "submit Tweet button should be disabled as the message content is empty",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Twitter",
      "offset": 12
    }
  ],
  "location": "TweetTestStepDefinition.inLoginPage(String)"
});
formatter.result({
  "duration": 300504572,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 23
    }
  ],
  "location": "TweetTestStepDefinition.loginUsingCredential(String)"
});
formatter.result({
  "duration": 19409686533,
  "status": "passed"
});
formatter.match({
  "location": "TweetTestStepDefinition.clickCreateNewTweet()"
});
formatter.result({
  "duration": 554812419,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compose new Tweet",
      "offset": 7
    }
  ],
  "location": "TweetTestStepDefinition.isNewTweetPopupShown(String)"
});
formatter.result({
  "duration": 50477636,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "more Tweet",
      "offset": 0
    },
    {
      "val": "disabled",
      "offset": 28
    }
  ],
  "location": "TweetTestStepDefinition.submitTweetButtonStatus(String,String)"
});
formatter.result({
  "duration": 16774211,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit Tweet",
      "offset": 0
    },
    {
      "val": "disabled",
      "offset": 30
    }
  ],
  "location": "TweetTestStepDefinition.submitTweetButtonStatus(String,String)"
});
formatter.result({
  "duration": 13658061,
  "status": "passed"
});
formatter.scenario({
  "line": 136,
  "name": "Reply an existing Tweet (Will fail on counter check)",
  "description": "",
  "id": "post-new-tweet-after-login;reply-an-existing-tweet-(will-fail-on-counter-check)",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 135,
      "name": "@funcTest"
    }
  ]
});
formatter.step({
  "line": 137,
  "name": "Popup \"Compose new Tweet\" is shown",
  "keyword": "Given "
});
formatter.step({
  "line": 138,
  "name": "I add 3 Tweets with messege \"Messages to be replied\" and submit",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "there will be status message showing \"Your Tweets were sent.\"",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "I click reply in new Tweet2 in my own Tweet list with message \"REPLY Here!\"",
  "keyword": "When "
});
formatter.step({
  "line": 141,
  "name": "new Tweet3 is shown replied by 0 follower in the main page stream list",
  "keyword": "Then "
});
formatter.step({
  "line": 142,
  "name": "new Tweet2 is shown replied by 2 followers in my own Tweet list",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Compose new Tweet",
      "offset": 7
    }
  ],
  "location": "TweetTestStepDefinition.isNewTweetPopupShown(String)"
});
formatter.result({
  "duration": 66991071,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 6
    },
    {
      "val": "Messages to be replied",
      "offset": 29
    },
    {
      "val": "and",
      "offset": 53
    }
  ],
  "location": "TweetTestStepDefinition.postMultiTweets(int,String,String)"
});
formatter.result({
  "duration": 2546409464,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 14
    },
    {
      "val": "Your Tweets were sent.",
      "offset": 38
    }
  ],
  "location": "TweetTestStepDefinition.waitForStatusMsg(String,String)"
});
formatter.result({
  "duration": 3848603105,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 26
    },
    {
      "val": "my own Tweet list",
      "offset": 31
    },
    {
      "val": "REPLY Here!",
      "offset": 63
    }
  ],
  "location": "TweetTestStepDefinition.replyWithMsgIdx(int,String,String)"
});
formatter.result({
  "duration": 6196850029,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 9
    },
    {
      "val": "0",
      "offset": 31
    },
    {
      "val": "the main page stream list",
      "offset": 45
    }
  ],
  "location": "TweetTestStepDefinition.checkReplyCount(int,int,String)"
});
formatter.result({
  "duration": 6709900308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    },
    {
      "val": "2",
      "offset": 31
    },
    {
      "val": "my own Tweet list",
      "offset": 46
    }
  ],
  "location": "TweetTestStepDefinition.checkReplyCount(int,int,String)"
});
formatter.result({
  "duration": 6010078539,
  "error_message": "java.lang.AssertionError: expected [2] but found [1]\n\tat org.testng.Assert.fail(Assert.java:96)\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\n\tat org.testng.Assert.assertEquals(Assert.java:118)\n\tat org.testng.Assert.assertEquals(Assert.java:652)\n\tat org.testng.Assert.assertEquals(Assert.java:662)\n\tat StepDefinitions.TweetTestStepDefinition.checkReplyCount(TweetTestStepDefinition.java:115)\n\tat ✽.And new Tweet2 is shown replied by 2 followers in my own Tweet list(TweetTest.feature:142)\n",
  "status": "failed"
});
formatter.after({
  "duration": 777984000,
  "status": "passed"
});
});