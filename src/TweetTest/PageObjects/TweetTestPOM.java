	package TweetTest.PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.By;

import java.io.FileInputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Properties;

public class TweetTestPOM {
	private WebDriver webDriver;
	private String loginUsername;
	private List<String> postedTweetMsgList;
	
	private Properties pageProp;
	private FileInputStream inPropFile;
	private int postedTweetCount;
	
	// Login page
	@FindBy(css="a.StaticLoggedOutHomePage-buttonLogin")
	WebElement loginPageButton;
	@FindBy(css="input.js-username-field")
	WebElement userNameText;
	@FindBy(css="input.js-password-field")
	WebElement pwdText;
	@FindBy(css="div.signin-wrapper button[type='submit']")
	WebElement loginButton;
	
	// Main page	
	@FindBy(css="li#global-nav-home")
	WebElement mainHomeButton;
	@FindBy(css="div.DashboardProfileCard-content b")
	WebElement twitterUsernameText;
	@FindBy(xpath="//div[@class='ProfileCardStats']//span[contains(text(),'Tweets')]")
	WebElement showMyTweetButton;
	@FindBy(xpath="//div[@class='ProfileCardStats']//span[contains(text(),'Tweets')]/following-sibling::span")
	WebElement mainPagePostedTweetCounter;
	
	// My Tweets page
	@FindBy(xpath="//div[@class='ProfileNav']//span[contains(text(),'Tweets')]/following-sibling::span[@data-count]")
	WebElement myTweetPageCounter;
	
	// Post New Tweet pop-up
	@FindBy(id="global-new-tweet-button")
	WebElement newTweetButton;
	@FindBy(css=".TweetstormDialog-content")
	WebElement postTweetPopup;
	@FindBy(css=".TweetstormDialog-content h3#Tweetstorm-dialog-header")
	WebElement postTweetPopupHeader;
	@FindBy(css="div#Tweetstorm-dialog-dialog button.js-close")
	WebElement closeTweetPopupButton;
	@FindBy(css="div#Tweetstorm-dialog-dialog div[id^=Tweetstorm-tweet-box-][data-index='0'] button.js-add-tweet")
	WebElement tweetBox0AddButton;
	@FindBy(css="#Tweetstorm-tweet-box-0 > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > span:nth-child(1) > button:nth-child(1)")
	WebElement addMoreTweetButton;
	@FindBy(css="div.modal-footer button.js-add-tweet")
	WebElement addMultiTweetButton;
	@FindBy(css="div#Tweetstorm-dialog-dialog div[id^=Tweetstorm-tweet-box-][data-index='0'] button.SendTweetsButton")
	WebElement submitSingleTweetButton;
	@FindBy(css="div.modal-footer button.SendTweetsButton")
	WebElement submitMultiTweetButton;
	private final By tweetTextBoxLocator = By.cssSelector("div.rich-editor");
	
	//Confirm Dialog boxes
	@FindBy(css="div#confirm_dialog-dialog")
	WebElement confirmDialog;
	@FindBy(css="h3#confirm_dialog-header")
	WebElement confirmDialogHeader;
	@FindBy(css="div#confirm_dialog-dialog button#confirm_dialog_submit_button")
	WebElement confirmDialogSubmitButton;
	@FindBy(css="div#confirm_dialog-dialog button#confirm_dialog_cancel_button")
	WebElement confirmDialogCancelButton;
	
	// Retweet Dialog boxes
	@FindBy(css="div#retweet-tweet-dialog-dialog")
	WebElement retweetDialog;
	@FindBy(css="h3#retweet-tweet-dialog-header")
	WebElement retweetDialogHeader;
	@FindBy(css="div#retweet-with-comment")
	WebElement retweetCommentLabel;
	@FindBy(css="button.retweet-action")
	WebElement retweetSubmitButton;
	
	// Reply Dialog boxes
	@FindBy(css="div#global-tweet-dialog-dialog")
	WebElement replyDialog;
	@FindBy(css="h3#global-tweet-dialog-header")
	WebElement replyDialogHeader;
	@FindBy(css="div#tweet-box-global")
	WebElement replyCommentLabel;
	@FindBy(css="div#global-tweet-dialog-dialog button.tweet-action")
	WebElement replySubmitButton;
	
	// Tweet list
	@FindBy(css="div#Tweetstorm-dialog-dialog div[id^=Tweetstorm-tweet-box-]")
	List<WebElement> tweetBoxes;
	@FindBy(css="div.stream-container ol#stream-items-id li[id^=stream-item-tweet]")
	List<WebElement> mainPageStreamList;
	@FindBy(css="div.stream-container button.new-tweets-bar")
	WebElement streamRefreshButton;
	@FindBy(css="div#timeline ol#stream-items-id li[id^=stream-item-tweet]")
	List<WebElement> tweetPageStreamList;
	private final By tweetMsgTextLocator = By.cssSelector("div.js-tweet-text-container p.tweet-text");
	private final By hashTagLocator = By.cssSelector("a.twitter-hashtag");
	private final By userMentionedLocator = By.cssSelector("a.twitter-atreply");
	private final By likeTweetMsgLocator = By.cssSelector("button.js-actionFavorite.ProfileTweet-actionButton");
	private final By unlikeTweetMsgLocator = By.cssSelector("button.js-actionFavorite.ProfileTweet-actionButtonUndo");
	private final By retweetMsgLocator = By.cssSelector("button.js-actionRetweet.ProfileTweet-actionButton");
	private final By undoRetweetMsgLocator = By.cssSelector("button.js-actionRetweet.ProfileTweet-actionButtonUndo");
	private final By replyTweetMsgLocator = By.cssSelector("button.js-actionReply.ProfileTweet-actionButton");
	private final By actionCounterLocator = By.cssSelector("span.ProfileTweet-actionCountForPresentation");
	private final By retweetLabelLocator = By.cssSelector("span.js-retweet-text");
//	private final By quotedTweetTextLocator = By.cssSelector("div.QuoteTweet-text");
	
	// Msg Drawer
	@FindBy(css="div#message-drawer span.message-text")
	WebElement messageDrawerTextBox;
	@FindBy(xpath="//div[@id='message-drawer']//span[@class='message-text'][contains(text(), 'Your Tweet was sent.')]")
	WebElement messageDrawerShowsTweetSent;
	@FindBy(xpath="//div[@id='message-drawer']//span[@class='message-text'][contains(text(), 'You have already sent this Tweet.')]")
	WebElement messageDrawerShowsDuplicatedTweet;
	@FindBy(css="div#message-drawer a.dismiss")
	WebElement closeDuplicateTweetButton;
	
	// To be removed
	@FindBy(css=".new-tweets-bar")
	WebElement moreTweetNotifyButton;
	
	public TweetTestPOM(WebDriver driver, String siteUnderTest) throws IOException
	{
		this.webDriver = driver;
		driver.get(siteUnderTest);
		PageFactory.initElements(driver, this);
		pageProp = new Properties();
		inPropFile = new FileInputStream("files/page.properties");
		pageProp.load(inPropFile);
	}
	public void cleanUp() throws IOException
	{
		inPropFile.close();
	}
	public boolean showLoginPage()
	{
		try {
			new WebDriverWait(this.webDriver, 15).until(ExpectedConditions.elementToBeClickable(this.loginPageButton));
		}
		catch (TimeoutException e)
		{
			return false;
		}
		this.loginPageButton.click();
		
		return true;
	}
	public void enterLoginInfo(String userName, String password)
	{
		new WebDriverWait(this.webDriver, 3).until(ExpectedConditions.visibilityOf(this.userNameText));
		new WebDriverWait(this.webDriver, 3).until(ExpectedConditions.visibilityOf(this.pwdText));
		
		this.userNameText.sendKeys(userName);
		this.pwdText.sendKeys(password);
	}
	public void enterLoginInfoAndSubmit(String userName, String password)
	{
		this.enterLoginInfo(userName, password);
		this.pwdText.submit();
		new WebDriverWait(this.webDriver, 3).until(ExpectedConditions.visibilityOf(this.mainHomeButton));
		this.loginUsername = this.twitterUsernameText.getText();
	}
	public void performLogin(boolean validCredential) throws TimeoutException
	{
		String userName = "";
		String password = "";
		
		if (validCredential)
		{
			userName = this.pageProp.getProperty("validTwitterUsername");
			password = this.pageProp.getProperty("validTwitterPassword");
		}
		else
		{
			userName = this.pageProp.getProperty("invalidTwitterUsername");
			password = this.pageProp.getProperty("invalidTwitterPassword");
		}
		this.enterLoginInfo(userName, password);
		this.loginButton.click();
		if (!this.showLoginPage() && validCredential)
		{
			new WebDriverWait(this.webDriver, 3).until(ExpectedConditions.visibilityOf(this.mainHomeButton));
			this.loginUsername = this.twitterUsernameText.getText();
			this.postedTweetCount = Integer.parseInt(this.mainPagePostedTweetCounter.getText());
			this.postedTweetMsgList = new ArrayList<>();
		}
	}
	public boolean isPostTweetPopupDisplayed(String expectedTitle)
	{
		try {
			new WebDriverWait(this.webDriver, 3).until(ExpectedConditions.visibilityOf(this.postTweetPopup));
		}
		catch (TimeoutException e)
		{
			return false;
		}
		boolean headerMatch = this.postTweetPopupHeader.getText().equals(expectedTitle);
		return headerMatch;
	}
	public void clickNewTweetButton()
	{
		this.newTweetButton.click();
	}
	public void clickCloseTweetPopup() throws Throwable
	{
		new WebDriverWait(this.webDriver, 3).until(ExpectedConditions.visibilityOf(this.postTweetPopup));
		this.closeTweetPopupButton.click();
	}
	public boolean isSubmitNewTweetButtonEnabled()
	{
		return this.submitSingleTweetButton.isEnabled();
	}
	public boolean isAddNewTweetButtonEnabled()
	{
		return this.addMoreTweetButton.isEnabled();
	}
	private void postTweet(String msg, boolean submitMsg, boolean appendMode)
	{
		if(!this.postTweetPopup.isDisplayed())
		{
			this.newTweetButton.click();
		}
		new WebDriverWait(this.webDriver, 3).until(ExpectedConditions.visibilityOf(this.postTweetPopup));
		
		WebElement tweetText = null;
		WebElement submitButton = null;
		for (WebElement box: this.tweetBoxes)
		{
			if(box.getAttribute("data-index").equals("0"))
			{
				//tweetText = box.findElement(By.cssSelector("div.rich-editor"));
				//submitButton = box.findElement(By.cssSelector("button.SendTweetsButton"));
				tweetText = box.findElement(tweetTextBoxLocator);
				submitButton = this.submitSingleTweetButton;
			}	
		}
		String msgToAdd = "";
		if(!appendMode)
		{
			tweetText.clear();
			msgToAdd = msg;
		}
		else
		{
			msgToAdd = msg + tweetText.getText();
		}
		tweetText.sendKeys(msg);
		
		if (submitMsg)
		{
			this.postedTweetMsgList.add(msgToAdd);
			submitButton.click();
		}
	}
	public void appendTweetBox(String msgToAppend)
	{
		if(!this.postTweetPopup.isDisplayed())
		{
			this.newTweetButton.click();
		}
		new WebDriverWait(this.webDriver, 3).until(ExpectedConditions.visibilityOf(this.postTweetPopup));
		
		String msgToAppendTS = msgToAppend + " _TS_=" + new SimpleDateFormat("yyyy.MM.dd.HH.mm.ss").format(new Date());
		this.postTweet(msgToAppendTS, true, true);
	}
	public void postSingleTweet(String msgToPost, boolean submitMsg) throws TimeoutException
	{
		String msgWithTS = msgToPost + " _TS_=" + new SimpleDateFormat("yyyy.MM.dd.HH.mm.ss").format(new Date());
		this.postTweet(msgWithTS, submitMsg, false);
	}
	public void postMultiTweets(String msgToPost, int msgCount, boolean submitMsg)
	{
		String msgWithTS = msgToPost + " _TS_=" + new SimpleDateFormat("yyyy.MM.dd.HH.mm.ss").format(new Date());
		boolean enabledMultiTweet = false;
		WebElement submitTweetButton = null;
		
		for (int i=0; i<msgCount; i++)
		{
			WebElement addTweetButton = null;
			if(i > 0)		// need to add Tweet
			{
				if(!enabledMultiTweet)
				{
					addTweetButton = this.tweetBox0AddButton;
					submitTweetButton = this.submitSingleTweetButton;
					enabledMultiTweet = true;
				}
				else
				{
					addTweetButton = this.addMultiTweetButton;
					submitTweetButton = this.submitMultiTweetButton;
				}
			}
			else
			{
				addTweetButton = this.tweetBox0AddButton;
				submitTweetButton = this.submitSingleTweetButton;
			}
		
			for (WebElement box: this.tweetBoxes)
			{
				if(box.getAttribute("data-index").equals(String.valueOf(i)))
				{
					//WebElement tweetText = box.findElement(By.cssSelector("div.rich-editor"));
					WebElement tweetText = box.findElement(this.tweetTextBoxLocator);
					
					if (!tweetText.isDisplayed())
					{
						addTweetButton.click();
						new WebDriverWait(this.webDriver, 3).until(ExpectedConditions.visibilityOf(tweetText));
					}
					String msgToSend = msgWithTS + " #" + String.valueOf(i);
					tweetText.sendKeys(msgToSend);
					this.postedTweetMsgList.add(msgToSend);
				}
			}
		}
		submitTweetButton.click();
	}
	public boolean postDuplicatedMessage()
	{
		String duplicatedMsg = "";
		if (this.postedTweetMsgList.size() > 0)
		{
			duplicatedMsg = this.postedTweetMsgList.get(this.postedTweetMsgList.size() - 1);
		}
		else
		{
			return false;
		}
		this.postTweet(duplicatedMsg, true, false);
		return true;
	}
	public boolean checkTweetPopupMessage()
	{
		if(!this.postTweetPopup.isDisplayed())
		{
			return false;
		}
		WebElement tweetText = null;
		for (WebElement box: this.tweetBoxes)
		{
			if(box.getAttribute("data-index").equals("0"))
			{
				//tweetText = box.findElement(By.cssSelector("div.rich-editor"));
				tweetText = box.findElement(tweetTextBoxLocator);
			}	
		}
		
		if (tweetText != null)
		{
			if (this.postedTweetMsgList.size() > 0)
			{
				String expectedMsg = this.postedTweetMsgList.get(this.postedTweetMsgList.size() - 1);
				return (tweetText.getText().equals(expectedMsg));
			}
			else
			{
				return false;
			}
		}
		else
		{
			return false;
		}
	}
	private String getStatusMsgXpath(String expectedMsg)
	{
		return("//div[@id='message-drawer']//span[@class='message-text'][contains(text(), '" + expectedMsg +"')]");		
	}
	private WebElement findMessageFromList(List<WebElement> messageList, String msgToSearch, WebElement buttonToList, WebElement refreshButton)
	{
		if (this.isWebElementVisible(buttonToList))
		{
			buttonToList.click();
		}
		
		try {
			new WebDriverWait(this.webDriver, 3).until(ExpectedConditions.visibilityOfAllElements(messageList));
		}
		catch(StaleElementReferenceException e)
		{
			System.out.println("Stale");
		}
		
		if (this.isWebElementVisible(refreshButton))
		{
			refreshButton.click();
			this.isWebElementVisible(refreshButton);
		}
		//System.out.println("##### Message to find is [" + msgToSearch + "]");
		
		for (WebElement stream: messageList)
		{
			List<WebElement> conversationChain = stream.findElements(By.cssSelector("li.conversation-tweet-item"));
			if (conversationChain.size() == 0)		// Single conversation using different structure
			{
				conversationChain.add(stream);
			}
			else
			{
				conversationChain.add(stream.findElement(By.cssSelector("li.original-tweet-item")));
			}
			//System.out.println("Conversation chain size = " + conversationChain.size());
			for (WebElement tweet: conversationChain)
			{
				if (tweet.findElement(By.cssSelector("div.stream-item-header span.username b")).getText().equals(this.pageProp.getProperty("validTwitterUsername")))
				{ 
					WebElement tweetMsgElement = tweet.findElement(this.tweetMsgTextLocator); 
					String streamMsg = tweetMsgElement.getText();
					//System.out.println("#*#*" + streamMsg);
					if (msgToSearch.equals(streamMsg))
					{
						//System.out.println("#*#* Bingo");
						return tweet;
					}
				}
			}

		}

		return null;
	}
	private boolean toggleLikeInTweet(WebElement tweetElement)
	{
		boolean successfulToggle = true;
		
		try
		{
			if(tweetElement.findElement(this.likeTweetMsgLocator).isDisplayed())
			{
				tweetElement.findElement(this.likeTweetMsgLocator).click();
			}
			else if (tweetElement.findElement(this.unlikeTweetMsgLocator).isDisplayed())
			{
				tweetElement.findElement(this.unlikeTweetMsgLocator).click();
			}
			else
			{
				successfulToggle = false;
			}
		}
		catch(NoSuchElementException e)
		{
			successfulToggle = false;
		}
		return successfulToggle;
	}
	private boolean toggleRetweetInTweet(WebElement tweetElement, String msgToRetweet)
	{
		boolean successfulToggle = true;
		
		try
		{
			if(tweetElement.findElement(this.retweetMsgLocator).isDisplayed())
			{
				tweetElement.findElement(this.retweetMsgLocator).click();
				// Dialog here
				if (this.waitForRetweetDialogBox())
				{
					this.retweetCommentLabel.sendKeys(msgToRetweet);
					this.retweetSubmitButton.click();
					new WebDriverWait(this.webDriver, 3).until(ExpectedConditions.invisibilityOf(this.retweetDialog));
					if(msgToRetweet.length() > 0)		// Will be shown as quoted
					{
						this.postedTweetMsgList.add(msgToRetweet);
					}
				}
				else
				{
					//System.out.println("**** Dialog box not found");
					successfulToggle = false;
				}
				
			}
			else if (tweetElement.findElement(this.undoRetweetMsgLocator).isDisplayed())
			{
				tweetElement.findElement(this.undoRetweetMsgLocator).click();
			}
			else
			{
				//System.out.println("**** Where're my retweet buttons");
				successfulToggle = false;
			}
		}
		catch(NoSuchElementException e)
		{
			//System.out.println("**** Retweet Exception");
			successfulToggle = false;
		}
		return successfulToggle;
	}
	private boolean triggerReplyInTweet(WebElement tweetToReply, String msgToReply)
	{
		boolean successfulToggle = true;
		
		try
		{
			tweetToReply.findElement(this.replyTweetMsgLocator).click();
			if (this.waitForReplyDialogbox())
			{
				String msgWithTS = msgToReply + " _TS_=" + new SimpleDateFormat("yyyy.MM.dd.HH.mm.ss").format(new Date());
				this.replyCommentLabel.sendKeys(msgWithTS);
				this.postedTweetMsgList.add(msgWithTS);
				this.replySubmitButton.click();
				new WebDriverWait(this.webDriver, 3).until(ExpectedConditions.invisibilityOf(this.replyDialog));
			}
			else
			{
				successfulToggle = false;
			}				
		}
		catch(NoSuchElementException e)
		{
			//System.out.println("**** Retweet Exception");
			successfulToggle = false;
		}
		return successfulToggle;
	}
	public int getLikeCountInTweet(int msgIdx, String targetList)
	{
		int likeCount = 0;
		
		if ((msgIdx > this.postedTweetMsgList.size()) || (msgIdx <= 0))
		{
			return 0;
		}
		else
		{
			List<WebElement> msgList = null;
			WebElement buttonToList = null;
			WebElement refreshButton = this.streamRefreshButton;
			String msgToSearch = this.postedTweetMsgList.get(msgIdx - 1);
			if (targetList.equals("the main page stream list"))
			{
				msgList = this.mainPageStreamList;
				buttonToList = this.mainHomeButton;
			}
			else		// my Tweet List
			{
				msgList = this.tweetPageStreamList;
				buttonToList = this.showMyTweetButton;
			}
			WebElement tweetElement = this.findMessageFromList(msgList, msgToSearch, buttonToList, refreshButton);
			
			if(tweetElement == null)
			{
				likeCount = 0;
			}
			else
			{
				try
				{
					if (tweetElement.findElement(this.unlikeTweetMsgLocator).isDisplayed())
					{
						String likeCountStr = tweetElement.findElement(this.unlikeTweetMsgLocator).findElement(this.actionCounterLocator).getText();
						likeCount = Integer.parseInt(likeCountStr);
					}
				}
				catch(NoSuchElementException e)
				{
					likeCount = 0;
				}
			}
		}
		
		return likeCount;
	}
	public int getRetweetCountInTweet(int msgIdx, String targetList)
	{
		int retweetCount = 0;
		
		if ((msgIdx > this.postedTweetMsgList.size()) || (msgIdx <= 0))
		{
			return 0;
		}
		else
		{
			List<WebElement> msgList = null;
			WebElement buttonToList = null;
			WebElement refreshButton = this.streamRefreshButton;
			String msgToSearch = this.postedTweetMsgList.get(msgIdx - 1);
			if (targetList.equals("the main page stream list"))
			{
				msgList = this.mainPageStreamList;
				buttonToList = this.mainHomeButton;
			}
			else		// my Tweet List
			{
				msgList = this.tweetPageStreamList;
				buttonToList = this.showMyTweetButton;
			}
			WebElement tweetElement = this.findMessageFromList(msgList, msgToSearch, buttonToList, refreshButton);
			
			if(tweetElement == null)
			{
				retweetCount = 0;
			}
			else
			{
				try
				{
					if (tweetElement.findElement(this.undoRetweetMsgLocator).isDisplayed())
					{
						String retweetCountStr = tweetElement.findElement(this.undoRetweetMsgLocator).findElement(this.actionCounterLocator).getText();
						retweetCount = Integer.parseInt(retweetCountStr);
					}
				}
				catch(NoSuchElementException e)
				{
					retweetCount = 0;
				}
			}
		}
		
		return retweetCount;
	}
	public int getReplyCountInTweet(int msgIdx, String targetList)
	{
		int replyCount = 0;
		
		if ((msgIdx > this.postedTweetMsgList.size()) || (msgIdx <= 0))
		{
			return 0;
		}
		else
		{
			List<WebElement> msgList = null;
			WebElement buttonToList = null;
			WebElement refreshButton = this.streamRefreshButton;
			String msgToSearch = this.postedTweetMsgList.get(msgIdx - 1);
			if (targetList.equals("the main page stream list"))
			{
				msgList = this.mainPageStreamList;
				buttonToList = this.mainHomeButton;
			}
			else		// my Tweet List
			{
				msgList = this.tweetPageStreamList;
				buttonToList = this.showMyTweetButton;
			}
			WebElement tweetElement = this.findMessageFromList(msgList, msgToSearch, buttonToList, refreshButton);
			
			if(tweetElement == null)
			{
				replyCount = 0;
			}
			else
			{
				try
				{
					if (tweetElement.findElement(this.replyTweetMsgLocator).isDisplayed())
					{
						String replyCountStr = "";
						try {
							replyCountStr = tweetElement.findElement(this.replyTweetMsgLocator).findElement(this.actionCounterLocator).getText();
						}catch (NoSuchElementException e) {
							replyCountStr = "0";		// The element does not exist when reply count is 0
						}
						try {
							replyCount = Integer.parseInt(replyCountStr);
						}catch (NumberFormatException e) {
							replyCount = 0;
						}
							
					}
				}
				catch(NoSuchElementException e)
				{
					replyCount = 0;
				}
			}
		}
		
		return replyCount;
	}
	public boolean checkRetweetLabel(int msgIdx)
	{
		boolean retweetLabelExist = false;
		
		if ((msgIdx > this.postedTweetMsgList.size()) || (msgIdx <= 0))
		{
			return false;
		}
		else
		{
			String msgToSearch = this.postedTweetMsgList.get(msgIdx - 1);
			WebElement tweetElement = this.findMessageFromList(this.tweetPageStreamList, msgToSearch, this.showMyTweetButton, this.streamRefreshButton);
			
			if(tweetElement == null)
			{
				retweetLabelExist = false;
			}
			else
			{
				try
				{
					retweetLabelExist = tweetElement.findElement(this.retweetLabelLocator).isDisplayed();
				}
				catch(NoSuchElementException e)
				{
					retweetLabelExist = false;
				}
			}
		}
		
		return retweetLabelExist;
	}
	public boolean likeATweet(int msgIdx, String targetList)
	{
		if ((msgIdx > this.postedTweetMsgList.size()) || (msgIdx <= 0))
		{
			return false;
		}
		else
		{
			List<WebElement> msgList = null;
			WebElement buttonToList = null;
			WebElement refreshButton = this.streamRefreshButton;
			String msgToSearch = this.postedTweetMsgList.get(msgIdx - 1);
			if (targetList.equals("the main page stream list"))
			{
				msgList = this.mainPageStreamList;
				buttonToList = this.mainHomeButton;
			}
			else		// my Tweet List
			{
				msgList = this.tweetPageStreamList;
				buttonToList = this.showMyTweetButton;
			}
			WebElement tweetToLike = this.findMessageFromList(msgList, msgToSearch, buttonToList, refreshButton);
			if (tweetToLike == null)
			{
				return false;
			}
			else
			{
				return this.toggleLikeInTweet(tweetToLike);
			}
		}
	}
	public boolean retweetATweet(int msgIdx, String targetList, String msgToRetweet)
	{
		if ((msgIdx > this.postedTweetMsgList.size()) || (msgIdx <= 0))
		{
			return false;
		}
		else
		{
			List<WebElement> msgList = null;
			WebElement buttonToList = null;
			WebElement refreshButton = this.streamRefreshButton;
			String msgToSearch = this.postedTweetMsgList.get(msgIdx - 1);
			if (targetList.equals("the main page stream list"))
			{
				msgList = this.mainPageStreamList;
				buttonToList = this.mainHomeButton;
			}
			else		// my Tweet List
			{
				msgList = this.tweetPageStreamList;
				buttonToList = this.showMyTweetButton;
			}
			WebElement tweetToRetweet = this.findMessageFromList(msgList, msgToSearch, buttonToList, refreshButton);
			if (tweetToRetweet == null)
			{
				return false;
			}
			else
			{
				return this.toggleRetweetInTweet(tweetToRetweet, msgToRetweet);
			}
		}
	}
	public boolean replyATweet(int msgIdx, String targetList, String msgToRetweet)
	{
		if ((msgIdx > this.postedTweetMsgList.size()) || (msgIdx <= 0))
		{
			return false;
		}
		else
		{
			List<WebElement> msgList = null;
			WebElement buttonToList = null;
			WebElement refreshButton = this.streamRefreshButton;
			String msgToSearch = this.postedTweetMsgList.get(msgIdx - 1);
			if (targetList.equals("the main page stream list"))
			{
				msgList = this.mainPageStreamList;
				buttonToList = this.mainHomeButton;
			}
			else		// my Tweet List
			{
				msgList = this.tweetPageStreamList;
				buttonToList = this.showMyTweetButton;
			}
			WebElement tweetToRetweet = this.findMessageFromList(msgList, msgToSearch, buttonToList, refreshButton);
			if (tweetToRetweet == null)
			{
				return false;
			}
			else
			{
				return this.triggerReplyInTweet(tweetToRetweet, msgToRetweet);
			}
		}
	}
	public void waitForStatusMsg(String expectedMsg, boolean waitForDisappear) throws TimeoutException
	{
		new WebDriverWait(this.webDriver, 5).until(ExpectedConditions.visibilityOfElementLocated(By.xpath(this.getStatusMsgXpath(expectedMsg))));
		if (waitForDisappear)
		{
			new WebDriverWait(this.webDriver, 3).until(ExpectedConditions.invisibilityOfElementLocated(By.xpath(this.getStatusMsgXpath(expectedMsg))));
		}
	}
	public boolean waitForDialogBox(String expectedHeader)
	{
		new WebDriverWait(this.webDriver, 3).until(ExpectedConditions.visibilityOf(this.confirmDialog));
		
		return this.confirmDialogHeader.getText().equals(expectedHeader);
	}
	private boolean waitForRetweetDialogBox()
	{
		try {
			new WebDriverWait(this.webDriver, 3).until(ExpectedConditions.visibilityOf(this.retweetDialog));
		}
		catch(NoSuchElementException e) {
			return false;
		}
		return true;
	}
	private boolean waitForReplyDialogbox()
	{
		try {
			new WebDriverWait(this.webDriver, 3).until(ExpectedConditions.visibilityOf(this.replyDialog));
		}
		catch(NoSuchElementException e) {
			return false;
		}
		return true;
	}
	public void clickDialogBoxButton(String buttonType)
	{
		new WebDriverWait(this.webDriver, 3).until(ExpectedConditions.visibilityOf(this.confirmDialog));
		if (buttonType.equals("confirm"))
		{
			this.confirmDialogSubmitButton.click();
		}
		else if (buttonType.equals("cancel"))
		{
			this.confirmDialogCancelButton.click();
		}
	}
	private boolean findAllMessagesFromList(List<WebElement> messageList, WebElement buttonToList, WebElement refreshButton, WebElement tweetCounter, boolean checkHashTag, boolean checkUserMentioned)
	{
		if (this.isWebElementVisible(buttonToList))
		{
			buttonToList.click();
		}
		
		try {
			new WebDriverWait(this.webDriver, 3).until(ExpectedConditions.visibilityOfAllElements(messageList));
		}
		catch(StaleElementReferenceException e)
		{
			System.out.println("Stale");
		}
		
		if (this.isWebElementVisible(refreshButton))
		{
			refreshButton.click();
			//new WebDriverWait(this.webDriver, 3).until(ExpectedConditions.invisibilityOf(refreshButton));
			this.isWebElementVisible(refreshButton);
		}
		
		boolean allMsgFound = true;
		for(String newMsg: this.postedTweetMsgList)
		{
			boolean thisMsgMatch = false;
			
			for (WebElement stream: messageList)
			{
				List<WebElement> conversationChain = stream.findElements(By.cssSelector("li.conversation-tweet-item"));
				if (conversationChain.size() == 0)		// Single conversation using different structure
				{
					conversationChain.add(stream);
				}
				else
				{
					conversationChain.add(stream.findElement(By.cssSelector("li.original-tweet-item")));
				}
				//System.out.println("Conversation chain size = " + conversationChain.size());
				for (WebElement tweet: conversationChain)
				{
					if (tweet.findElement(By.cssSelector("div.stream-item-header span.username b")).getText().equals(this.pageProp.getProperty("validTwitterUsername")))
					{
						//WebElement tweetMsgElement = tweet.findElement(By.cssSelector("div.js-tweet-text-container p.tweet-text"));
						WebElement tweetMsgElement = tweet.findElement(this.tweetMsgTextLocator); 
						String streamMsg = tweetMsgElement.getText();
						//System.out.println("*****" + streamMsg);
						if (newMsg.equals(streamMsg))
						{
							thisMsgMatch = true;
							//System.out.println("#*#* Bingo");
							if (checkHashTag)
							{
								try
								{
									tweetMsgElement.findElement(this.hashTagLocator);
								}
								catch (NoSuchElementException e)
								{
									thisMsgMatch = false;
								}
							}
							if (checkUserMentioned)
							{
								try
								{
									tweetMsgElement.findElement(this.userMentionedLocator);
								}
								catch (NoSuchElementException e)
								{
									thisMsgMatch = false;
								}
							}
						}
					}
				}
	
			}
			if (!thisMsgMatch)
			{
				allMsgFound = false;
			}
		}
		return allMsgFound;
	}
	public boolean findNewMessagesinStreamList(boolean checkHashTag, boolean checkUserMentioned) throws Throwable
	{
		return this.findAllMessagesFromList(this.mainPageStreamList, this.mainHomeButton, this.streamRefreshButton, this.mainPagePostedTweetCounter, checkHashTag, checkUserMentioned);
	}
	public boolean findNewMessagesinMyTweetList(boolean checkHashTag, boolean checkUserMentioned) throws Throwable
	{
		return this.findAllMessagesFromList(this.tweetPageStreamList, this.showMyTweetButton, this.streamRefreshButton, this.myTweetPageCounter, checkHashTag, checkUserMentioned);
	}
	private boolean isWebElementVisible(WebElement ele)
	{
		try
		{
			new WebDriverWait(this.webDriver, 3).until(ExpectedConditions.visibilityOf(ele));
		}
		catch (TimeoutException e)
		{
			return false;
		}
		return true;
	}
}