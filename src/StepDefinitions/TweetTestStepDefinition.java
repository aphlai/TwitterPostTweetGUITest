package StepDefinitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.testng.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import TweetTest.PageObjects.TweetTestPOM;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.lang.UnsupportedOperationException;


public class TweetTestStepDefinition {
	
	private WebDriver webdriver;
	private TweetTest.PageObjects.TweetTestPOM tweetTestPOM;
	
	private Properties browseProp;
	private FileInputStream inPropFile;
	
	@Given("^I go to the (.*) login page$")
	public void inLoginPage(String pageToVisit) throws Throwable{
		if (pageToVisit.equals("Twitter"))
		{
			Assert.assertTrue(this.tweetTestPOM.showLoginPage(), "Twitter login page should be shown");
		}
		else
		{
			throw new UnsupportedOperationException("Page " + pageToVisit + " is not supported");
		}
	}
	@And("^I have logged in using (valid|invalid) credential$")
	public void loginUsingCredential(String credType) throws Throwable{
		boolean validCredential = credType.equals("valid"); 
		this.tweetTestPOM.performLogin(validCredential);
	}
	@And("^I click the Tweet button$")
	public void clickCreateNewTweet()
	{
		this.tweetTestPOM.clickNewTweetButton();
	}
	@And("I type Tweet messsage \"(.*)\" (and|but not) submit")
	public void postSingleTweet(String msgToPost, String submitAction) throws Throwable{
		boolean submitMsg = submitAction.equals("and");
		this.tweetTestPOM.postSingleTweet(msgToPost, submitMsg);
	}
	@And("^I add (\\d+) (?:Tweet|Tweets) with messege \"(.*)\" (and|but not) submit$")
	public void postMultiTweets(int msgCount, String msgToPost, String submitAction)
	{
		boolean submitMsg = submitAction.equals("and");
		this.tweetTestPOM.postMultiTweets(msgToPost, msgCount, submitMsg);
	}
	@And("^I post a new Tweet with duplicated message content$")
	public void postDuplicatedTweet()
	{
		boolean duplicateMsgAvailble = this.tweetTestPOM.postDuplicatedMessage();
		Assert.assertTrue(duplicateMsgAvailble, "There is no duplicated message to send at all");
	}
	@And("^I append \"(.*)\" to my Tweet message and submit$")
	public void appendToExistingTweetMsg(String appendMsg)
	{
		this.tweetTestPOM.appendTweetBox(appendMsg);
	}
	@Then("^Popup \"(.*)\" is shown$")
	public void isNewTweetPopupShown(String expectedTitle)
	{
		boolean correctPopUp = this.tweetTestPOM.isPostTweetPopupDisplayed(expectedTitle);
		Assert.assertTrue(correctPopUp, "Post Tweet pop-up shown be shown");
	}
	@When("^I click like in new Tweet(\\d+) in (the main page stream list|my own Tweet list)$")
	public void likeTweetWithMsgIndex(int msgIdx, String targetList)
	{
		boolean actionSuccess = this.tweetTestPOM.likeATweet(msgIdx, targetList);
		Assert.assertTrue(actionSuccess, "Cannot successful find and like the target message");	
	}
	@When("^I click retweet in new Tweet(\\d+) in (the main page stream list|my own Tweet list) (with|without) comment(.*)$")
	public void retweetWithMsgIndex(int msgIdx, String targetList, String withComment, String commentMsg)
	{
		String actualComment="";
		if(withComment.equals("with"))
		{
			actualComment = commentMsg.replaceAll("^\\s+", "");		// Twitter will remove all leading whitespace also
		}
		boolean actionSuccess = this.tweetTestPOM.retweetATweet(msgIdx, targetList, actualComment);
		Assert.assertTrue(actionSuccess, "Can successfully find and like all the target messages");	
	}
	@When("^I click reply in new Tweet(\\d+) in (the main page stream list|my own Tweet list) with message \"(.*)\"$")
	public void replyWithMsgIdx(int msgIdx, String targetList, String replyMsg)
	{
		boolean actionSuccess = this.tweetTestPOM.replyATweet(msgIdx, targetList, replyMsg);
		Assert.assertTrue(actionSuccess, "Can successfully find and reply all the target messages");	
	}
	@And("^new Tweet(\\d+) is shown liked by (\\d+) (?:follower|followers) in (main page stream list|my own Tweet list)$")
	public void checkTweetLikeCount(int msgIdx, int expectedLikeCount, String targetList)
	{
		int actualLikeCount = this.tweetTestPOM.getLikeCountInTweet(msgIdx, targetList);
		Assert.assertEquals(actualLikeCount, expectedLikeCount);
	}
	@And("^new Tweet(\\d+) is shown retweeted by (\\d+) (?:follower|followers) in (the main page stream list|my own Tweet list)$")
	public void checkRetweetCount(int msgIdx, int expectedRetweetCount, String targetList)
	{
		int actualRetweetCount = this.tweetTestPOM.getRetweetCountInTweet(msgIdx, targetList);
		Assert.assertEquals(actualRetweetCount, expectedRetweetCount);
	}
	@And("^new Tweet(\\d+) is shown replied by (\\d+) (?:follower|followers) in (the main page stream list|my own Tweet list)$")
	public void checkReplyCount(int msgIdx, int expectedRetweetCount, String targetList)
	{
		int actualRetweetCount = this.tweetTestPOM.getReplyCountInTweet(msgIdx, targetList);
		Assert.assertEquals(actualRetweetCount, expectedRetweetCount);
	}
	@And("^retweet label (is|is not) shown in Tweet(\\d+) in my own Tweet list$")
	public void checkRetweetLabel(String expectPresence, int msgIdx)
	{
		boolean expectRetweetLabel = (expectPresence.equals("is"));
		boolean actualRetweetLabel = this.tweetTestPOM.checkRetweetLabel(msgIdx);
		
		Assert.assertEquals(actualRetweetLabel, expectRetweetLabel);
	}
	@And("^I click close tweet popup button$")
	public void closeTweetPopup() throws Throwable
	{
		this.tweetTestPOM.clickCloseTweetPopup();
	}
	@And("^(more Tweet|submit Tweet) button should be (enabled|disabled)(?:.*)$")
	public void submitTweetButtonStatus(String buttonToCheck, String expectedStatusString)
	{
		boolean expectedStatus = false;
		
		if (expectedStatusString.equals("enabled"))
		{
			expectedStatus = true;
		}
		else 	// Must be disabled as constrained by regex
		{
			expectedStatus = false;
		}
		
		if (buttonToCheck.equals("more Tweet"))
		{
			Assert.assertEquals(expectedStatus, this.tweetTestPOM.isAddNewTweetButtonEnabled());
		}
		else		// Must be "Submit Tweet" as constrained by regex
		{
			Assert.assertEquals(expectedStatus, this.tweetTestPOM.isSubmitNewTweetButtonEnabled());
		}
	}
	@Then("^there will be (persistent |)status message showing \"(.*)\"$")
	public void waitForStatusMsg(String msgType, String expectedStatusMsg)
	{
		boolean waitForDisappear = true;
		if (msgType.equals("persistent "))
		{
			waitForDisappear = false;
		}
		this.tweetTestPOM.waitForStatusMsg(expectedStatusMsg, waitForDisappear);
	}
	@And("^text message in the tweet popup is maintained$")
	public void checkTweetBoxMsgMaintained()
	{
		boolean msgMaintained = this.tweetTestPOM.checkTweetPopupMessage();
		Assert.assertTrue(msgMaintained, "The tweetbox message should still be maintained for editing after finding it is duplicated to an existing Tweet");
	}
	@Then("^there will be dialog box with header \"(.*)\"$")
	public void waitForDialogbox(String expectedHeader)
	{
		boolean expectedDialog = this.tweetTestPOM.waitForDialogBox(expectedHeader);
		Assert.assertTrue(expectedDialog, "Dialog box with expected header [" + expectedHeader + "] is not found");
	}
	@And("^I click (confirm|cancel) button in dialog box$")
	public void clickDialogBoxButton(String buttonSelected)
	{
		this.tweetTestPOM.clickDialogBoxButton(buttonSelected);
	}
	@And("^all new and retweeted (?:message is|messages are) shown in (the main page stream list|my own Tweet list)$")
	public void findNewMsgWithReplies(String targetList) throws Throwable
	{
		this.findNewTweetMsgs(targetList);
	}
	@And("^the new (?:Tweet is|Tweets are) shown in (the main page stream list|my own Tweet list)$")
	public void findNewTweetMsgs(String targetList) throws Throwable
	{
		boolean messagesFound = false;
		boolean checkHashTag = false;
		boolean checkUserMentioned = false;
		if (targetList.equals("the main page stream list"))
		{
			messagesFound = this.tweetTestPOM.findNewMessagesinStreamList(checkHashTag, checkUserMentioned);
		}
		else		// must be "my own Tweet list" as constrained by regex
		{
			messagesFound = this.tweetTestPOM.findNewMessagesinMyTweetList(checkHashTag, checkUserMentioned);
		}
		Assert.assertTrue(messagesFound, "Newly post message should appear in " + targetList);
	}
	@And("^the new Tweet in (the main page stream list|my own Tweet list) has (Hashtag|user mentioned)$")
	public void findNewTweetMsgLink(String targetList, String linkType) throws Throwable
	{
		boolean messagesFound = false;
		boolean checkHashTag = false;
		boolean checkUserMentioned = false;
		
		if (linkType.equals("Hashtag"))
		{
			checkHashTag = true;
		}
		if (linkType.equals("user mentioned"))
		{
			checkUserMentioned = true;
		}
		
		if (targetList.equals("the main page stream list"))
		{
			messagesFound = this.tweetTestPOM.findNewMessagesinStreamList(checkHashTag, checkUserMentioned);
		}
		else		// must be "my own Tweet list" as constrained by regex
		{
			messagesFound = this.tweetTestPOM.findNewMessagesinMyTweetList(checkHashTag, checkUserMentioned);
		}
		Assert.assertTrue(messagesFound, "Newly post message in " + targetList + " has no expected " + linkType + " link");
	}
	@Before
	public void beforeScenario() throws IOException {
		browseProp = new Properties();
		inPropFile = new FileInputStream("files/browse.properties");
		browseProp.load(inPropFile);
		
		System.setProperty("webdriver.gecko.driver", browseProp.getProperty("browserDriverPath"));
		this.webdriver = new FirefoxDriver(); 
		this.tweetTestPOM = new TweetTestPOM(webdriver, browseProp.getProperty("siteUnderTest"));
	}
	@After
	public void afterScenario() throws IOException {
		this.tweetTestPOM.cleanUp();
		this.webdriver.close();
		inPropFile.close();
	}
}
