$(document).ready(function () {
  const urlList = {
    facebook: "https://www.facebook.com/sharer/sharer.php?u=",
    messenger: "https://www.facebook.com/dialog/send?app_id=305348673807958&redirect_uri=none&link=",
    gmail: "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&body=",
    outlook: "https://outlook.office.com/mail/deeplink/compose?to=to_address&subject=subject&body=body",
    externalEmail: "mailto:?&body=",
    twitter: "https://twitter.com/intent/tweet?text=",
    reddit: "https://www.reddit.com/submit?url=",
    vk: "https://vk.com/share.php?url=",
  }

  function share(txt) {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
      let currentUrl = tabs[0].url;
      // use `url` here inside the callback because it's asynchronous!
      var url = urlList[txt] + currentUrl;
      
      window.open(url);
  });
  }

  $("#facebook").on('click', function () {
    share("facebook");
  });
  $("#messenger").on('click', function () {
    share("messenger");
  });
  $("#gmail").on('click', function () {
    share("gmail");
  });
  $("#outlook").on('click', function () {
    share("outlook");
  });
  $("#externalEmail").on('click', function () {
    share("externalEmail");
  });
  $("#twitter").on('click', function () {
    share("twitter");
  });
  $("#reddit").on('click', function () {
    share("reddit");
  });
  $("#vk").on('click', function () {
    share("vk");
  });
});