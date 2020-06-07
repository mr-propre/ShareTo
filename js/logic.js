$(document).ready(() => {

    function share(platform) {
        var shares = platform + "Shares";

        chrome.storage.sync.get(shares, (obj) => {
            var keyname = platform + (obj[shares] + 1);
            chrome.storage.sync.set({ [shares]: obj[shares] + 1 });
            chrome.tabs.getSelected(null, (tab) => {
                var currentUrl = tab.url;
                chrome.storage.sync.get(platform, (link) => {
                    var url = link[platform] + currentUrl;
                    chrome.storage.sync.set({ [platform + (obj[shares] + 1)]: currentUrl });
                    window.open(url);
                });
            });
        });
    }

    $("#facebook").on('click', () => {
        share("facebook");
    });
    $("#messenger").on('click', () => {
        share("messenger");
    });
    $("#gmail").on('click', () => {
        share("gmail");
    });
    $("#outlook").on('click', () => {
        share("outlook");
    });
    $("#externalEmail").on('click', () => {
        share("externalEmail");
    });
    $("#twitter").on('click', () => {
        share("twitter");
    });
    $("#reddit").on('click', () => {
        share("reddit");
    });
    $("#vk").on('click', () => {
        share("vk");
    });
});
