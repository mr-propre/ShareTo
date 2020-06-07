$(document).ready(() => {
    var sharesList = [
        "facebookShares",
        "messengerShares",
        "gmailShares",
        "outlookShares",
        "externalEmailShares",
        "twitterShares",
        "redditShares",
        "vkShares"
    ]
    var historyList = [];

    chrome.storage.sync.get(sharesList, function (obj) {
        for (var key in obj) {
            if (obj[key] > 0) {
                for (var i = 1; i <= obj[key]; i++) {
                    historyList.push(key.replace("Shares", "") + i);
                }
            }
        }
        chrome.storage.sync.get(historyList, (links) => {
            for (var key in links) {
                $("#history").append('<div class="col s12"><a href="' + links[key] + '" class="flow-text" style="font-size: small;">' + key + '</a></div>');
            }
        });
    });
});