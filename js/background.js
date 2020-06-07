'use strict';

const urlList = {
    facebook: "https://www.facebook.com/sharer/sharer.php?u=",
    messenger: "https://www.facebook.com/dialog/send?app_id=305348673807958&redirect_uri=none&link=",
    gmail: "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&body=",
    outlook: "https://outlook.office.com/mail/deeplink/compose?body=",
    externalEmail: "mailto:?&body=",
    twitter: "https://twitter.com/intent/tweet?text=",
    reddit: "https://www.reddit.com/submit?url=",
    vk: "https://vk.com/share.php?url=",
}

const sharingNb = {
    facebookShares: 0,
    messengerShares: 0,
    gmailShares: 0,
    outlookShares: 0,
    externalEmailShares: 0,
    twitterShares: 0,
    redditShares: 0,
    vkShares: 0
}

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set(urlList, () => {
        console.log("Sharing links successfuly stored.");
    });
    chrome.storage.sync.set(sharingNb, () => {
        console.log("Sharing history initialized successfuly.");
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostContains: '.' }, //prevents using the extension with content that is not online (ex: local PDF)
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});