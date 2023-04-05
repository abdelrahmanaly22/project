document.getElementById("sendEmail").addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var tab = tabs[0];
        var videoUrl = tab.url;
        var videoTitle = tab.title;
        var email = document.getElementById("email").value;

        chrome.runtime.sendMessage({
            action: "sendEmail",
            videoUrl: videoUrl,
            videoTitle: videoTitle,
            email: email
        });
    });
})