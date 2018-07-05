#Author: anthony0lai@gmail.com
#Keywords Summary : 
#Feature: Post Tweet test in Twitter

@PosLoginTest
Feature: Post new Tweet after login

	Background: User login and click compose Tweet button 
		Given I go to the Twitter login page
		Given I have logged in using valid credential
		When I click the Tweet button
		Then Popup "Compose new Tweet" is shown
		And more Tweet button should be disabled as the message content is empty
		And submit Tweet button should be disabled as the message content is empty

	@funcTest
	Scenario: Post a single Tweet
		Given Popup "Compose new Tweet" is shown
		When I type Tweet messsage "My 1st Tweet" and submit
		Then there will be status message showing "Your Tweet was sent."
		# Do I need to mention that I need to click to refresh
		And the new Tweet is shown in my own Tweet list
		And the new Tweet is shown in the main page stream list

	@funcTest
	Scenario: Post a Tweet with Hashtag in message
		Given Popup "Compose new Tweet" is shown
		When I type Tweet messsage "My #AuomationTest Tweet" and submit
		Then there will be status message showing "Your Tweet was sent."
		And the new Tweet in my own Tweet list has Hashtag
		And the new Tweet in the main page stream list has Hashtag

	@funcTest
	Scenario: Post a Tweet mentioned another Tweet user in message
		Given Popup "Compose new Tweet" is shown
		When I type Tweet messsage "I watch notification from @AklTransport" and submit
		Then there will be status message showing "Your Tweet was sent."   
		And the new Tweet in my own Tweet list has user mentioned
		And the new Tweet in the main page stream list has user mentioned

	@negTest
	Scenario: Cancel posting a Tweet
		Given Popup "Compose new Tweet" is shown
		When I type Tweet messsage "Message to be cancelled" but not submit
		And I click close tweet popup button
		Then there will be dialog box with header "Discard this Tweet?"
		And I click confirm button in dialog box 
	
	@negTest
	Scenario: Post repeated Tweet using exactly the same message will not be allowed
		Given Popup "Compose new Tweet" is shown 
		And I type Tweet messsage "Message to be duplicated" and submit
		And there will be status message showing "Your Tweet was sent."
		When I post a new Tweet with duplicated message content
		Then there will be persistent status message showing "You have already sent this Tweet."
		And text message in the tweet popup is maintained
		And I append "-- append message" to my Tweet message and submit
		And there will be status message showing "Your Tweet was sent."
		And the new Tweet is shown in my own Tweet list
		And the new Tweet is shown in the main page stream list
	
	@funcTest
	Scenario: Post message chain with multiple Tweets
		Given Popup "Compose new Tweet" is shown
		When I add 3 Tweets with messege "Multiple messages" and submit
		Then there will be status message showing "Your Tweets were sent."
		And the new Tweets are shown in the main page stream list
		And the new Tweets are shown in my own Tweet list
		And new Tweet1 is shown replied by 1 follower in my own Tweet list
		And new Tweet2 is shown replied by 1 follower in my own Tweet list
		And new Tweet3 is shown replied by 0 follower in my own Tweet list

	@advTest
	Scenario: Post message chain and immediately switch to another page to read the Tweets(will fail)
		Given Popup "Compose new Tweet" is shown
		When I add 3 Tweets with messege "Multiple messages" and submit
		And the new Tweets are shown in the main page stream list
		And the new Tweets are shown in my own Tweet list
		And new Tweet1 is shown replied by 1 follower in my own Tweet list
		And new Tweet2 is shown replied by 1 follower in my own Tweet list
		And new Tweet3 is shown replied by 0 follower in my own Tweet list
	
	@funcTest
	Scenario: Like Tweets
		Given Popup "Compose new Tweet" is shown
		When I add 3 Tweets with messege "Like message test" and submit
		And there will be status message showing "Your Tweets were sent."
		When I click like in new Tweet1 in the main page stream list
		And I click like in new Tweet3 in my own Tweet list
		Then the new Tweets are shown in the main page stream list
		And new Tweet1 is shown liked by 1 follower in main page stream list
		And new Tweet3 is shown liked by 1 follower in main page stream list
		But new Tweet2 is shown liked by 0 follower in main page stream list
		And the new Tweets are shown in my own Tweet list
		And new Tweet1 is shown liked by 1 follower in my own Tweet list
		And new Tweet3 is shown liked by 1 follower in my own Tweet list
		But new Tweet2 is shown liked by 0 follower in my own Tweet list
		
	@funcTest
	Scenario: Unlike Tweets
		Given Popup "Compose new Tweet" is shown
		When I add 3 Tweets with messege "Like and unlike messages test" and submit
		And there will be status message showing "Your Tweets were sent."
		When I click like in new Tweet1 in the main page stream list
		And I click like in new Tweet2 in my own Tweet list
		And I click like in new Tweet2 in the main page stream list
		Then new Tweet1 is shown liked by 1 follower in main page stream list
		But new Tweet2 is shown liked by 0 follower in main page stream list
		And new Tweet1 is shown liked by 1 follower in my own Tweet list
		But new Tweet2 is shown liked by 0 follower in my own Tweet list
		 
	@funcTest
	Scenario: Retweet an existing Tweet without further comment
		Given Popup "Compose new Tweet" is shown
		When I add 3 Tweets with messege "Message to retweet" and submit
		And there will be status message showing "Your Tweets were sent."
		When I click retweet in new Tweet2 in the main page stream list without comment
		Then new Tweet2 is shown retweeted by 1 follower in the main page stream list
		But new Tweet1 is shown retweeted by 0 follower in the main page stream list
		But new Tweet3 is shown retweeted by 0 follower in the main page stream list
		And new Tweet2 is shown retweeted by 1 follower in my own Tweet list
		And retweet label is shown in Tweet2 in my own Tweet list
		But new Tweet1 is shown retweeted by 0 follower in my own Tweet list
		But new Tweet3 is shown retweeted by 0 follower in my own Tweet list
	
	@funcTest
	Scenario: Retweet an existing Tweet with more comment
		Given Popup "Compose new Tweet" is shown
		When I add 3 Tweets with messege "More messages to retweet" and submit
		And there will be status message showing "Your Tweets were sent."
		When I click retweet in new Tweet2 in the main page stream list with comment "[RT] test"
		Then all new and retweeted messages are shown in my own Tweet list
		Then all new and retweeted messages are shown in the main page stream list
	
	@funcTest
	Scenario: Reply an existing Tweet (Will fail on counter check)
		Given Popup "Compose new Tweet" is shown
		And I add 3 Tweets with messege "Messages to be replied" and submit
		And there will be status message showing "Your Tweets were sent."
		When I click reply in new Tweet2 in my own Tweet list with message "REPLY Here!"
		Then new Tweet3 is shown replied by 0 follower in the main page stream list
		And new Tweet2 is shown replied by 2 followers in my own Tweet list
		# Counter check on Tweet2 will fail as update is not done in time.  Refresh page does not help