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
  "duration": 9459823390,
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
  "duration": 777744472,
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
  "duration": 19072099001,
  "status": "passed"
});
formatter.match({
  "location": "TweetTestStepDefinition.clickCreateNewTweet()"
});
formatter.result({
  "duration": 613190878,
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
  "duration": 65561757,
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
  "duration": 18927518,
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
  "duration": 27024279,
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
  "duration": 88412679,
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
  "duration": 913023314,
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
  "duration": 3463166886,
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
  "duration": 6247282755,
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
  "duration": 7741407912,
  "status": "passed"
});
formatter.after({
  "duration": 794846506,
  "status": "passed"
});
formatter.before({
  "duration": 8173446934,
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
  "duration": 320339758,
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
  "duration": 22224506614,
  "status": "passed"
});
formatter.match({
  "location": "TweetTestStepDefinition.clickCreateNewTweet()"
});
formatter.result({
  "duration": 559984804,
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
  "duration": 52884345,
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
  "duration": 15164810,
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
  "duration": 15184665,
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
  "duration": 64240530,
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
  "duration": 930947020,
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
  "duration": 2933835463,
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
  "duration": 5899757398,
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
  "duration": 7345154932,
  "status": "passed"
});
formatter.after({
  "duration": 794535212,
  "status": "passed"
});
formatter.before({
  "duration": 7422031551,
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
  "duration": 319133114,
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
  "duration": 18398134902,
  "status": "passed"
});
formatter.match({
  "location": "TweetTestStepDefinition.clickCreateNewTweet()"
});
formatter.result({
  "duration": 542379898,
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
  "duration": 46275880,
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
  "duration": 14659466,
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
  "duration": 14058677,
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
  "duration": 43784890,
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
  "duration": 869299211,
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
  "duration": 6499038240,
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
  "duration": 5683624487,
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
  "duration": 7485747954,
  "status": "passed"
});
formatter.after({
  "duration": 800519078,
  "status": "passed"
});
formatter.before({
  "duration": 7614042508,
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
  "duration": 344068664,
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
  "duration": 18497451183,
  "status": "passed"
});
formatter.match({
  "location": "TweetTestStepDefinition.clickCreateNewTweet()"
});
formatter.result({
  "duration": 591239038,
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
  "duration": 50114577,
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
  "duration": 15187141,
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
  "duration": 13378240,
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
  "duration": 75673683,
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
  "duration": 590531727,
  "status": "passed"
});
formatter.match({
  "location": "TweetTestStepDefinition.closeTweetPopup()"
});
formatter.result({
  "duration": 397374663,
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
  "duration": 62191069,
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
  "duration": 375785967,
  "status": "passed"
});
formatter.after({
  "duration": 821408790,
  "status": "passed"
});
formatter.before({
  "duration": 6983078350,
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
  "duration": 307476611,
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
  "duration": 18635729365,
  "status": "passed"
});
formatter.match({
  "location": "TweetTestStepDefinition.clickCreateNewTweet()"
});
formatter.result({
  "duration": 539856273,
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
  "duration": 56555499,
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
  "duration": 14958682,
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
  "duration": 14269979,
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
  "duration": 50520904,
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
  "duration": 817428260,
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
  "duration": 3353022268,
  "status": "passed"
});
formatter.match({
  "location": "TweetTestStepDefinition.postDuplicatedTweet()"
});
formatter.result({
  "duration": 1065129049,
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
  "duration": 112568272,
  "status": "passed"
});
formatter.match({
  "location": "TweetTestStepDefinition.checkTweetBoxMsgMaintained()"
});
formatter.result({
  "duration": 500981137,
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
  "duration": 1135639251,
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
  "duration": 2810962460,
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
  "duration": 8002050553,
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
  "duration": 12024726817,
  "status": "passed"
});
formatter.after({
  "duration": 787923289,
  "status": "passed"
});
formatter.before({
  "duration": 6237270256,
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
  "duration": 317075308,
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
  "duration": 18416047776,
  "status": "passed"
});
formatter.match({
  "location": "TweetTestStepDefinition.clickCreateNewTweet()"
});
formatter.result({
  "duration": 539473270,
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
  "duration": 50829233,
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
  "duration": 13587855,
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
  "duration": 12653276,
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
  "duration": 48988747,
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
  "duration": 2649979686,
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
  "duration": 3827765966,
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
  "duration": 9323676138,
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
  "duration": 7693478814,
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
  "duration": 7047411065,
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
  "duration": 7056905318,
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
  "duration": 7035988011,
  "status": "passed"
});
formatter.after({
  "duration": 708388470,
  "status": "passed"
});
formatter.before({
  "duration": 7565607576,
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
  "duration": 339619908,
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
  "duration": 18460605268,
  "status": "passed"
});
formatter.match({
  "location": "TweetTestStepDefinition.clickCreateNewTweet()"
});
formatter.result({
  "duration": 538054015,
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
  "duration": 46770830,
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
  "duration": 13933139,
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
  "duration": 12798611,
  "status": "passed"
});
formatter.scenario({
  "line": 74,
  "name": "Post message chain and read message immediately (will fail)",
  "description": "",
  "id": "post-new-tweet-after-login;post-message-chain-and-read-message-immediately-(will-fail)",
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
  "duration": 47146090,
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
  "duration": 2613423582,
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
  "duration": 8759308549,
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
  "duration": 776741566,
  "status": "passed"
});
formatter.before({
  "duration": 6946119432,
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
  "duration": 342194451,
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
  "duration": 18765527026,
  "status": "passed"
});
formatter.match({
  "location": "TweetTestStepDefinition.clickCreateNewTweet()"
});
formatter.result({
  "duration": 525189007,
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
  "duration": 48758382,
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
  "duration": 13466271,
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
  "duration": 12504496,
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
  "duration": 42782055,
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
  "duration": 2441114581,
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
  "duration": 4329842183,
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
  "duration": 4714258461,
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
  "duration": 5224874015,
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
  "duration": 10977489112,
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
  "duration": 5297261751,
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
  "duration": 7021420276,
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
  "duration": 7139173262,
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
  "duration": 12741768712,
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
  "duration": 7854413116,
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
  "duration": 7428277833,
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
  "duration": 7566624472,
  "status": "passed"
});
formatter.after({
  "duration": 1088127704,
  "status": "passed"
});
formatter.before({
  "duration": 7843548253,
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
  "duration": 335703675,
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
  "duration": 19073408796,
  "status": "passed"
});
formatter.match({
  "location": "TweetTestStepDefinition.clickCreateNewTweet()"
});
formatter.result({
  "duration": 555837610,
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
  "duration": 55299185,
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
  "duration": 16770662,
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
  "duration": 15822054,
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
  "duration": 52701391,
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
  "duration": 2549785264,
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
  "duration": 4382354466,
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
  "duration": 4981686627,
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
  "duration": 5492822976,
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
  "duration": 4537898360,
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
  "duration": 4948919516,
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
  "duration": 7080395077,
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
  "duration": 7155552175,
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
  "duration": 6993407760,
  "status": "passed"
});
formatter.after({
  "duration": 793239254,
  "status": "passed"
});
formatter.before({
  "duration": 7060479692,
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
  "duration": 302608842,
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
  "duration": 18906536647,
  "status": "passed"
});
formatter.match({
  "location": "TweetTestStepDefinition.clickCreateNewTweet()"
});
formatter.result({
  "duration": 522489105,
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
  "duration": 47125629,
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
  "duration": 15496755,
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
  "duration": 12524088,
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
  "duration": 53193958,
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
  "duration": 2486823721,
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
  "duration": 3947607453,
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
  "duration": 5793964351,
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
  "duration": 4259186469,
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
  "duration": 4104595425,
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
  "duration": 4087625456,
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
  "duration": 4954141678,
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
  "duration": 6961796301,
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
  "duration": 7153329248,
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
  "duration": 6962378227,
  "status": "passed"
});
formatter.after({
  "duration": 727764018,
  "status": "passed"
});
formatter.before({
  "duration": 8333208602,
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
  "duration": 314753291,
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
  "duration": 19174808231,
  "status": "passed"
});
formatter.match({
  "location": "TweetTestStepDefinition.clickCreateNewTweet()"
});
formatter.result({
  "duration": 595180552,
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
  "duration": 51743754,
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
  "duration": 16108139,
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
  "duration": 15823556,
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
  "duration": 75150042,
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
  "duration": 2826292114,
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
  "duration": 3877199838,
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
  "duration": 6325148789,
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
  "duration": 8410864834,
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
  "duration": 12708937770,
  "status": "passed"
});
formatter.after({
  "duration": 900949495,
  "status": "passed"
});
formatter.before({
  "duration": 8397191517,
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
  "duration": 335476330,
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
  "duration": 19188250966,
  "status": "passed"
});
formatter.match({
  "location": "TweetTestStepDefinition.clickCreateNewTweet()"
});
formatter.result({
  "duration": 588375042,
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
  "duration": 51571583,
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
  "duration": 22023340,
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
  "duration": 18384020,
  "status": "passed"
});
formatter.scenario({
  "line": 136,
  "name": "Reply an existing Tweet with more comment",
  "description": "",
  "id": "post-new-tweet-after-login;reply-an-existing-tweet-with-more-comment",
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
  "duration": 100227693,
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
  "duration": 2592570415,
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
  "duration": 3906884935,
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
  "duration": 6350565482,
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
  "duration": 6655890418,
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
  "duration": 5907640468,
  "error_message": "java.lang.AssertionError: expected [2] but found [1]\n\tat org.testng.Assert.fail(Assert.java:96)\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\n\tat org.testng.Assert.assertEquals(Assert.java:118)\n\tat org.testng.Assert.assertEquals(Assert.java:652)\n\tat org.testng.Assert.assertEquals(Assert.java:662)\n\tat StepDefinitions.TweetTestStepDefinition.checkReplyCount(TweetTestStepDefinition.java:115)\n\tat ✽.And new Tweet2 is shown replied by 2 followers in my own Tweet list(TweetTest.feature:142)\n",
  "status": "failed"
});
formatter.after({
  "duration": 884542097,
  "status": "passed"
});
});