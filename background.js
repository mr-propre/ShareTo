'use strict';

const initialize = {
    facebookURL: "https://www.facebook.com/sharer/sharer.php?u=",
    messengerURL: "https://www.facebook.com/dialog/send?app_id=305348673807958&link=",
    gmailURL: "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&body=",
    outlookURL: "https://outlook.office.com/mail/deeplink/compose?to=to_address&subject=subject&body=body",
    externalEmailURL: "mailto:?&body=",
    twitterURL: "https://twitter.com/intent/tweet?text=",
    redditURL: "https://www.reddit.com/submit?url=",
    vkURL: 'https://vk.com/share.php?url=',
}

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set(initialize, function(error) {
    if (error) {
        console.error(error)
    }
    console.log("Successfuly initialized.");
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostContains: '.'}, //prevents using the extension with content that is not online (ex: local PDF)
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});