chrome.runtime.sendMessage({
    action: "sendEmail",
    videoUrl: window.location.href,
    videoTitle: document.title,
    email: "<abdelrahmanalyelhalwany@gmail.com>"
});