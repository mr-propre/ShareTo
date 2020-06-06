'use strict';

chrome.runtime.onInstalled.addListener(function () {
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