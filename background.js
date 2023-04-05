chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action == "sendEmail") {
        var videoUrl = request.videoUrl;
        var videoTitle = request.videoTitle;
        var email = request.email;

        var subject = videoTitle;
        var body = videoUrl;

        var url =
            "https://mail.google.com/mail/?view=cm&fs=1&to=" +
            encodeURIComponent(email) +
            "&su=" +
            encodeURIComponent(subject) +
            "&body=" +
            encodeURIComponent(body);

        chrome.tabs.create({ url: url });
    }
});